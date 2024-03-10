const formOneCreateBtn = document.querySelector("#formOneCreateBtn")
const formOne = document.querySelector(".formOne")
const formTwo = document.querySelector(".formTwo")
const mainContent = document.querySelector(".mainContent")



function domPage(){
    formOneCreateBtn.addEventListener("click",function(){
        formOne.style.display = "none"
        let pageContent = document.querySelector("div")
        pageContent.setAttribute("class","pageContent")

        let detailsBtn = document.createElement("button")
        detailsBtn.innerText = "Details";
            detailsBtn.addEventListener("click",function(){
                //panding work
            })

        const createInput = document.querySelector("#createInput").value
        let titel = document.createElement("h1")
        if(createInput !== ""){
            titel.innerHTML =`${createInput}`
        }
        else{
            titel.innerHTML =`Name?`
        }
        


        let deleteBtn = document.createElement("button")
        deleteBtn.innerText = "Delete"
            deleteBtn.addEventListener("click",function(e){
                const parentDiv = e.target.parentelement
                parentDiv.remove()
            })


        // adding class to all attributes.
        detailsBtn.setAttribute("class","detailsBtn")
        titel.setAttribute("class","titel")
        deleteBtn.setAttribute("class","deleteBtn")

        //appending all tags into a div called pageContent.
        mainContent.appendChild(pageContent)   
    })
}

export default domPage;