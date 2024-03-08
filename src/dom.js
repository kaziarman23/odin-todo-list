const overlay1 = document.querySelector(".overlay1");
const overlay1CreateBtn = document.querySelector("#overlay1_create_btn");
const overlay1Input = document.querySelector("#overlay1_input");
const mainContent = document.querySelector(".main_content");

const overlay2 = document.querySelector(".overlay2");
const overlay2CancelBtn = document.querySelector("#overlay2_cancel_btn");
const overlay2SaveBtn = document.querySelector("#overlay2_save_btn");
const overlay2Input = document.querySelectorAll("input").value;


function addPage() {
    overlay1CreateBtn.addEventListener("click", function () {
        overlay1.style.display = "none";

        const pageContent = document.createElement("div");
        pageContent.setAttribute("class", "page_content");

        let taskTitel = document.createElement("h3");
        taskTitel.setAttribute("class", "task_tital");
        let overlay1InputValue = overlay1Input.value;
        if (overlay1InputValue !== "") {
            taskTitel.innerHTML = `${overlay1InputValue}`;
        } else {
            taskTitel.innerHTML = `Name?`;
        }

        let addDetailsBtn = document.createElement("button");
        addDetailsBtn.setAttribute("class", "add_details_btn");
        addDetailsBtn.innerText = "Add Details";

        addDetailsBtn.addEventListener("click", function () {
            overlay2.style.display = "block";

            overlay2CancelBtn.addEventListener("click", function () {
                overlay2.style.display = "none";
            });

            overlay2SaveBtn.addEventListener("click", function () {
                addDetailsBtn.remove();
                overlay2.style.display = "none";

                let overlay2DateInputValue = document.querySelector("#overlay2_dateInput").value;
                let overlay2DateInputText = document.createElement("p");
                overlay2DateInputText.innerHTML = `Dew Date: ${overlay2DateInputValue}`;
                overlay2DateInputText.setAttribute("class","overlay2DateInputText");
                pageContent.appendChild(overlay2DateInputText);
                

                let priorityInputValue = document.querySelector("#priorityInput").value;
                if (priorityInputValue === "Low") {
                    pageContent.style.border = "5px solid green";
                } else if (priorityInputValue === "Midium") {
                    pageContent.style.border = "5px solid yellow";
                } else {
                    pageContent.style.border = "5px solid red";
                }

                let discriptionInputValue =document.querySelector("#discriptionInput").value;
                let discriptionInputText = document.createElement("p");
                discriptionInputText.innerHTML = `Discription: ${discriptionInputValue}`;
                discriptionInputText.setAttribute("class","discriptionInputText");
                pageContent.appendChild(discriptionInputText);
                
                
            });
        });

        let deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "delete_btn");
        deleteBtn.innerText = "Delete";

        deleteBtn.addEventListener("click", function (event) {
            const parentDiv = event.target.parentElement;
            parentDiv.remove();
        });

        pageContent.appendChild(taskTitel);
        pageContent.appendChild(addDetailsBtn);
        pageContent.appendChild(deleteBtn);
        mainContent.appendChild(pageContent);
         
    });
}

// function clearInput(input){
//         if(input.type === text){
//             input.value = '';
//         }
//         else if(input.type === Date){
//             input.value = '';
//         }
// }


export default addPage;

