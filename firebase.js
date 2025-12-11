// firebase.js - COMPAT CDN friendly initialization for GitHub Pages
// IMPORTANT: Make sure these SDK scripts are present in your HTML BEFORE loading this file:
// <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-auth-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-database-compat.js"></script>

const firebaseConfig = {
  apiKey: "AIzaSyAEPHyMzxCzOafQK0GrHQX3VObfZhaIBQ",
  authDomain: "shixmax-9fa29.firebaseapp.com",
  databaseURL: "https://shixmax-9fa29-default-rtdb.firebaseio.com",
  projectId: "shixmax-9fa29",
  storageBucket: "shixmax-9fa29.appspot.com",
  messagingSenderId: "1010580392768",
  appId: "1:1010580392768:web:523bfdc415f821deae48a5"
};

if (!window.firebase || !firebase.initializeApp) {
  console.error('Firebase SDK not loaded. Include the compat CDN scripts before firebase.js');
} else {
  try {
    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
    window.auth = firebase.auth();
    window.db = firebase.database();
    console.log('Firebase initialized (compat)');
  } catch (e) {
    console.error('Firebase init error', e);
  }
}
