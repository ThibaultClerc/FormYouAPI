import React, { useState } from 'react';
import { Modal } from 'antd';
import { useEffect } from 'react';
import moment from 'moment'


export const ModalSession = ({value, visibleModal, data, dateSession}) => {
  const [isModalVisible, setIsModalVisible] = useState(value);
  const [currentData, setCurrentData] = useState(data);
  const [title, setTitle] = useState('');
  const [classroom, setClassroom] = useState('');
  const [student, setStudent] = useState(0);

  const sessionData = {
    title: title,
    classroom: classroom,
    student: student,
  }

  const setSessionData = (data) =>{
    const ArrayData = data
    ArrayData.forEach(e=>{
      const date = moment(moment(e.meta.date).format('YYYY-MM-DD'));
      let dateDiff = date.diff(dateSession)
      if (dateDiff === 0 ){
        console.log(e.meta.course)
        console.log(e.meta.classroom)
        console.log(e.meta.sessions.length)
        setTitle(e.meta.course)
        setClassroom(e.meta.classroom)
        setStudent(e.meta.sessions.length)
      }
    })
  }

  const handleOk = () => {
    setIsModalVisible(false);
    visibleModal(false)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    visibleModal(false)
  };

  useEffect(() => {
    setSessionData(data)

  }, []);

  return (
    <>
      <Modal
        title={sessionData.title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>classroom : {sessionData.classroom}</p>
        <p>student : {sessionData.student}</p>

      </Modal>
    </>
  );
};

