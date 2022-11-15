import {TableSize} from './OptionsClick.styled';

const OptionsClick = ({ClickOption}) => {
  const options = [
    { id: '-', value: '-', text: '-' },
    { id: 'None', value: '-', text: 'Вільно' },
    { id: "kangoo-jumps", value: "Kangoo jumps", text: 'Kangoo jumps' },
    { id: "sky-jumping", value: "Sky jumping", text: 'Sky jumping' },
    { id: "stretching", value: "Stretching", text: 'Stretching' },
    { id: "trx", value: "TRX", text: 'TRX' },
    { id: "health-back", value: "Здорова спина", text: 'Здорова спина' },
    { id: "tabata", value: "Tabata", text: 'Tabata' },
    { id: "high-heels", value: "High heels", text: 'High heels' },
    { id: "tribal", value: "Tribal fusion", text: 'Tribal fusion' },
    { id: "twerk", value: "Twerk", text: 'Twerk' },
    { id: "body-balet", value: "Боди балет", text: 'Боди балет' },
    { id: "sky-jumping-child", value: "Sky child", text: 'Sky child' },
    { id: "kangoo-jumps-child-10", value: "Kangoo діти (6-10)", text: 'Kangoo діти (6-10)' },
    { id: "kangoo-jumps-child-14", value: "Kangoo діти (10-14)", text: 'Kangoo діти (10-14)' },
    { id: "yoga", value: "Йога", text: 'Йога' },
    { id: "functional", value: "Functional", text: 'Functional' },
    { id: "metabolick-workout", value: "Metabolick workout", text: 'Metabolick workout' },
  ];
  const weekDaysTime = [
    { id: 'monday' },
    { id: 'tuesday'},
    { id: 'wednesday'},
    { id: 'thursday'},
    { id: 'friday'},
    { id: 'saturday'},
    { id: 'sunday' },
  ];
    const Times = [
    { id: '0900', text: '9:00' },
    { id: '1000', text: '10:00' },
    { id: '1100', text: '11:00' },
    { id: '1200', text: '12:00' },
    { id: '1300', text: '13:00' },
    { id: '1400', text: '14:00' },
    { id: '1500', text: '15:00' },
    { id: '1600', text: '16:00' },
    { id: '1700', text: '17:00' },
    { id: '1800', text: '18:00' },
    { id: '1900', text: '19:00' },
    { id: '2000', text: '20:00' },
 
  ];
  return (
    <>
      {Times.map(time => (
        <tr
          key={time.id}
          id={time.id}
          className='time'
        >
          <td id={time.id}>{time.text}</td>
          {weekDaysTime.map(weekDay => (
            <TableSize
              key={weekDay.id}
              id={weekDay.id}
              className={weekDay.id}
            >
              <select className='select' onChange={ClickOption}>
                {options.map(option => (
                  <option
                    key={option.id}
                    id={option.id}
                    value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            </TableSize>
          ))}
        </tr>
      ))}
    </>
  )
}

export default OptionsClick;