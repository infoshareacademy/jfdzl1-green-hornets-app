import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCw8LqnwGI5SF8twP-dOInCFMrxYm1t5jU",
    authDomain: "green-hornets-app.firebaseapp.com",
    databaseURL: "https://green-hornets-app.firebaseio.com",
    projectId: "green-hornets-app",
    storageBucket: "green-hornets-app.appspot.com",
    messagingSenderId: "46794783519"
};

firebase.initializeApp(config);

export const database = firebase.database();