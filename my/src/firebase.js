import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCqDlCtwvahzsROjX8gRspeJgI3uv3mKKQ",
  authDomain: "diseny-29e04.firebaseapp.com",
  projectId: "diseny-29e04",
  storageBucket: "diseny-29e04.appspot.com",
  messagingSenderId: "685157211561",
  appId: "1:685157211561:web:866b77ef18afd198e178b8",
  measurementId: "G-E15SQ7C08X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;