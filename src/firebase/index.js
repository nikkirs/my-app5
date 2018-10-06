import firebase from "firebase/app";

import "firebase/storage";

var config = {
  apiKey: "AIzaSyC8Gk26WRx-G2HwUmVcWJ4Bj30zfDqj2DE",
  authDomain: "photos-26fbf.firebaseapp.com",
  databaseURL: "https://photos-26fbf.firebaseio.com",
  projectId: "photos-26fbf",
  storageBucket: "photos-26fbf.appspot.com",
  messagingSenderId: "811573712820"
};
firebase.initializeApp(config);

const storage = firebase.storage();

export { storage, firebase as default };
