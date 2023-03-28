import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from 'Components/Modal/Modal';
import { clientAPI } from 'service/axios.config';


const PlanTrainings = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [trainingInfo, setTrainingInfo] = useState('');
  const [dataAllClients, setDataAllClients] = useState('');

  useEffect(() => {
    if (dataAllClients === '') {
      clientAPI.getDataALLUsers().then(result => setDataAllClients(result))
    }
  }, [dataAllClients])
  // console.log(dataAllClients[0].info[0].date.slice(0, 10))
  // console.log(selectedDate)

  const date = new Date(selectedDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
    // console.log("formattedDate: ", formattedDate);
  // if (dataAllClients && selectedDate) {
  //   const find = dataAllClients.find((arr) => { return arr.info.find((info) => { return info.date.slice(0, 10) === '2023-03-28' }) })
  //   console.log("find: ", find);
  // }
  // Дані про тренування для кожної дати
  const trainingData = {
    '2023-03-26': 2, // Приклад: 2 тренування на 26 березня 2023 року
    '2023-03-27': 1,
    '2023-03-28': 3,
    // Додайте дані для інших дат
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const dayOfWeek = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота'][date.getDay()];
    const dayOfMonth = date.getDate();
    const month = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'][date.getMonth()];
    const year = date.getFullYear();
    return `${dayOfWeek} ${dayOfMonth} ${month} ${year} року`;
  };

  const handleDateClick = date => {
    setSelectedDate(date);
    setShowModal(true);
    // Тут потрібно додати логіку отримання інформації про тренування на цей день
    setTrainingInfo(formatDate(date.toDateString()));
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dateString = date.toISOString().slice(0, 10);
      const trainingCount = trainingData[dateString];
      if (trainingCount) {
        return <p>({trainingCount})</p>;
      }
      return null;
    }
    return null;
  };

  // console.log(trainingInfo)

  return (
    <div>
      <Calendar
        value={selectedDate}
        onClickDay={handleDateClick}
        tileContent={tileContent}
      />
      {showModal && <Modal closeModal={closeModal} trainingInfo={trainingInfo} />}
    </div>
  );
}

export default PlanTrainings;