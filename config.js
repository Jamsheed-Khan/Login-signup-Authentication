  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

    
    import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";



  const firebaseConfig = {
    apiKey: "AIzaSyBbeWa6V8uES_ZfhAhIWGS7On54XlmdluU",
    authDomain: "login-signup-authenticat-2fa05.firebaseapp.com",
    projectId: "login-signup-authenticat-2fa05",
    storageBucket: "login-signup-authenticat-2fa05.appspot.com",
    messagingSenderId: "151986651812",
    appId: "1:151986651812:web:e09652aa95803eb1075c31",
    measurementId: "G-3FPC0CCK8W"
  };

  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);



 

