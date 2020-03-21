import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBoazvAtOPkkm3-c6JGsK9Rgye_z43cGRQ',
  authDomain: 'whack-a-mole-6410b.firebaseapp.com',
  databaseURL: 'https://whack-a-mole-6410b.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());
// const perf = firebase.performance();

export { firebaseApp };

export default base;
