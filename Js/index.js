var showIndex = [];

if (localStorage.getItem("test") != null) {
  showIndex = JSON.parse(localStorage.getItem("test"));
}

var abdo = document.getElementById("demo");
abdo.innerHTML = "Welcome" + " " + showIndex[0].name;
