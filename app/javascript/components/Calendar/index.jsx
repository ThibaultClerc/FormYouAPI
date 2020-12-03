import { Calendar, Alert , Badge} from 'antd';
import React, { useState, useEffect } from 'react';
import GetListData from '../ListData'
import moment from 'moment'
import 'antd/dist/antd.css'
import './calendar.css'
import Cookies from 'js-cookie'
import { ModalSession } from '../Modal'

const FormYouCalendar = ({url}) => {
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
    const listData = GetListData(value, data);
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
  };

  const onPanelChange = value => {
    setSelectedDate({
      value,
      selectedValue: value
    });
  };
  
  const modalSession = () => {
    console.log(selectedDate),
    setVisibleModal(true)
  }


  return (    
    <>
        {visibleModal && (<ModalSession value={visibleModal} visibleModal={(()=>handleModalChange(false))}/>)}
        <Alert
          message={`You selected date: ${selectedDate.selectedValue && selectedDate.selectedValue.format('YYYY-MM-DD')}`}
        />
        <Calendar value={selectedDate.value} onSelect={onSelect, ()=>modalSession()} onPanelChange={onPanelChange} dateCellRender={dateCellRender} monthCellRender={monthCellRender}/>
    </>
    )
};

export default FormYouCalendar;