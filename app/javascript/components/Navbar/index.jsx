import {Link} from "react-router-dom";
import React from 'react'
import Cookies from 'js-cookie'
import { useSelector } from 'react-redux';
import {loginUser} from '.../../store/actions';


const Navbar = () => {

    const user = useSelector(state => state.user);
  
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <a className="navbar-brand" href="#">My Website</a>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="navbar-brand">Home</Link>
            <Link to="#" className="nav-item nav-link">About</Link>
          </div>
          <div className="Connection">
          {user.length !== 0 ? <Link to="#" className="navbar-brand">Mon Profil</Link> : ''}
          {user.length !== 0 ? <Link to="/" className="btn btn-danger" onClick={(e) => {Cookies.remove('token'); window.location.reload();}}>Se déconnecter</Link> : ''}    
          {user.length === 0 ? <Link to="/signup" className="btn btn-secondary mr-1">S'inscrire</Link> : ''}
          {user.length === 0 ? <Link to="/login" className="btn btn-primary">Se connecter</Link> : ''}

          </div>
        </div>
      </nav>
    );
  };

export default Navbar;
