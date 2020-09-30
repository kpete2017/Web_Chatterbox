import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';

import Header from './Components/Header'
import SignIn from './Components/SignIn'
import ChatRoom from './Components/ChatRoom'

firebase.initializeApp({
  apiKey: "AIzaSyAl67Mo1BUxRnKzqvvltwCb4HjBcprm-L8",
  authDomain: "chatterbot-da261.firebaseapp.com",
  databaseURL: "https://chatterbot-da261.firebaseio.com",
  projectId: "chatterbot-da261",
  storageBucket: "chatterbot-da261.appspot.com",
  messagingSenderId: "129791108235",
  appId: "1:129791108235:web:0b320c23ea5e38318ee08e"
})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">

      <Header auth={auth}/>

      <section>
        {user ? <ChatRoom firestore={firestore} auth={auth} firebase={firebase} /> : <SignIn auth={auth} firebase={firebase}/>}
      </section>

    </div>
  );
}




export default App;