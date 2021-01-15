import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import {firebaseConfig} from './Config/Firebase';
import SignInPanel from './Components/SignInPanel'
import Header from './Components/Header';
import ContentGrid from './Containers/ContentGrid';
import Carousel from './Components/Carousel';

firebase.initializeApp(firebaseConfig);
export const HOME_PAGE = 0;
export const CAROUSEL_PAGE = 1;

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  const [page, setPage] = useState(HOME_PAGE);
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
      <div style={{backgroundImage: `url(/food-site/images/background.jpeg)`}}>
        <Header setPage={setPage} />
        <div 
          id="content" 
          style={{margin: 'auto', paddingTop: '20px', width: '70%'}}>
          {page === HOME_PAGE && <ContentGrid /> }
          {page === CAROUSEL_PAGE && <Carousel /> } 
        </div>
      </div>
    );
  }
}
export default App;