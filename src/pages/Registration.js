import React, { useState } from 'react';
import Button from '../components/Elements/Button';
import FormInput from '../components/Elements/FormInput';
import { auth, handleUserProfile } from '../firebase/utils';

function Registration() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      const err = ['Passwords Dont Match'];
      setErrors(err);
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile(user, { displayName });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          placeholder="Full Name"
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
}

export default Registration;
