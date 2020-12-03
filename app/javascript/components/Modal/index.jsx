import React, { useState } from 'react';
import { Modal } from 'antd';

export const ModalSession = ({value, visibleModal}) => {
  const [isModalVisible, setIsModalVisible] = useState(value);

  const handleOk = () => {
    setIsModalVisible(false);
    visibleModal(false)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    visibleModal(false)
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

