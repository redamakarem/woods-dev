  const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#PopupCustomerPassword');
  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    });


  const togglePasswordSignup = document.querySelector('#togglePasswordSignup');
  const passwordSignup = document.querySelector('#PopupCreatePassword');
  togglePasswordSignup.addEventListener('click', function (e) {
    // toggle the type attribute
    const typeSignup = passwordSignup.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordSignup.setAttribute('type', typeSignup);
    });

function ShowLoginPopup(){
  var x = document.getElementById("popup-account__login");
  var y = document.getElementById("popup-account__sign-up");
  var z = document.getElementById("popup-account__forgot-password");
    y.style.display = "none";
    z.style.display = "none";
    x.style.display = "block";
}
function ShowSignUpPopup(){
  var x = document.getElementById("popup-account__login");
  var y = document.getElementById("popup-account__sign-up");
    y.style.display = "block";
    x.style.display = "none";
}

function ShowForgotPopup(){
  var x = document.getElementById("popup-account__login");
  var y = document.getElementById("popup-account__forgot-password");
    y.style.display = "block";
    x.style.display = "none";
}