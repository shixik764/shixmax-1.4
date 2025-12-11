// firebase.js - FINAL compat init for GitHub Pages
const firebaseConfig = {
  apiKey: "AIzaSyAEPHyMzxCzOafQK0GrHQX3VObfZhaIBQ",
  authDomain: "shixmax-9fa29.firebaseapp.com",
  databaseURL: "https://shixmax-9fa29-default-rtdb.firebaseio.com",
  projectId: "shixmax-9fa29",
  storageBucket: "shixmax-9fa29.appspot.com",
  messagingSenderId: "1010580392768",
  appId: "1:1010580392768:web:523bfdc415f821deae48a5"
};
if(!window.firebase || !firebase.initializeApp){ console.error('Include compat CDN scripts before firebase.js'); }
else{ if(!firebase.apps.length) firebase.initializeApp(firebaseConfig); window.auth = firebase.auth(); window.db = firebase.database(); console.log('Firebase initialized (final)'); }
