import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Elements/Button';
import { signInWithGoogle, auth } from '../firebase/utils';

function Header({ currentUser }) {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/store">Store</Link>
      <Link to="/checkout">Checkout</Link>
      <Link to="/registration">Registration</Link>

      {!currentUser && (
        <ul>
          <li>
            <Link to="/registration">Register</Link>
            <Link to="/signin">Sign in</Link>
          </li>
        </ul>
      )}
      {currentUser && (
        <ul>
          <li>
            <span onClick={() => auth.signOut()}>Logout</span>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
