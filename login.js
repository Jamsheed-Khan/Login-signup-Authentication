import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { auth } from "./config.js";
 





//signin with Email and password......................


let form = document.querySelector('.main')
let lemail = document.querySelector('#lemail')
  let lpassword = document.querySelector('#lpassword')


  form.addEventListener('submit', (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, lemail.value, lpassword.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            window.location = 'home.html'
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
});

let forgotBtn = document.querySelector("#forgot_btn")
forgotBtn.addEventListener('click' , ()=>{
    const user = auth.currentUser;
    const newPassword = prompt('enter new password');
    updatePassword(user, newPassword).then(() => {
        console.log("Update successful");
        // Update successful.
      }).catch((error) => {
        // An error ocurred
        console.log("Sorry try again");
        // ...
      });
})