import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/actions/index';


const Signup = () => {
  const [userCategory, setUserCategory] = useState(1);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [redirection, setRedirection] = useState(false)
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const data = {
    user: {
      email: email,
      password: password,
      user_category: parseInt(userCategory)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("api/signup", {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response.data.attributes)
      dispatch(loginUser(response.data.attributes))
      setRedirection(true)
    }).catch(error => {
      console.log(error)
    })
  };


  return (
    <>
      {redirection && <Redirect to='/'/>}
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="email">
          <Form.Label>Sélectionnez votre rôle</Form.Label>
          <Form.Control as="select" value={userCategory} onChange={e => setUserCategory(e.target.value)}>
            <option value="0">Elève</option>
            <option value="1">Professeur</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="passwordConfirm">
          <Form.Label>Confirmer le mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Confirmer le mot de passe" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          S'inscrire
        </Button>
      </Form>
    </>

  );
}

export default Signup
