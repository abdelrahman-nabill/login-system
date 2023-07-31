var login = [];
var showIndex = [];
var userLogEmail = document.getElementById("userLogEmail");
var userLogPass = document.getElementById("userLogPass");
var emptyInputs = document.getElementById("emptyInputs");
var wrongInputs = document.getElementById("wrongInputs");
var submit = document.getElementById("submit");

submit.addEventListener("click", search);
userLogEmail.addEventListener('keyup',function(){
  emptyInputs.style.display = "none";
  wrongInputs.style.display = "none";
})
userLogPass.addEventListener('keyup',function(){
  emptyInputs.style.display = "none";
  wrongInputs.style.display = "none";
})

if (localStorage.getItem("userInfo") != null) {
  login = JSON.parse(localStorage.getItem("userInfo"));
  console.log(login);
}

  function clr() {
    userLogEmail.value = "";
    userLogPass.value = "";
  }

function search() {
  for (var i = 0; i < login.length; i++) {
    if (userLogPass.value === "" && userLogEmail.value === "") {
      emptyInputs.style.display = "flex";
    } else if (
      userLogEmail.value === login[i].email &&
      userLogPass.value === login[i].pass
    ) {
      showIndex.push(login[i])
      localStorage.setItem('test', JSON.stringify(showIndex))
      window.open("Home.html" , "_top");

    } else if (userLogEmail.value != login[i].email) {
      wrongInputs.style.display = "flex";
    } else if (userLogPass.value != login[i].pass) {
      wrongInputs.style.display = "flex";
    }
  }
  clr()
}

// function searchPassword() {
//   for (var i = 0; i < login.length; i++) {
//     if (userLogPass.value === login[i].pass) {
//       window.open("index.html");
//     } else {
//       alert("email is wrong");
//     }
//   }
// }
