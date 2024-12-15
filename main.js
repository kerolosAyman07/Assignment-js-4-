var email = document.querySelector("#email");
var password = document.querySelector("#password");
var loginBtn = document.querySelector("#loginBtn");
var loginArray = [];
if (localStorage.getItem("loginArray") != null) {
    loginArray = JSON.parse(localStorage.getItem("loginArray"))
}

var signupLink = document.querySelector("#signup");
var main1 = document.querySelector(".main1")
var main2 = document.querySelector(".main2")

var signUpName = document.querySelector("#signupName");
var signUpEmail = document.querySelector("#signupEmail");
var signUpPassword = document.querySelector("#signupPassword");
var SignUpBtn = document.querySelector("#SignUpBtn");
var signUpArray = [];

var logoutBtn = document.querySelector("#logoutBtn")


loginBtn.addEventListener("click", function (e) {
    e.preventDefault()
    loginAddContact()
    for (var i = 0; i < loginArray.length; i++) {

        if (loginArray[i].email == email.value || loginArray[i].password == password.value) {
            document.getElementById("status").innerHTML = `<span class="text-success d-flex align-items-center justify-content-center">success</span>`
        }

        var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
        if (emailRegex.test(email.value) != true || passwordRegex.test(password.value) != true) {
            document.getElementById("status").innerHTML = `<span class="text-danger d-flex align-items-center justify-content-center text-center">incorrect email or password</span>`
        }
    }
    if (email.value == "" || password.value == "") {
        document.getElementById("status").innerHTML = `<span class="text-danger d-flex align-items-center justify-content-center text-center">All inputs is required</span>`
    }

    if (email.value == true && password.value == true) {
        document.querySelector(".username").innerHTML = "Welcome " + signUpName
        window.open("welcome.html","_self","","")
    }
})

function loginAddContact() {
    var contactInfo = {
        email: email.value,
        password: password.value,
    }
    loginArray.push(contactInfo);
    localStorage.setItem("loginArray", JSON.stringify(loginArray))
}



signupLink.addEventListener("click", function (e) {
    e.preventDefault()
    main1.classList.replace("d-flex", "d-none");
    main2.classList.replace("d-none", "d-flex");
})



SignUpBtn.addEventListener("click", function (e) {
    e.preventDefault()
    signUpAddContact()
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].signUpName == signUpName.value || signUpArray[i].signUpEmail == signUpEmail.value || signUpArray[i].signUpPassword == signUpPassword.value) {
            document.getElementById("status-1").innerHTML = `<span class="text-success d-flex align-items-center justify-content-center">success</span>`
        }

        var nameRegex= /([a-zA-Z0-9_\s]+)/g
        var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
        if (nameRegex.test(signUpName.value) != true || emailRegex.test(signUpEmail.value) != true || passwordRegex.test(signUpPassword.value) != true) {
            document.getElementById("status-1").innerHTML = `<span class="text-danger d-flex align-items-center justify-content-center text-center">incorrect email or password</span>`
        }
    
    }
    if (signUpName.value == "" || signUpEmail.value == "" || signUpPassword.value == "") {
        document.getElementById("status-1").innerHTML = `<span class="text-danger d-flex align-items-center justify-content-center text-center">All inputs is required</span>`
    }

    if(signUpEmail == signUpEmail.value){
        document.getElementById("status-1").innerHTML = `<span class="text-danger d-flex align-items-center justify-content-center text-center">email already exists</span>`
    }
})

function signUpAddContact() {
    var signUpcontactInfo = {
        signUpName: signUpName.value,
        signUpEmail: signUpEmail.value,
        signUpPassword: signUpPassword.value,
    }
    signUpArray.push(signUpcontactInfo);
}


logoutBtn.addEventListener("click" , function(e){
    e.preventDefault()
    window.location.href = "index.html";
})