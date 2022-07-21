import firebase from "firebase";


  const firebaseConfig = {
    apiKey: "AIzaSyCW4MCKnukaC-cKDsR5cAIvFkKy14Jbq0s",
    authDomain: "e-library-fad38.firebaseapp.com",
    databaseURL: "https://e-library-fad38-default-rtdb.firebaseio.com",
    projectId: "e-library-fad38",
    storageBucket: "e-library-fad38.appspot.com",
    messagingSenderId: "277063636713",
    appId: "1:277063636713:web:9026754b0cee81db5e4278"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
