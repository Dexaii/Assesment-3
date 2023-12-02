
window.addEventListener("load", function(){
    document.getElementById("sign-in-google").addEventListener('click', function(){

        var provider = new firebase.auth.GoogleAuthProvider();

        provider.addScope("email");
        firebase.auth().signInWithPopup(provider)
        .then (function (result) {
        console.log("Logging secessfully", result.user);
        window.location.href = "home.html";
        alert(`U've logged Secessfully`);
    })
        .catch (function (error) {
            console.log("Logging Failed", error);
        });
        //alert("google clicked");
    });

    document.getElementById("sign-in-traditional").addEventListener("click",function(){

        var emailTxt = document.getElementById("account_email").value;
        var passtxt = document.getElementById("account_passwd").value;

        firebase.auth().signInWithEmailAndPassword(emailTxt, passtxt)
        .then((userCredential) => {
            //Signed In
            var user = userCredential.user;
            //....
            console.log('Logging sucessfully');
            window.location.href = "home.html"
            alert(`U've logged Secessfully`);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Logging Fail", error);
            alert("User info isn't correct, Try again");
        });


    });
    

//SignIn by CellPhone
function getPhoneNumberFromUserInput(){
    return "+16726679247"
}
this.document.getElementById("sign-in-phone").addEventListener("click", function(){

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

const phoneNumber = getPhoneNumberFromUserInput();
const appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      const code = "12345";
confirmationResult.confirm(code).then((result) => {
  console.log("User Signed In Successfully");
    window.location.href = "home.html"
  const user = result.user;
  // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
});
      // ...
    }).catch((error) => {
        alert(error);
      // Error; SMS not sent
      // ...
    });
});
});

//
