const overlay1 = document.querySelector(".overlay1")
const overlay1CreateBtn = document.querySelector("#overlay1_create_btn");
const overlay1Input = document.querySelector("#overlay1_input");
const mainContent = document.querySelector(".main_content");
const pageContent = document.createElement("div");
pageContent.setAttribute("class", "task_contener");

function addPage() {
    overlay1CreateBtn.addEventListener("click", function () {
        overlay1.style.display = "none"

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

        let deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "delete_btn");
        deleteBtn.innerText = "Delete";

        pageContent.appendChild(taskTitel);
        pageContent.appendChild(addDetailsBtn);
        pageContent.appendChild(deleteBtn);
        mainContent.appendChild(pageContent);
        
        
    });
}

export default addPage;
