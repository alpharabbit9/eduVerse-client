// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdurQ7IMv6w73dbvK18i8ondlPiZznAU0",
  authDomain: "eduverse-academy-df2b0.firebaseapp.com",
  projectId: "eduverse-academy-df2b0",
  storageBucket: "eduverse-academy-df2b0.firebasestorage.app",
  messagingSenderId: "160234342785",
  appId: "1:160234342785:web:b691c254ad806bb1e58080"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);