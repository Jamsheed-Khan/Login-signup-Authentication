  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";



  const firebaseConfig = {
    apiKey: "AIzaSyBbeWa6V8uES_ZfhAhIWGS7On54XlmdluU",
    authDomain: "login-signup-authenticat-2fa05.firebaseapp.com",
    projectId: "login-signup-authenticat-2fa05",
    storageBucket: "login-signup-authenticat-2fa05.appspot.com",
    messagingSenderId: "151986651812",
    appId: "1:151986651812:web:e09652aa95803eb1075c31",
    measurementId: "G-3FPC0CCK8W"
  };

  const app = initializeApp(firebaseConfig);
  
  const auth = getAuth();



  //create user with email and password


  let registerbtn = document.querySelector("#Register_btn")
  registerbtn.addEventListener('click',function () {
    let remail = document.getElementById("remail")
    let rpassword = document.getElementById("rpassword")
 
    createUserWithEmailAndPassword(auth, remail.value, rpassword.value)
  .then((userCredential) => {
     
    const user = userCredential.user;
    console.log('user==>',user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error==>",errorMessage);
  });
  });



//signin with Email and password......................


let login = document.querySelector("#login")

  login.addEventListener('click',()=>{
    let lemail = document.getElementById("lemail")
    let lpassword = document.getElementById("lpassword")
    signInWithEmailAndPassword(auth, lemail.value, lpassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('user==>',user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error==>",errorMessage);
  });

 
  })