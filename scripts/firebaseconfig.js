// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


(function (window) {
    'use strict';
    var App = window.App || {}; 

    var FirebaseConfig = {
      apiKey: "AIzaSyBlgH6wOaqIWSGX_G6ai1U5K1ahpC6Y0qI",
      authDomain: "coffeerun-6c564.firebaseapp.com",
      projectId: "coffeerun-6c564",
      storageBucket: "coffeerun-6c564.appspot.com",
      messagingSenderId: "772515062927",
      appId: "1:772515062927:web:eff98d40ae21ca73bf3cfa"
    };

    App.FirebaseConfig = FirebaseConfig;
    firebase.initializeApp(App.FirebaseConfig);

    window.App = App;
  })(window);
