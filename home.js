import { signOut ,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { auth } from "./config.js";


onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(uid);
      // ...
    } else {
      // User is signed out
      window.location = "signin.html"
      // ...
    }
  });
  









let btn = document.querySelector("#logout_btn")
btn.addEventListener('click',()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('logout successfully');
        window.location = "signin.html"
      }).catch((error) => {
        console.log(error);
        // An error happened.
      });
      
})