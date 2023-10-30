import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDIS1R2-kTcSWmdTBsiyPERgAktZTaRLPU",
  authDomain: "textaholic-f0d43.firebaseapp.com",
  projectId: "textaholic-f0d43",
  storageBucket: "textaholic-f0d43.appspot.com",
  messagingSenderId: "358651242082",
  appId: "1:358651242082:web:b75992443225d1faf3d33b"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth() ;
export const storage = getStorage();
