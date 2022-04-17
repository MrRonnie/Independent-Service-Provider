// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF9Kaj2RDcaXuCOwDOL2k-xj4vuce9zVU",
  authDomain: "independent-service-prov-a3a74.firebaseapp.com",
  projectId: "independent-service-prov-a3a74",
  storageBucket: "independent-service-prov-a3a74.appspot.com",
  messagingSenderId: "264503819145",
  appId: "1:264503819145:web:37bd5d5328f9f7372d3f58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
