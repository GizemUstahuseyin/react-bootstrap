function checkLogin() { 
    var isLogin = sessionStorage.getItem("isLogin");

var user = sessionStorage.getItem("user");
user = user.split(",");

var username = user[0];

if (isLogin == "true") {

document.getElementById("btn_div").style.display = "none";
document.getElementById("header_sag").innerHTML = username; 
document.getElementById("logout_Div").style.display = "block";

    } 
}

function profileBtn() {
var isLogin = sessionStorage.getItem("isLogin");

var user = sessionStorage.getItem("user");
user = user.split(",");

var username = user[0];

if (isLogin == "true") {

document.getElementById("btn_div").style.display = "none";
document.getElementById("profile").style.display = "block";
} 
}

function logout() {

    var isLogin = sessionStorage.getItem("isLogin");

isLogin = false;

sessionStorage.setItem("isLogin", isLogin);
document.getElementById("profile").style.display = "none";

}
