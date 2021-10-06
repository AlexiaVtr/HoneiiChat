import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

public constructor() {
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHpE0v-aERa24ChO30eazz5osK3PM6ijM",
  authDomain: "honeiichat.firebaseapp.com",
  projectId: "honeiichat",
  storageBucket: "honeiichat.appspot.com",
  messagingSenderId: "578208556379",
  appId: "1:578208556379:web:3aaf735310027b84ae667e",
  measurementId: "G-ET1S94S31T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
   }

}
