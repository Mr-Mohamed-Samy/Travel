let options = document.getElementsByClassName("morebtn")[0]
let more = document.getElementsByClassName("options")[0]
let myops = document.getElementsByClassName("MyOps")[0]
let body = document.getElementsByTagName("body")[0]










options.addEventListener("click",() =>  {
    if(more.style.display === "none" || more.style.display === " " ){
        more.style.display = "flex"
        myops.style.display = "flex"
    }
    else{
        more.style.display = "none"
        myops.style.display = "none"
    }
})