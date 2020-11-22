import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCcvyu6H9jt9NBNU1wrF1yajP-KjjtPCps",
    authDomain: "grupou-e457f.firebaseapp.com",
    databaseURL: "https://grupou-e457f.firebaseio.com",
    projectId: "grupou-e457f",
    storageBucket: "grupou-e457f.appspot.com",
    messagingSenderId: "1004035609134",
    appId: "1:1004035609134:web:c56d5a059535296e8bc5bf"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig); 
}