 import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyAN9_k6kQbOhjJxxpbkghO8LYfWA-1JVg4",
  authDomain: "school-attendance-app-d1c78.firebaseapp.com",
  databaseURL: "https://school-attendance-app-d1c78-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-d1c78",
  storageBucket: "school-attendance-app-d1c78.appspot.com",
  messagingSenderId: "771619382820",
  appId: "1:771619382820:web:840e81ece281a6a2e29ab1"
};
let app = firebase.initializeApp(firebaseConfig);
  export default firebase.database()
 

  