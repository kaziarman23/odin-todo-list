const formCreateBtn = document.querySelector(".formCreateBtn");
const formOne = document.querySelector(".formOne");
const mainContent = document.querySelector(".mainContent");


function addContent() {
    formCreateBtn.addEventListener("click", function () {
        formOne.style.display = "none";
        const pageContent = document.createElement("div")
       
        const detailsBtn = document.createElement("button")
        detailsBtn.innerHTML = `Details`
            // detailsBtn.addEventListener("click",function(){
            //     detailsBtn.remove()

            // })


        const nameInput = document.querySelector("#nameInput").value
        let titel = document.createElement("h1")
        titel.innerHTML =`${nameInput}`

        const deleteBtn = document.createElement("button")
        deleteBtn.innerHTML= `Delete`
        // have to add event listener
        

        // giving class
        pageContent.setAttribute("class","pageContent")
        detailsBtn.setAttribute("class","detailsBtn")
        titel.setAttribute("class","titel")
        deleteBtn.setAttribute("class","detailsBtn")

        // appending childs
        pageContent.appendChild(detailsBtn)
        pageContent.appendChild(titel)
        pageContent.appendChild(deleteBtn)
        mainContent.appendChild(pageContent)
    });
}

export default addContent;
