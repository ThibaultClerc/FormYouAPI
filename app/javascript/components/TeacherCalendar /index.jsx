import { Calendar, Alert , Badge} from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import GetListData from '../TeacherListData'
import moment from 'moment'
import 'antd/dist/antd.css'
import './calendar.css'

const FormYouTeacherCalendar = () => {
  const today = moment().format('YYYY-MM-DD');
  const [selectedDate, setSelectedDate] = useState({
    value: moment(today),
    selectedValue: moment(today),
    }
  );

  const user = useSelector(state => state.user);
  const [sessions, setSessions] = useState([]);

  const fetchCourseTeacher = () => {
    fetch(`api/teacher/courseteachers`, {
      method: 'get',
      headers: {
        'Authorization': `${Cookies.get('token')}`,
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      response.forEach(data => {
        setSessions(...sessions, data.attributes)
    })
    }).catch(error => {
      console.log(error)
    })
  };

  useEffect(() => {
    fetchCourseTeacher()
  }, []);

  useEffect(() => {
    console.log(sessions);
  }, [sessions]);

  function dateCellRender(value) {
    const listData = GetListData(value, sessions);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }
  
  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }
  
  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }

  const onSelect = value => {
    setSelectedDate({
      value,
      selectedValue: value
    });
  };

  const onPanelChange = value => {
    setSelectedDate({
      value,
      selectedValue: value
    });
  };

  return (    
    <>
        <Alert
          message={`You selected date: ${selectedDate.selectedValue && selectedDate.selectedValue.format('YYYY-MM-DD')}`}
        />
        <Calendar value={selectedDate.value} onSelect={onSelect} onPanelChange={onPanelChange} dateCellRender={dateCellRender} monthCellRender={monthCellRender}/>
    </>
    )
};

export default FormYouTeacherCalendar;