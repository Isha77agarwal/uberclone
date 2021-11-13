import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBa5_x7weexv_vp7Nqfdg2uuUdbAhOmLXM",
  authDomain: "uberclone-b215a.firebaseapp.com",
  projectId: "uberclone-b215a",
  storageBucket: "uberclone-b215a.appspot.com",
  messagingSenderId: "1001718394580",
  appId: "1:1001718394580:web:a8aff8711344acc1bd1541"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { auth, provider}