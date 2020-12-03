import React from 'react';
// import Admin from '../Admin';
import { useSelector } from 'react-redux';
// import { isAdmin } from '../../utils/usertype'
import FormYouCalendar  from '../Calendar'

const Home = () => {

    const user = useSelector(state => state.user)

    return (
        <>
            {/* { isAdmin(user) && <Admin/>} */}
            {/* { isTeacher(user) && <Teacher/>}
            { isStudent(user) && <Student/>} */}
            {user.length === 0 && <FormYouCalendar url={'api/coursesessions'}/>}
        </>
        
    )
}

export default Home