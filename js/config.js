// js/config.js
const firebaseConfig = {
  apiKey: "AIzaSyAp-5-zMugDj6XGpBe25u9jvY_Gc1HnOfs",
  authDomain: "almasria-catalog-f907b.firebaseapp.com",
  projectId: "almasria-catalog-f907b",
  storageBucket: "almasria-catalog-f907b.firebasestorage.app",
  messagingSenderId: "16539021900",
  appId: "1:16539021900:web:a89fc759e398daebadfae9"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();

