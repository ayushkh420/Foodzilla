import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDD9I6ZHxLQUH0QZTKURcVfnanVj-KUvd0",
    authDomain: "foodzilla-278a5.firebaseapp.com",
    projectId: "foodzilla-278a5",
    storageBucket: "foodzilla-278a5.appspot.com",
    messagingSenderId: "104170527942",
    appId: "1:104170527942:web:f74612bed94dff2cd78bc7",
    measurementId: "G-J2QJMVKH8L"
  };

!firebase.apps.length ? firebase.initializeApp(firebaseConfig):firebase.apps


export default firebase
 