import React, {useState} from 'react'

const Signup = () => {
  const [user_category, setUser_category] = useState(1);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const data = {
    email: email,
    password: password,
    user_category: 1
  };

  const handleCategoryChange = (e) => {
    console.log(e.target.value);
    setUser_category(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleClick = (e) => {
    fetch('/api/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then(response => {
      console.log(response.jwt);
      console.log("request sent");

    })
    .catch((error) => console.error(error));
  }


  return (
    <div className="register text-center">
      <h1>Inscription</h1>;
      <br/><br/>
      <label>
          Choisissez votre catégorie:
          <select  >
            <option value="student">Elève</option>
            <option value="teacher">Professeur</option>
          </select>
        </label>
      <br/><br/>
      <h3> Email : </h3>
      <br/>
      <input type="text" onChange={handleEmailChange}/>
      <br/><br/>
      <h3> Mot de passe : </h3>
      <br/>
      <input type="password" onChange={handlePasswordChange}/>
      <br/><br/>
      <h3> Confirmer le mot de passe : </h3>
      <br/>
      <input type="password"/>
      <br/><br/>
      <button type="button" className="btn btn-success" onClick={handleClick}> S'inscrire </button>
    </div>
  );
}
export default Signup
