import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js"

const firebaseConfig = {
  apiKey: "AIzaSyAfmn8E7sX2P7AxjhHifPjdW2W-N8WKg8Q",
  authDomain: "study-buddy-c8792.firebaseapp.com",
  projectId: "study-buddy-c8792",
  storageBucket: "study-buddy-c8792.firebasestorage.app",
  messagingSenderId: "341639345366",
  appId: "1:341639345366:web:2c4a06284c8930c9640577"
}

const statusEl = document.getElementById("authStatus")
const emailEl = document.getElementById("email")
const passEl = document.getElementById("password")

function setStatus(t) {
  if (statusEl) statusEl.textContent = t
}

let auth = null

function init() {
  if (firebaseConfig.apiKey === "PASTE") {
    setStatus("Add Firebase config in auth.js to enable login.")
    return
  }

  const app = initializeApp(firebaseConfig)
  auth = getAuth(app)

  onAuthStateChanged(auth, (user) => {
    if (user) setStatus("Signed in: " + user.email)
    else setStatus("Signed out.")
  })

  document.getElementById("signupBtn").addEventListener("click", async () => {
    const email = emailEl.value.trim()
    const password = passEl.value
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      setStatus("Account created.")
    } catch (e) {
      setStatus(String(e.message || e))
    }
  })

  document.getElementById("loginBtn").addEventListener("click", async () => {
    const email = emailEl.value.trim()
    const password = passEl.value
    try {
      await signInWithEmailAndPassword(auth, email, password)
      setStatus("Signed in.")
      window.location.href = "index.html"
    } catch (e) {
      setStatus(String(e.message || e))
    }
  })

  document.getElementById("logoutBtn").addEventListener("click", async () => {
    try {
      await signOut(auth)
      setStatus("Signed out.")
    } catch (e) {
      setStatus(String(e.message || e))
    }
  })
}

init()
