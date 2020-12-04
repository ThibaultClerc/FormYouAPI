import { Calendar, Alert , Badge} from 'antd';
import React, { useState, useEffect } from 'react';
import GetListData from '../ListData'
import GetListDataTeacher from '../ListDataTeacher'
import { useSelector } from 'react-redux';

import moment from 'moment'
import 'antd/dist/antd.css'
import './calendar.css'
import Cookies from 'js-cookie'
import { ModalSession } from '../Modal'
import userConnect from '../../store/reducers/user';


const FormYouCalendar = ({url}) => {
  const user = useSelector(state => state.user);
  const today = moment().format('YYYY-MM-DD');
  const [selectedDate, setSelectedDate] = useState({
    value: moment(today),
    selectedValue: moment(today),
    }
  );
  const [data, setData] = useState([]);
  const [visibleModal, setVisibleModal] = useState(null);

  const handleModalChange = (value) =>{
    setVisibleModal(value)
  };

  const fetchData = () => {
    fetch(`${url}`, {
      "method": "GET",
      "headers": {
        "Content-Type": "application/json",
        "Authorization": Cookies.get("token")
      },
    })
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      setData(response.data)
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    })
  };

  useEffect(() => {
    fetchData()
  }, []);

  useEffect(() => {
    console.log(data);
    console.log(visibleModal)
  }, [data]);


  const dateCellRender = (value) =>{
    if (data.length === 0){
      return null
    }
    let listData
    if(user.user_category === "teacher") {
      listData = GetListDataTeacher(value, data);
  } else {
      listData = GetListData(value, data);
    }

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
  
  const  getMonthData = (value)=> {
    if (value.month() === 8) {
      return 1394;
    }
  }
  
  const monthCellRender = (value) => {
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
    modalSession()
  };

  const onPanelChange = value => {
    setSelectedDate({
      value,
      selectedValue: value
    });
  };
  
  const modalSession = () => {
    setVisibleModal(true)
  }

  const checkData = (value) =>{
    const ArrayData = date()
    return ArrayData.includes(value)
  }

  const date = ()=>{
    const ArrayData = data
    const ArrayDate = []
    ArrayData.forEach(e=>{
      const sessiondate = moment(e.meta.date).format('YYYY-MM-DD');
      ArrayDate.push(sessiondate)
    })
    return ArrayDate
  };


  return (    
    <>
        {(visibleModal && checkData(selectedDate.selectedValue.format('YYYY-MM-DD'))) && (<ModalSession value={visibleModal} visibleModal={(()=>handleModalChange(false))} data={data} dateSession={selectedDate.selectedValue.format('YYYY-MM-DD')}/>)}
        <Alert
          message={`You selected date: ${selectedDate.selectedValue && selectedDate.selectedValue.format('YYYY-MM-DD')}`}
        />
        <Calendar value={selectedDate.value} onSelect={onSelect} onPanelChange={onPanelChange} dateCellRender={dateCellRender} monthCellRender={monthCellRender}/>
    </>
    )
};

export default FormYouCalendar;