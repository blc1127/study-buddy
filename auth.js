import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js"

const firebaseConfig = {
  apiKey: "AIzaSyAfmn8E7sX2P7AxjhHifPjdW2W-N8WKg8Q",
  authDomain: "study-buddy-c8792.firebaseapp.com",
  projectId: "study-buddy-c8792",
  storageBucket: "study-buddy-c8792.appspot.com",
  messagingSenderId: "341639345366",
  appId: "1:341639345366:web:2c4a06284c8930c9640577"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const email = document.getElementById("email")
const password = document.getElementById("password")
const status = document.getElementById("authStatus")

document.getElementById("signupBtn").onclick = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value)
    status.textContent = "Account created."
  } catch (e) {
    status.textContent = e.message
  }
}

document.getElementById("loginBtn").onclick = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    status.textContent = "Signed in."
    window.location.href = "index.html"
  } catch (e) {
    status.textContent = e.message
  }
}

document.getElementById("logoutBtn").onclick = async () => {
  try {
    await signOut(auth)
    status.textContent = "Signed out."
  } catch (e) {
    status.textContent = e.message
  }
}

onAuthStateChanged(auth, user => {
  if (user) {
    status.textContent = "Signed in as " + user.email
  }
})
