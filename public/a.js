// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyASNreHDdF8xN2DmIoLVme_4FJR8pm4inQ",
  authDomain: "finalproject-3e503.firebaseapp.com",
  databaseURL: "https://finalproject-3e503-default-rtdb.firebaseio.com",
  projectId: "finalproject-3e503",
  storageBucket: "finalproject-3e503.appspot.com",
  messagingSenderId: "1080607206430",
  appId: "1:1080607206430:web:ed4b7967655e46c695520f",
  measurementId: "G-9SCYSNGGC2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function bttn() {
  let formName = document.querySelector("#fName");
  let email = document.querySelector("#emaill");
  let aboutProject = document.querySelector("#aproject");
  const docRef = await addDoc(collection(db, "forminfo"), {
    input1: formName.value,
    input2: email.value,
    input3: aboutProject.value,
    Time: new Date().toLocaleString()
    
  });
  formName.value =""
  email.value =""
  aboutProject.value =""
  console.log("Document written with ID: ", docRef.id);
}

window.bttn = bttn