import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyC2PpqIvS4ijdqOq44isTYlOQd3sLHGcJc",
    authDomain: "tipskungarna-e2d81.firebaseapp.com",
    databaseURL: "https://tipskungarna-e2d81.firebaseio.com",
    projectId: "tipskungarna-e2d81",
    storageBucket: "tipskungarna-e2d81.appspot.com",
    messagingSenderId: "402584017018"
};
var fire = firebase.initializeApp(config);
export default fire;
