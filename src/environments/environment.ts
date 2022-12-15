// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";


export const environment = {
  production: false,
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





/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
