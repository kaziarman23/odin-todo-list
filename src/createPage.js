const navCreateBtn = document.querySelector("#navCreateBtn")
const navClearBtn = document.querySelector("#navClearBtn")
const formOne = document.querySelector(".formOne")
const createInput = document.querySelector("#createInput")
const mainContent = document.querySelector(".mainContent")
const formOneCancelBtn = document.querySelector("#formOneCancelBtn")

function createPage(){
    navCreateBtn.addEventListener("click",function(){
        formOne.style.display ="block"
        clearInputs()
    })

    navClearBtn.addEventListener("click",function (){
        formOne.style.display ="none"
        mainContent.value =""
        clearInputs()
    })

    formOneCancelBtn.addEventListener("click",function(){
        formOne.style.display ="none"
        clearInputs()
    })
}

function clearInputs(){
    createInput.value ="";
}

export default createPage;