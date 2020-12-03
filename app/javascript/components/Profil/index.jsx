import Cookies from 'js-cookie'
import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

const Profil = () => {
  const user = useSelector(state => state.user);
 
  const dispatch = useDispatch();

  const [validated, setValidated] = useState(user.is_validated);
  const [category, setCategory] = useState(user.user_category);
  const [mail, setMail] = useState(user.email);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);



  useEffect( () => {
    console.log(Cookies.get('token'))
    fetch(`api/users/${user.id}`, {
      method: 'get',
      headers: {
        'Authorization': `${Cookies.get('token')}`,
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then(response => {
      console.log(response.data.attributes.email);
      const data = {
        first_name: response.data.attributes.first_name,
        last_name: response.data.attributes.last_name,
        is_validated: response.data.attributes.is_validated,
        user_category: response.data.attributes.user_category
      }
    })
    .catch((error) => console.error(error));
  }, [])

  return (
    <div className="text-center mt-3 mb-3">
      <h2> Prenom : {firstName} </h2>
      <h2> Nom : {lastName} </h2>
      <h2> Email : {mail} </h2>
      <h3> Catégorie  : {category} </h3>
      <h3> Utilisateur numéro : {user.id} </h3>
      <h3> Compte {validated ? "validé" : "non validé"} </h3>
      <Link to="#" className="btn btn-secondary" > Modifier profil </Link>
    </div>
  );
}
export default Profil;
