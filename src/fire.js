import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCAYJNcfzPoFKmdt7C9RG4IjW0wpj5tz7Q',
  authDomain: 'grensland-admin.firebaseapp.com',
  databaseURL: 'https://grensland-admin.firebaseio.com',
  projectId: 'grensland-admin',
  storageBucket: 'grensland-admin.appspot.com',
  messagingSenderId: '600127306701',
};

const fire = firebase.initializeApp(config);
export default fire;
