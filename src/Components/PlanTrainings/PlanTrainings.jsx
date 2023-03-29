import React, { useState, useEffect } from 'react';
import Modal from 'Components/Modal/Modal';
import { clientAPI } from 'service/axios.config';

const PlanTrainings = () => {
  // const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  // const [trainingInfo, setTrainingInfo] = useState('');
  const [dataAllClients, setDataAllClients] = useState('');

  useEffect(() => {
    if (dataAllClients === '') {
      clientAPI.getDataALLUsers().then(result => setDataAllClients(result))
    }
  }, [dataAllClients])




  const closeModal = () => {
    setShowModal(false);
  };

  // console.log(trainingInfo)

  return (
    <div>
      <h2>sdfdfsdf</h2>
      {showModal && <Modal closeModal={closeModal}
        // trainingInfo={trainingInfo}
      />}
    </div>
  );
}

export default PlanTrainings;