import  * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


var firebaseConfig = {
    apiKey: "AIzaSyCigkkZlWErvt33x7ccQDaqp2ZeETFdQZ8",
    authDomain: "fitnessapp-6bcda.firebaseapp.com",
    projectId: "fitnessapp-6bcda",
    storageBucket: "fitnessapp-6bcda.appspot.com",
    messagingSenderId: "665097272597",
    appId: "1:665097272597:web:f7e1e679f9ba3c0eb8bd1c",
    measurementId: "G-MKCY2DMSB1"
  };

  let app;
  if(firebase.apps.length === 0){
      app = firebase.initializeApp(firebaseConfig);
  }
  else
    app = firebase.app()

const db = firebase.firestore();
const auth = firebase.auth();
const store = firebase.storage();

export {db,auth,store};