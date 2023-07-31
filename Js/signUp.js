var login = [];
var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
var userPass = document.getElementById("userPass");
let nameD = document.getElementById("nameD");
let emailD = document.getElementById("emailD");
let passD = document.getElementById("passD");
var submit = document.getElementById("submit");

if (localStorage.getItem("userInfo") != null) {
  login = JSON.parse(localStorage.getItem("userInfo"));
  console.log(login);
}

submit.addEventListener("click", getInfo);
// userName.addEventListener("click", function () {
//   nameD.style.display = "block";
// });
userName.addEventListener("keyup", function () {
  if (validName(userName.value) == true) {
    userName.classList.replace("is-invalid", "is-valid");
    nameD.style.display = "none";
  } else {
    userName.classList.add("is-invalid");
    nameD.style.display = "block";
  }
});
// userEmail.addEventListener("click", function () {
//   emailD.style.display = "block";
// });
userEmail.addEventListener("keyup", function () {
  if (validEmail(userEmail.value) == true) {
    userEmail.classList.replace("is-invalid", "is-valid");
    emailD.style.display = "none";
  } else {
    userEmail.classList.add("is-invalid");
    emailD.style.display = "block";
  }
  for(var i=0;i<login.length;i++){
    if(userEmail.value == login[i].email){
      swal({
        icon: "warning",
        text: "Email is already Exist!",
      });
      break;
    }
  }
});
// userPass.addEventListener("click", function () {
//   passD.style.display = "block";
// });
userPass.addEventListener("keyup", function () {
  if (validPass(userPass.value) == true) {
    userPass.classList.replace("is-invalid", "is-valid");
    passD.style.display = "none";
  } else {
    userPass.classList.add("is-invalid");
    passD.style.display = "block";
  }
});
function getInfo() {
  var user = {
    name: userName.value,
    email: userEmail.value,
    pass: userPass.value,
  };

  if (userName.value == "" || userEmail.value == "" || userPass.value == "") {
    swal({
      icon: "error",
      text: "All inputs required",
    });
  } else if (
    validName(userName.value) &&
    validEmail(userEmail.value) &&
    validPass(userPass.value) == true
  ) {
    login.push(user);
    clr();
    swal({
      icon: "success",
      text: "You signed Up",
    });
  } else {
    swal({
      icon: "warning",
      text: "Email or Name or Password is wrong",
    });
  }

  localStorage.setItem("userInfo", JSON.stringify(login));

  console.log(user);
  console.log(login);
}

function clr() {
  userName.value = "";
  userEmail.value = "";
  userPass.value = "";
}

function validName(name) {
  let regexName = /^[a-zA-z][a-zA-Z0-9\_\-]{2,30}$/;
  return regexName.test(name);
}
function validEmail(mail) {
  let regexEmail =
    /^[a-zA-Z0-9][a-zA-z0-9\_\-\.]{2,30}@(gmail|yahoo|hotmail|outlook).com$/;
  return regexEmail.test(mail);
}
function validPass(pass) {
  let regexPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  return regexPass.test(pass);
}


// function search() {
//     for (var i = 0; i < login.length; i++) {
//       if (userEmail.value === login[i].email) {
//         alert("ok");
//         break;
//       }
//     }
//   }