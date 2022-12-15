import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: "AIzaSyCsCqksho4IV3Rpj1xv6ZOseiUt_Li2Hug",
  authDomain: "gmh-photoapplication.firebaseapp.com",
  projectId: "gmh-photoapplication",
  storageBucket: "gmh-photoapplication.appspot.com",
  messagingSenderId: "832642895454",
  appId: "1:832642895454:web:a74227d93292e7ade8eecf"
  },
  API_BASE_URL: "http://localhost:8080",
};
// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);