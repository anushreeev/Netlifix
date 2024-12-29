import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfWpYlVyaBDajkprr9P5YWboU5KHg31yk",
  authDomain: "netflix-clone-8706e.firebaseapp.com",
  projectId: "netflix-clone-8706e",
  storageBucket: "netflix-clone-8706e.appspot.com",
  messagingSenderId: "763353510385",
  appId: "1:763353510385:web:78fee4cf4923f00006d450",
  measurementId: "G-PX99689SN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only in browser environment)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Firebase Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Signup function
const signup = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
      console.log("User signed up successfully:", user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("This email is already in use. Please try logging in instead.");
      } else {
        console.error("Signup Error:", error.message);
        alert(error.message);
      }
    }
  };
  

// Login function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in successfully");
  } catch (error) {
    console.error("Login Error:", error.message);
    alert(error.message);
  }
};

// Logout function
const logout = () => {
  signOut(auth)
    .then(() => console.log("User logged out successfully"))
    .catch((error) => console.error("Logout Error:", error.message));
};

// Export modules
export { auth, db, login, signup, logout };
