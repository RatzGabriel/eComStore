import React, { useState } from 'react';
import Button from '../components/Elements/Button';
import FormInput from '../components/Elements/FormInput';
import { auth, signInWithGoogle } from '../firebase/utils';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>
      <Button onClick={signInWithGoogle}>Sign in with Google</Button>
    </div>
  );
}

export default SignIn;
