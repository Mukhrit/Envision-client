import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAr95KgfmrjyvZ2AuaVVZSmC_ZmE9z_uwc",
  authDomain: "envision-cp-visualizer.firebaseapp.com",
  databaseURL: "https://envision-cp-visualizer.firebaseio.com",
  projectId: "envision-cp-visualizer",
  storageBucket: "envision-cp-visualizer.appspot.com",
  messagingSenderId: "389238695143",
  appId: "1:389238695143:web:b812b4041c23225072ee42",
};

 firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };

