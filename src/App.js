import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import {firebaseConfig} from './Config/Firebase';
import SignInPanel from './Components/SignInPanel'
import Header from './Components/Header';
import ContentGrid from './Containers/ContentGrid';

firebase.initializeApp(firebaseConfig);

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  
  if (!isSignedIn) {
    return (
      <SignInPanel />
    )
  } else {
    return (
      <React.Fragment>
        <Header />
        <ContentGrid />
      </React.Fragment>
    );
  }
}
export default App;