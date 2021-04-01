import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDrHKuL5lcZXt95Krb9M6f7ZEzUOk8NcC0',
  authDomain: 'school-attendance-app-f5dc9.firebaseapp.com',
  databaseURL:
    'https://school-attendance-app-f5dc9-default-rtdb.firebaseio.com',
  projectId: 'school-attendance-app-f5dc9',
  storageBucket: 'school-attendance-app-f5dc9.appspot.com',
  messagingSenderId: '981864896376',
  appId: '1:981864896376:web:47c54e13998f518d72da8d',
  measurementId: 'G-PLHBJ3HYF1',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
