// js/config.js
const firebaseConfig = {
  apiKey: "AIzaSyCsBIJDvl28Vz3Y5zqkijUd8r6_rbsRJk8",
 authDomain: "almasria-catalog.firebaseapp.com",
 databaseURL: "https://almasria-catalog-default-rtdb.firebaseio.com",
 projectId: "almasria-catalog",
 storageBucket: "almasria-catalog.firebasestorage.app",
 messagingSenderId: "773484299004",
 appId: "1:773484299004:web:4abf54045950c051554d79"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();
