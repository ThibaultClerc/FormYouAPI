import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const GetListData = (value) => {
  let listData;
  const user = useSelector(state => state.user);
  //const [courseTeacher, setCourseTeacher] = useState('');
  const [sessions, setSessions] = useState({});

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

  }


  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }
  return listData || [];
}

export default GetListData