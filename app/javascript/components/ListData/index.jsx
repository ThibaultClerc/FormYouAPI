import moment from 'moment'

const GetListData = (value, data) => {

  let listData;
  const ArrayData = data
  ArrayData.forEach(e=>{
    const date = moment(moment(e.meta.date).format('YYYY-MM-DD'));
    let dateDiff = date.diff(value)
    if (dateDiff === 0 ){
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