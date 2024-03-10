const formCreateBtn = document.querySelector(".formCreateBtn")
const formOne = document.querySelector(".formOne")

function addContent(){
    formCreateBtn.addEventListener("click",function(){
        formOne.style.display ="none"
        
    })
}

export default addContent;