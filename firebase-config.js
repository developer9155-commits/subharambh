// 1) Firebase console -> Project settings -> Your apps -> Web app -> copy the config values here.
// 2) These values are safe to keep in the website. Your data is protected by the rules in firestore.rules.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

export const firebaseConfig = {
  apiKey: "AIzaSyCMqsiMIOr_U7GLEFuz7yvoLJYtjFuGKas",
  authDomain: "subharambh-94698.firebaseapp.com",
  projectId: "subharambh-94698",
  storageBucket: "subharambh-94698.firebasestorage.app",
  messagingSenderId: "95009048427",
  appId: "1:95009048427:web:7f5343d9cdced0a9e7ee2e",
  measurementId: "G-77LMS6BXZE"
};

// Only this Google account can open the admin panel (also enforced in firestore.rules).
export const ADMIN_EMAIL = "developer9334@gmail.com";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
