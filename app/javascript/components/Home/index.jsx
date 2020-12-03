import React from 'react'
import FormYouCalendar from '../Calendar'
import { useSelector, useDispatch } from 'react-redux';

 
const Home = () => {

    const user = useSelector(state => state.user);

    return (
        
        <FormYouCalendar/>
    )
}

export default Home