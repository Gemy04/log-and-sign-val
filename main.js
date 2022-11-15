var btn = document.getElementById("button").addEventListener("click", show)
function show() {
    var nav = document.getElementById("nav")
    nav.classList.toggle("slid")
    var a = document.getElementById("a")
    a.classList.toggle("flex")
    var login = document.getElementById("login")
    login.classList.toggle("flex")
}
var elsignup = document.getElementById("elsignup").addEventListener("click", see)
function see() {
    var login = document.getElementById("login")
    login.classList.remove("flex")
    var signup = document.getElementById("signup")
    signup.classList.toggle("flex")
}
var validation_pattern = {
    fname: /^[a-zA-Z ]{2,15}$/,
    email: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
    password: /^[a-zA-Z0-9]{6,15}$/,
}
var loginn = document.getElementById("sub").addEventListener("click", login)
function login(e) {
    e.preventDefault();
    var inputs = document.querySelectorAll("#email ,#password");
    var error = validation(inputs, validation_pattern);
}
var signp = document.getElementById("sub2").addEventListener("click", signup)
function signup(e) {
    e.preventDefault();
    var inputs = document.querySelectorAll("#fnames ,#emails ,#passwords");
    var error = validation(inputs, validation_pattern);
    var vname = document.getElementById("fnames").value;
    var vemail = document.getElementById("emails").value;
    var vpassword = document.getElementById("passwords").value;
    if (!error) {
        document.getElementById("result").innerHTML = "Full Name : " + vname + "<br>" + "Your Email : " + vemail + " <br>" + "Your password : " + vpassword
    }
}
function validation(inputs, validation) {
    var error = false;
    for (var i = 0; i < inputs.length; i++) {
        var element = inputs[i];
        if (element.value == "") {
            element.nextElementSibling.textContent = `${element.name} is required`;
            error = true;
        } else if (!validation[element.name].test(element.value)) {
            element.nextElementSibling.textContent = `${element.name} is not valid`;
            error = true;
        }
        else {
            element.nextElementSibling.textContent = "";
        }
    }
    return error
}


