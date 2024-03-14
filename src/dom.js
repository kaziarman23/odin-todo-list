const formCreateBtn = document.querySelector(".formCreateBtn");
const formOne = document.querySelector(".formOne");
const mainContent = document.querySelector(".mainContent");

const formTwo = document.querySelector(".formTwo");
const formTwoSaveBtn = document.querySelector(".formTwoSaveBtn");
const formTwoCancelBtn = document.querySelector(".formTwoCancelBtn");

function addContent() {
    formCreateBtn.addEventListener("click", function () {
        formOne.style.display = "none";
        const pageContent = document.createElement("li");

        const detailsBtn = document.createElement("button");
        detailsBtn.innerHTML = `Details`;

        // adding event on details btn
        detailsBtn.addEventListener("click", function () {
            formTwo.style.display = "block";

            //adding event on cancel btn
            formTwoCancelBtn.addEventListener("click", function () {
                formTwo.style.display = "none";
                clearInput();
            });

            // adding event on save btn
            formTwoSaveBtn.addEventListener("click", function (e) {
                e.preventDefault();

                detailsBtn.remove();
                deleteBtn.remove();

                const dateInput = document.querySelector("#dateInput");
                const date = document.createElement("p");
                date.innerHTML = `Due date: ${dateInput.value}`;

                const priorityInput = document.querySelector("#priorityInput").value;
                if (priorityInput === "Low") {
                    pageContent.style.border = "5px solid green";
                } else if (priorityInput === "Medium") {
                    pageContent.style.border = "5px solid yellow";
                } else {
                    pageContent.style.border = "5px solid red";
                }

                const discriptionInput = document.querySelector("#discriptionInput");
                const discription = document.createElement("p");
                discription.innerHTML = `discription: ${discriptionInput.value}`;

                // creating a mini div to store  discription and date
                const detailsDiv = document.createElement("div");

                // created another delete button because of right position to the element
                const closeBtn = document.createElement("button");
                closeBtn.innerHTML = `Delete`;
                closeBtn.addEventListener("click", function (e) {
                    const parentDiv = e.target.parentElement;
                    parentDiv.remove();
                });

                // adding classes
                detailsDiv.setAttribute("class", "detailsDiv");
                date.setAttribute("class", "date");
                discription.setAttribute("class", "discription");
                closeBtn.setAttribute("class", "closeBtn");

                // appending childs
                detailsDiv.appendChild(date);
                detailsDiv.appendChild(discription);
                pageContent.appendChild(detailsDiv);
                pageContent.appendChild(closeBtn);

                // this is for the right positioning of the element
                pageContent.style.direction = "ltr";
                formTwo.style.display = "none";

                // clearing inputs
                dateInput.value = "";
                discriptionInput.value = "";
            });
        });

        const nameInput = document.querySelector("#nameInput").value;
        const titel = document.createElement("h1");
        titel.innerHTML = `${nameInput}`;
        titel.textContent = titel.textContent.toUpperCase(); //this is for capital latter

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = `Delete`;
        deleteBtn.addEventListener("click", function (e) {
            const parentDiv = e.target.parentElement;
            parentDiv.remove();
        });

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
