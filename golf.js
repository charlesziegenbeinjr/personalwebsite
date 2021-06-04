// Configuration
var firebaseConfig = {
    apiKey: "AIzaSyAJnIF3TOgunQBIM6P9aCFlBGW9OSWXza8",
    authDomain: "golf-database-b6829.firebaseapp.com",
    databaseURL: "https://golf-database-b6829.firebaseio.com",
    projectId: "golf-database-b6829",
    storageBucket: "golf-database-b6829.appspot.com",
};

// Initialize
firebase.initializeApp(firebaseConfig);

let current_user = "Not Logged In";

// Login / Register Form Show / Hide , Respectively
document.getElementById("login-button").addEventListener("click", function ()
{
    $(".login").css('display', 'block');
    $(".register").css('display', 'none');

});

document.getElementById("register-button").addEventListener("click", function ()
{
    $(".login").css('display', 'none');
    $(".register").css('display', 'block');
});

// Login / Register Form Submit , Respectively
document.getElementById("login-submit").addEventListener("click", function ()
{
    let email = $('#login-email').val();
    let password = $('#login-password').val();
    
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function () {
            let user = firebase.auth().currentUser;
            current_user = user.uid;
            $(".login").css('display', 'none');
        }).catch(function (error) {
            console.log(error);
        });
});

document.getElementById("register-submit").addEventListener("click", function ()
{
    let email = $('#register-email').val();
    let password = $('#register-password').val();

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            LogUserIn(email, password);
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
        });
});


// If User Registers A New Account, Immediately Log Them In With This Function
function LogUserIn(email_credential, password_credential)
{
    firebase.auth().signInWithEmailAndPassword(email_credential, password_credential)
        .then(function () {
            let user = firebase.auth().currentUser;
            current_user = user.uid;
            $(".login").css('display', 'none');
            $(".register").css('display', 'none');
        }).catch(function (error) {
            console.log(error);
        });
}