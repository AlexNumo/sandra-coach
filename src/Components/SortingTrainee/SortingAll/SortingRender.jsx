import moment from 'moment/moment';
import { HandleVisitTraineeNO, HandleVisitTraineeYES } from '../VisitTraineeBTN/VisitTraineeBTN';
import {
  DayOfWeekWrapper,
  WrapperInfoTime,
  KindTrainee,
  Clients,
} from './SortingRender.styled';
// GrFormClose IoIosClose FcOk FcCheckmark
const SortingRender = ({
  URLInsta,
  clientsToday0800,
  clientsToday0900,
  clientsToday1000,
  clientsToday1100,
  clientsToday1200,
  clientsToday1300,
  clientsToday1400,
  clientsToday1500,
  clientsToday1600,
  clientsToday1700,
  clientsToday1800,
  clientsToday1900,
  clientsToday2000,
  clientsNextDay0800,
  clientsNextDay0900,
  clientsNextDay1000,
  clientsNextDay1100,
  clientsNextDay1200,
  clientsNextDay1300,
  clientsNextDay1400,
  clientsNextDay1500,
  clientsNextDay1600,
  clientsNextDay1700,
  clientsNextDay1800,
  clientsNextDay1900,
  clientsNextDay2000,
  clientsNextDayTwo0800,
  clientsNextDayTwo0900,
  clientsNextDayTwo1000,
  clientsNextDayTwo1100,
  clientsNextDayTwo1200,
  clientsNextDayTwo1300,
  clientsNextDayTwo1400,
  clientsNextDayTwo1500,
  clientsNextDayTwo1600,
  clientsNextDayTwo1700,
  clientsNextDayTwo1800,
  clientsNextDayTwo1900,
  clientsNextDayTwo2000,
  clientsNextDayThree0800,
  clientsNextDayThree0900,
  clientsNextDayThree1000,
  clientsNextDayThree1100,
  clientsNextDayThree1200,
  clientsNextDayThree1300,
  clientsNextDayThree1400,
  clientsNextDayThree1500,
  clientsNextDayThree1600,
  clientsNextDayThree1700,
  clientsNextDayThree1800,
  clientsNextDayThree1900,
  clientsNextDayThree2000,
  clientsNextDayFour0800,
  clientsNextDayFour0900,
  clientsNextDayFour1000,
  clientsNextDayFour1100,
  clientsNextDayFour1200,
  clientsNextDayFour1300,
  clientsNextDayFour1400,
  clientsNextDayFour1500,
  clientsNextDayFour1600,
  clientsNextDayFour1700,
  clientsNextDayFour1800,
  clientsNextDayFour1900,
  clientsNextDayFour2000,
  clientsNextDayFive0800,
  clientsNextDayFive0900,
  clientsNextDayFive1000,
  clientsNextDayFive1100,
  clientsNextDayFive1200,
  clientsNextDayFive1300,
  clientsNextDayFive1400,
  clientsNextDayFive1500,
  clientsNextDayFive1600,
  clientsNextDayFive1700,
  clientsNextDayFive1800,
  clientsNextDayFive1900,
  clientsNextDayFive2000,
  clientsNextDaySix0800,
  clientsNextDaySix0900,
  clientsNextDaySix1000,
  clientsNextDaySix1100,
  clientsNextDaySix1200,
  clientsNextDaySix1300,
  clientsNextDaySix1400,
  clientsNextDaySix1500,
  clientsNextDaySix1600,
  clientsNextDaySix1700,
  clientsNextDaySix1800,
  clientsNextDaySix1900,
  clientsNextDaySix2000,
  today,
  nextDay,
  nextDay1,
  nextDay2,
  nextDay3,
  nextDay4,
  nextDay5 }) => {
  const dateOfToday = moment().add(0, 'days').format('L');
  const dateOfNextDay = moment().add(1, 'days').format('L');
  const dateOfNextDay1 = moment().add(2, 'days').format('L');
  const dateOfNextDay2 = moment().add(3, 'days').format('L');
  const dateOfNextDay3 = moment().add(4, 'days').format('L');
  const dateOfNextDay4 = moment().add(5, 'days').format('L');
  const dateOfNextDay5 = moment().add(6, 'days').format('L');
  // console.log(clientsToday1400);
  return(
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <div style={{ padding: '5px' }}>
        <DayOfWeekWrapper>День тижня/Час</DayOfWeekWrapper>
        {/* <DayOfWeekWrapper>Час</DayOfWeekWrapper> */}
        <WrapperInfoTime>8:00</WrapperInfoTime>
        <WrapperInfoTime>9:00</WrapperInfoTime>
        <WrapperInfoTime>10:00</WrapperInfoTime>
        <WrapperInfoTime>11:00</WrapperInfoTime>
        <WrapperInfoTime>12:00</WrapperInfoTime>
        <WrapperInfoTime>13:00</WrapperInfoTime>
        <WrapperInfoTime>14:00</WrapperInfoTime>
        <WrapperInfoTime>15:00</WrapperInfoTime>
        <WrapperInfoTime>16:00</WrapperInfoTime>
        <WrapperInfoTime>17:00</WrapperInfoTime>
        <WrapperInfoTime>18:00</WrapperInfoTime>
        <WrapperInfoTime>19:00</WrapperInfoTime>
        <WrapperInfoTime>20:00</WrapperInfoTime>
      </div>
{/* ===========================ToDay======================================================================================== */}
      <div style={{ padding: '5px' }}>
        <DayOfWeekWrapper>{today} {dateOfToday }</DayOfWeekWrapper>
        <WrapperInfoTime>
          {clientsToday0800 ? <KindTrainee>{clientsToday0800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday0800 ? clientsToday0800.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsToday0900 ? <KindTrainee>{clientsToday0900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday0900 ? clientsToday0900.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsToday1000 ? <KindTrainee>{clientsToday1000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1000 ? clientsToday1000.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsToday1100 ? <KindTrainee>{clientsToday1100[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1100 ? clientsToday1100.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsToday1200 ? <KindTrainee>{clientsToday1200[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1200 ? clientsToday1200.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsToday1300 ? <KindTrainee>{clientsToday1300[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1300 ? clientsToday1300.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsToday1400 ? <KindTrainee>{clientsToday1400[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1400 ? clientsToday1400.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsToday1500 ? <KindTrainee>{clientsToday1500[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1500 ? clientsToday1500.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsToday1600 ? <KindTrainee>{clientsToday1600[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1600 ? clientsToday1600.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsToday1700 ? <KindTrainee>{clientsToday1700[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1700 ? clientsToday1700.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsToday1800 ? <KindTrainee>{clientsToday1800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1800 ? clientsToday1800.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsToday1900 ? <KindTrainee>{clientsToday1900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday1900 ? clientsToday1900.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsToday2000 ? <KindTrainee>{clientsToday2000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsToday2000 ? clientsToday2000.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
      </div>
{/* ===========================NextDay======================================================================================== */}
      <div style={{ padding: '5px' }}>
        <DayOfWeekWrapper>{nextDay} {dateOfNextDay }</DayOfWeekWrapper>
        <WrapperInfoTime>
          {clientsNextDay0800 ? <KindTrainee>{clientsNextDay0800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay0800 ? clientsNextDay0800.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDay0900 ? <KindTrainee>{clientsNextDay0900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay0900 ? clientsNextDay0900.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDay1000 ? <KindTrainee>{clientsNextDay1000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1000 ? clientsNextDay1000.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDay1100 ? <KindTrainee>{clientsNextDay1100[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1100 ? clientsNextDay1100.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDay1200 ? <KindTrainee>{clientsNextDay1200[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1200 ? clientsNextDay1200.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDay1300 ? <KindTrainee>{clientsNextDay1300[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1300 ? clientsNextDay1300.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDay1400 ? <KindTrainee>{clientsNextDay1400[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1400 ? clientsNextDay1400.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDay1500 ? <KindTrainee>{clientsNextDay1500[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1500 ? clientsNextDay1500.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDay1600 ? <KindTrainee>{clientsNextDay1600[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1600 ? clientsNextDay1600.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDay1700 ? <KindTrainee>{clientsNextDay1700[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1700 ? clientsNextDay1700.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDay1800 ? <KindTrainee>{clientsNextDay1800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1800 ? clientsNextDay1800.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDay1900 ? <KindTrainee>{clientsNextDay1900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay1900 ? clientsNextDay1900.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDay2000 ? <KindTrainee>{clientsNextDay2000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDay2000 ? clientsNextDay2000.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
      </div>
{/* ===========================NextDayTwo======================================================================================== */}
      <div style={{ padding: '5px' }}>
        <DayOfWeekWrapper>{nextDay1} {dateOfNextDay1 }</DayOfWeekWrapper>
        <WrapperInfoTime>
          {clientsNextDayTwo0800 ? <KindTrainee>{clientsNextDayTwo0800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo0800 ? clientsNextDayTwo0800.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayTwo0900 ? <KindTrainee>{clientsNextDayTwo0900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo0900 ? clientsNextDayTwo0900.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayTwo1000 ? <KindTrainee>{clientsNextDayTwo1000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1000 ? clientsNextDayTwo1000.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayTwo1100 ? <KindTrainee>{clientsNextDayTwo1100[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1100 ? clientsNextDayTwo1100.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayTwo1200 ? <KindTrainee>{clientsNextDayTwo1200[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1200 ? clientsNextDayTwo1200.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayTwo1300 ? <KindTrainee>{clientsNextDayTwo1300[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1300 ? clientsNextDayTwo1300.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayTwo1400 ? <KindTrainee>{clientsNextDayTwo1400[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1400 ? clientsNextDayTwo1400.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayTwo1500 ? <KindTrainee>{clientsNextDayTwo1500[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1500 ? clientsNextDayTwo1500.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayTwo1600 ? <KindTrainee>{clientsNextDayTwo1600[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1600 ? clientsNextDayTwo1600.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayTwo1700 ? <KindTrainee>{clientsNextDayTwo1700[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1700 ? clientsNextDayTwo1700.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayTwo1800 ? <KindTrainee>{clientsNextDayTwo1800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1800 ? clientsNextDayTwo1800.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayTwo1900 ? <KindTrainee>{clientsNextDayTwo1900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo1900 ? clientsNextDayTwo1900.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayTwo2000 ? <KindTrainee>{clientsNextDayTwo2000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayTwo2000 ? clientsNextDayTwo2000.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
      </div>
{/* ===========================NextDayThree=========================================== */}
      <div style={{ padding: '5px' }}>
        <DayOfWeekWrapper>{nextDay2} {dateOfNextDay2 }</DayOfWeekWrapper>
        <WrapperInfoTime>
          {clientsNextDayThree0800 ? <KindTrainee>{clientsNextDayThree0800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayThree0800 ? clientsNextDayThree0800.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayThree0900 ? <KindTrainee>{clientsNextDayThree0900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayThree0900 ? clientsNextDayThree0900.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayThree1000 ? <KindTrainee>{clientsNextDayThree1000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayThree1000 ? clientsNextDayThree1000.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayThree1100 ? <KindTrainee>{clientsNextDayThree1100[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayThree1100 ? clientsNextDayThree1100.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayThree1200 ? <KindTrainee>{clientsNextDayThree1200[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayThree1200 ? clientsNextDayThree1200.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayThree1300 ? <KindTrainee>{clientsNextDayThree1300[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayThree1300 ? clientsNextDayThree1300.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayThree1400 ? <KindTrainee>{clientsNextDayThree1400[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayThree1400 ? clientsNextDayThree1400.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayThree1500 ? <KindTrainee>{clientsNextDayThree1500[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayThree1500 ? clientsNextDayThree1500.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayThree1600 ? <KindTrainee>{clientsNextDayThree1600[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayThree1600 ? clientsNextDayThree1600.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayThree1700 ? <KindTrainee>{clientsNextDayThree1700[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayThree1700 ? clientsNextDayThree1700.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayThree1800 ? <KindTrainee>{clientsNextDayThree1800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayThree1800 ? clientsNextDayThree1800.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayThree1900 ? <KindTrainee>{clientsNextDayThree1900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayThree1900 ? clientsNextDayThree1900.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayThree2000 ? <KindTrainee>{clientsNextDayThree2000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayThree2000 ? clientsNextDayThree2000.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
      </div>
{/* ===========================NextDayFour======================================================================================== */}
      <div style={{ padding: '5px' }}>
        <DayOfWeekWrapper>{nextDay3} {dateOfNextDay3 }</DayOfWeekWrapper>
        <WrapperInfoTime>
          {clientsNextDayFour0800 ? <KindTrainee>{clientsNextDayFour0800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFour0800 ? clientsNextDayFour0800.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayFour0900 ? <KindTrainee>{clientsNextDayFour0900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFour0900 ? clientsNextDayFour0900.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayFour1000 ? <KindTrainee>{clientsNextDayFour1000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFour1000 ? clientsNextDayFour1000.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayFour1100 ? <KindTrainee>{clientsNextDayFour1100[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFour1100 ? clientsNextDayFour1100.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayFour1200 ? <KindTrainee>{clientsNextDayFour1200[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFour1200 ? clientsNextDayFour1200.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayFour1300 ? <KindTrainee>{clientsNextDayFour1300[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFour1300 ? clientsNextDayFour1300.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayFour1400 ? <KindTrainee>{clientsNextDayFour1400[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFour1400 ? clientsNextDayFour1400.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayFour1500 ? <KindTrainee>{clientsNextDayFour1500[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFour1500 ? clientsNextDayFour1500.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayFour1600 ? <KindTrainee>{clientsNextDayFour1600[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFour1600 ? clientsNextDayFour1600.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayFour1700 ? <KindTrainee>{clientsNextDayFour1700[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFour1700 ? clientsNextDayFour1700.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayFour1800 ? <KindTrainee>{clientsNextDayFour1800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFour1800 ? clientsNextDayFour1800.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayFour1900 ? <KindTrainee>{clientsNextDayFour1900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFour1900 ? clientsNextDayFour1900.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayFour2000 ? <KindTrainee>{clientsNextDayFour2000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFour2000 ? clientsNextDayFour2000.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
      </div>
{/* ===========================NextDayFive======================================================================================== */}
      <div style={{ padding: '5px' }}>
        <DayOfWeekWrapper>{nextDay4} {dateOfNextDay4 }</DayOfWeekWrapper>
        <WrapperInfoTime>
          {clientsNextDayFive0800 ? <KindTrainee>{clientsNextDayFive0800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFive0800 ? clientsNextDayFive0800.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayFive0900 ? <KindTrainee>{clientsNextDayFive0900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFive0900 ? clientsNextDayFive0900.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayFive1000 ? <KindTrainee>{clientsNextDayFive1000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFive1000 ? clientsNextDayFive1000.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayFive1100 ? <KindTrainee>{clientsNextDayFive1100[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFive1100 ? clientsNextDayFive1100.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayFive1200 ? <KindTrainee>{clientsNextDayFive1200[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFive1200 ? clientsNextDayFive1200.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayFive1300 ? <KindTrainee>{clientsNextDayFive1300[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFive1300 ? clientsNextDayFive1300.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayFive1400 ? <KindTrainee>{clientsNextDayFive1400[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFive1400 ? clientsNextDayFive1400.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayFive1500 ? <KindTrainee>{clientsNextDayFive1500[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFive1500 ? clientsNextDayFive1500.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayFive1600 ? <KindTrainee>{clientsNextDayFive1600[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFive1600 ? clientsNextDayFive1600.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayFive1700 ? <KindTrainee>{clientsNextDayFive1700[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFive1700 ? clientsNextDayFive1700.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayFive1800 ? <KindTrainee>{clientsNextDayFive1800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFive1800 ? clientsNextDayFive1800.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayFive1900 ? <KindTrainee>{clientsNextDayFive1900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFive1900 ? clientsNextDayFive1900.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDayFive2000 ? <KindTrainee>{clientsNextDayFive2000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDayFive2000 ? clientsNextDayFive2000.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
      </div>
      {/* ===========================NextDaySix======================================================================================== */}
      <div style={{ padding: '5px' }}>
        <DayOfWeekWrapper>{nextDay5} {dateOfNextDay5 }</DayOfWeekWrapper>
        <WrapperInfoTime>
          {clientsNextDaySix0800 ? <KindTrainee>{clientsNextDaySix0800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDaySix0800 ? clientsNextDaySix0800.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDaySix0900 ? <KindTrainee>{clientsNextDaySix0900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDaySix0900 ? clientsNextDaySix0900.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDaySix1000 ? <KindTrainee>{clientsNextDaySix1000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDaySix1000 ? clientsNextDaySix1000.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDaySix1100 ? <KindTrainee>{clientsNextDaySix1100[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDaySix1100 ? clientsNextDaySix1100.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDaySix1200 ? <KindTrainee>{clientsNextDaySix1200[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDaySix1200 ? clientsNextDaySix1200.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDaySix1300 ? <KindTrainee>{clientsNextDaySix1300[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDaySix1300 ? clientsNextDaySix1300.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDaySix1400 ? <KindTrainee>{clientsNextDaySix1400[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDaySix1400 ? clientsNextDaySix1400.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDaySix1500 ? <KindTrainee>{clientsNextDaySix1500[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDaySix1500 ? clientsNextDaySix1500.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDaySix1600 ? <KindTrainee>{clientsNextDaySix1600[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDaySix1600 ? clientsNextDaySix1600.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDaySix1700 ? <KindTrainee>{clientsNextDaySix1700[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDaySix1700 ? clientsNextDaySix1700.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDaySix1800 ? <KindTrainee>{clientsNextDaySix1800[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDaySix1800 ? clientsNextDaySix1800.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDaySix1900 ? <KindTrainee>{clientsNextDaySix1900[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDaySix1900 ? clientsNextDaySix1900.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
        <WrapperInfoTime>
          {clientsNextDaySix2000 ? <KindTrainee>{clientsNextDaySix2000[0].kind_trainee}</KindTrainee> : null}
          <ol start={1} type={1} style={{ marginLeft: '10px' }}>
            {clientsNextDaySix2000 ? clientsNextDaySix2000.map((item) => (
              <Clients key={item._id}><HandleVisitTraineeYES item={item}/>
                <a href={URLInsta({ item })} target="_blank" rel="noopener noreferrer" id={item._id}>
                  {item.name}</a><HandleVisitTraineeNO item={item}/></Clients>
            )) : <p>-</p>}</ol></WrapperInfoTime>
      </div>
    </div>
  )
};

export default SortingRender;