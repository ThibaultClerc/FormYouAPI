import moment from 'moment'

const GetListData = (value, data) => {

  let listData;
  const ArrayData = data
  ArrayData.forEach(e=>{
    e.attributes.sessions.forEach(a => { 
    const date = moment(moment(a.date).format('YYYY-MM-DD'));
    let dateDiff = date.diff(value)
    if (dateDiff === 0 ){
    listData = [
      { type: 'success', content: e.attributes.course.title},
    ]
      return listData
    }
    return listData
    })
  })
  return listData || [];
}

export default GetListData