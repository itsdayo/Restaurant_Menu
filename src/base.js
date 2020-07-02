import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCQ763ppLV5jL7bky3LjAMfqBLAjpMYEKA',
  authDomain: 'catch-of-the-day-dayo2.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-dayo2.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
