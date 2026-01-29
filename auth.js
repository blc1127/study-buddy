import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAfmn8E7sX2P7AxjhHifPjdW2W-N8WKg8Q",
  authDomain: "study-buddy-c8792.firebaseapp.com",
  projectId: "study-buddy-c8792",
  storageBucket: "study-buddy-c8792.firebasestorage.app",
  messagingSenderId: "341639345366",
  appId: "1:341639345366:web:2c4a06284c8930c9640577"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("status").textContent = "Account created.";
    })
    .catch(err => {
      document.getElementById("status").textContent = err.message;
    });
};

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("status").textContent = "Logged in.";
      window.location.href = "index.html";
    })
    .catch(err => {
      document.getElementById("status").textContent = err.message;
    });
};
