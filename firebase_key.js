const firebase = require("firebase");

src = "https://www.gstatic.com/firebasejs/7.14.1/firebase-app.js";
src = "https://www.gstatic.com/firebasejs/7.14.1/firebase-analytics.js";

var firebaseConfig = {
  apiKey: "AIzaSyCQ8J4h15AbO9f1hQBLlNJXXzZ32ONRM60",
  authDomain: "covid19-arya.firebaseapp.com",
  databaseURL: "https://covid19-arya.firebaseio.com",
  projectId: "covid19-arya",
  storageBucket: "covid19-arya.appspot.com",
  messagingSenderId: "570445866935",
  appId: "1:570445866935:web:1c1eee551a54c54156ea32",
  measurementId: "G-ELD2YW32MP",
};
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
// var harshthe = "RICHEST FUCKING MAN";

// module.exports.harsh = harshthe;
module.exports = firestore;
