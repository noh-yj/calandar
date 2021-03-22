import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB83BZZttUOlo5EsJs6BUAgFFRR-fb0w2I',
  authDomain: 'hanghae-calendar.firebaseapp.com',
  projectId: 'hanghae-calendar',
  storageBucket: 'hanghae-calendar.appspot.com',
  messagingSenderId: '532295777273',
  appId: '1:532295777273:web:d9cf5763f595dc589d5b28',
  measurementId: 'G-773SE8E15W',
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export { firestore };
