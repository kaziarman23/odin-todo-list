const formCreateBtn = document.querySelector(".formCreateBtn");
const formOne = document.querySelector(".formOne");
const mainContent = document.querySelector(".mainContent");

const formTwo = document.querySelector(".formTwo");
const formTwoSaveBtn = document.querySelector(".formTwoSaveBtn");
const detailsBtn = document.querySelector(".detailsBtn");

function addContent() {
    formCreateBtn.addEventListener("click", function () {
        formOne.style.display = "none";
        const pageContent = document.createElement("div");

        const detailsBtn = document.createElement("button");
        detailsBtn.innerHTML = `Details`;

        // adding event on details btn
        detailsBtn.addEventListener("click", function () {
            detailsBtn.remove();
            formTwo.style.display = "block";

            formTwoSaveBtn.addEventListener("click", function () {
                const dateInput = document.querySelector("#dateInput").value;
                let date = document.createElement("p");
                date.innerHTML = `Due date: ${dateInput}`;

                const priorityInput =
                    document.querySelector("#priorityInput").value;
                if (priorityInput === "Low") {
                    pageContent.style.borderBottom = "5px solid green";
                } else if (priorityInput === "Medium") {
                    pageContent.style.borderBottom = "5px solid yellow";
                } else {
                    pageContent.style.borderBottom = "5px solid red";
                }

                const discriptionInput = document.querySelector("#discriptionInput").value;
                let discription = document.createElement("p");
                discription.innerHTML = `discription: ${discriptionInput}`;

                const detailsDiv = document.createElement("div");

                // add class
                detailsDiv.setAttribute("class", "detailsDiv");
                date.setAttribute("class", "date");
                discription.setAttribute("class", "discription");

                // appending childs
                detailsDiv.appendChild(date);
                detailsDiv.appendChild(discription);
                pageContent.appendChild(detailsDiv)

                formTwo.style.display = "none";
                clearInput();
            });
        });

        const nameInput = document.querySelector("#nameInput").value;
        const titel = document.createElement("h1");
        titel.innerHTML = `${nameInput}`;

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = `Delete`;
            deleteBtn.addEventListener("click",function(e){
                const parentDiv = e.target.parentElement
                parentDiv.remove();
            })

        // giving class
        pageContent.setAttribute("class", "pageContent");
        detailsBtn.setAttribute("class", "detailsBtn");
        titel.setAttribute("class", "titel");
        deleteBtn.setAttribute("class", "deleteBtn");

        // appending childs
        pageContent.appendChild(detailsBtn);
        pageContent.appendChild(titel);
        pageContent.appendChild(deleteBtn);
        mainContent.appendChild(pageContent);
    });
}

function clearInput() {
    document.querySelector("#dateInput").value = "";
    document.querySelector("#priorityInput").value = "";
    document.querySelector("#discriptionInput").value = "";
}

export default addContent;
