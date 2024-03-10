const navCreateBtn = document.querySelector(".navCreateBtn")
const navClearBtn = document.querySelector(".navClearBtn")
const formOne = document.querySelector(".formOne")
const formCancelBtn = document.querySelector(".formCancelBtn")
const nameInput = document.querySelector("#nameInput")
const mainDiv = document.querySelector(".mainDiv")


function createPage(){
    navCreateBtn.addEventListener("click",function(){
        formOne.style.display = "block"
        clearInput()
    })
    navClearBtn.addEventListener("click",function(){
        formOne.style.display = "none"
        mainDiv.value ="";
        clearInput()
    })
    formCancelBtn.addEventListener("click",function(){
        formOne.style.display = "none"
        clearInput()
    })
}

function clearInput(){
    nameInput.value ="";
}

export default createPage;