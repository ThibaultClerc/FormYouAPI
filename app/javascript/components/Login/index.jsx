import Cookies from 'js-cookie'
import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {loginUser} from '.../../store/actions';
import {Link} from "react-router-dom";


const Connection = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const data = {
      user: {
        email: email,
        password: password
      }
  };

  const user = useSelector(state => state.user);
 
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("api/login", {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify(data)
    })
    .then((response) => {
      Cookies.set('token', response.headers.get("Authorization"))
      return response.json()
    })
    .then((response) => {
      dispatch(loginUser(response.data.attributes))
      setRedirection(true)
    }).catch(error => {
      console.log(error)
    })
  };

  return (
    <div className="text-center mt-2">
      <h1>Connexion</h1>;

      <h3> Email : </h3>
      <br/>
      <input type="text" onChange={handleEmailChange}/>
      <br/><br/>
      <h3> Mot de passe : </h3>
      <input type="password" onChange={handlePasswordChange}/>
      <br/><br/>
      <Link to="/" className="btn btn-success" onClick={handleSubmit}> Se connecter </Link>
      <br/>
      {user.length === 0 ? <h3> Non connecté </h3> :  'Vous êtes connecté' }
      
    </div>
  );
}
export default Connection
