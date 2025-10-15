// Elements
let password = document.getElementById("password")
let copyBtn = document.getElementById("copyBtn")
let changIcon = document.getElementById("changIcon")
let txt = document.getElementById("txt")

// Password Handling
password.addEventListener("input" , () => {

    if (password.value.length === 0) {
        txt.innerText = ""
    }
    else if (password.value.length <= 4) {
        txt.innerText = "Password is weak"
        txt.style.color = "#ff5925"
    }
    else if (password.value.length <= 8) {
        txt.innerText = "Password is medium"
        txt.style.color = "#d5b60a"
    }
    else {
        txt.innerText = "Password is strong"
        txt.style.color = "#008d00"
    }

})

// Icon Handling
changIcon.addEventListener("click" , () => {

    if (changIcon.classList.contains("fa-eye")) {
        changIcon.className = "fa-regular fa-eye-slash hover:cursor-pointer"
        password.type = "password"
    }
    else {
        password.type = "text"
        changIcon.className = "fa-regular fa-eye hover:cursor-pointer"
    }
    
})