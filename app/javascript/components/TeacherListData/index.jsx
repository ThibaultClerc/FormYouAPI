import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment'

const GetListData = (value, data) => {
  let listData;
  const ArrayData = data
  ArrayData.forEach(e=>{
    const date = moment(moment(e.meta.date).format('YYYY-MM-DD'));
    if (value.date() == date.date()){
    listData = [
      { type: 'success', content: e.meta.course},
    ]
      return listData
    }
    return listData
  })
  return listData || [];
} 

export default GetListData