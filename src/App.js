import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//pages
import LandingPage from './pages/LandingPage';
import Store from './pages/Store';
import Checkout from './pages/Checkout';
import Registration from './pages/Registration';
//components
import Header from './components/Header';
import { handleUserProfile, auth } from './firebase/utils';
import SignIn from './pages/SignIn';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  let authListener = null;

  useEffect(() => {
    authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      setCurrentUser(null);
    });
    // set unmount also
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header currentUser={currentUser} />
        <Route exact path="/" component={LandingPage} />
        <Route path="/store" component={Store} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/registration" component={Registration} />
        <Route path="/signin" component={SignIn} />
      </BrowserRouter>
    </div>
  );
}

export default App;
