
let signin = document.getElementsByClassName("login")[0]
let signup = document.getElementsByClassName("signup")[0]
let reverse1 = document.getElementsByClassName("inupa")[0]
let reverse2 = document.getElementsByClassName("upina")[0]
let inputin = document.querySelectorAll(".inputin")
let inputup = document.querySelectorAll(".inputup")
let det1 = document.querySelectorAll(".det1")
let det2 = document.querySelectorAll(".det2")
let forgottenPassword = document.querySelector(".ina")
let signinTitle = document.querySelector(".s1")
let signupTitle = document.querySelector(".s2")
let submit1 = document.querySelector(".submit1")
let submit2 = document.querySelector(".submit2")


reverse1.addEventListener("click", (event) => {
    event.preventDefault()
    signin.style.backgroundColor = "white"
    signin.style.color = "black"
    signup.style.backgroundColor = "#4D0176"
    signup.style.color = "white"
    reverse1.style.color = "black"
    reverse2.style.color = "white"
    forgottenPassword.style.color = "black"
    signinTitle.style.color = "black"
    signupTitle.style.color = "white"
    submit1.setAttribute("disabled" , "true")
    submit2.removeAttribute("disabled")
    det1.forEach(det => {
        det.style.color = "black"
    })
    det2.forEach(det => {
        det.style.color = "white"
    })
    inputup.forEach(input => {
        input.removeAttribute("disabled");
    })
    inputin.forEach(input => {
        input.setAttribute("disabled", "true");
    })
})

reverse2.addEventListener("click", (event) => {
    event.preventDefault(); 
    signup.style.backgroundColor = "white"
    signin.style.backgroundColor = "#4D0176"
    reverse2.style.color = "black"
    reverse1.style.color = "white"
    forgottenPassword.style.color = "white"
    signinTitle.style.color = "white"
    signupTitle.style.color = "black"
    submit2.setAttribute("disabled" , "true")
        submit1.removeAttribute("disabled")
    det1.forEach(det => {
        det.style.color = "white"
    })
    det2.forEach(det => {
        det.style.color = "black"
    })
    inputin.forEach(input => {
        input.removeAttribute("disabled")
    })
    inputup.forEach(input => {
        input.setAttribute("disabled", "true")
    })
})
