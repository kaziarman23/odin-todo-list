const overlay1 = document.querySelector(".overlay1");
const overlay1CreateBtn = document.querySelector("#overlay1_create_btn");
const overlay1Input = document.querySelector("#overlay1_input");
const mainContent = document.querySelector(".main_content");

const overlay2 = document.querySelector(".overlay2");
const overlay2CancelBtn = document.querySelector("#overlay2_cancel_btn");
const overlay2SaveBtn = document.querySelector("#overlay2_save_btn");

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

        let deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "delete_btn");
        deleteBtn.innerText = "Delete";

        deleteBtn.addEventListener("click", function (event) {
            const parentDiv = event.target.parentElement;
            parentDiv.remove();
        });

        addDetailsBtn.addEventListener("click", function () {
            overlay2.style.display = "block";

            overlay2CancelBtn.addEventListener("click", function () {
                overlay2.style.display = "none";
            });

            // save button event listener
            overlay2SaveBtn.addEventListener("click", function (e) {
                e.preventDefault();
                addDetailsBtn.remove();

                let overlay2DateInput = document.querySelector(
                    "#overlay2_dateInput"
                ).value;
                let overlay2DateInputText = document.createElement("p");
                overlay2DateInputText.innerHTML = `Dew Date: ${overlay2DateInput}`;
                overlay2DateInputText.setAttribute(
                    "class",
                    "overlay2DateInputText"
                );

                let priorityInput =
                    document.querySelector("#priorityInput").value;
                if (priorityInput === "Low") {
                    pageContent.style.border = "5px solid green";
                } else if (priorityInput === "Midium") {
                    pageContent.style.border = "5px solid yellow";
                } else {
                    pageContent.style.border = "5px solid red";
                }

                let discriptionInput =
                    document.querySelector("#discriptionInput").value;
                let discriptionInputText = document.createElement("p");
                discriptionInputText.innerHTML = `Discription: ${discriptionInput}`;
                discriptionInputText.setAttribute("class","discriptionInputText");

                // appending all inputs
                pageContent.appendChild(overlay2DateInputText);
                pageContent.appendChild(discriptionInputText);

                // Clear overlay2 inputs
                document.querySelector("#overlay2_dateInput").value = "";
                document.querySelector("#priorityInput").value = "";
                document.querySelector("#discriptionInput").value = "";
                pageContent.value = "";
                overlay2.style.display = "none";
            });
        });

        pageContent.appendChild(taskTitel);
        pageContent.appendChild(addDetailsBtn);
        pageContent.appendChild(deleteBtn);
        // pageContent.appendChild(pageContentChilde);
        mainContent.appendChild(pageContent);
    });
}

export default addPage;

// this code is buged one

// const overlay1 = document.querySelector(".overlay1");
// const overlay1CreateBtn = document.querySelector("#overlay1_create_btn");
// const overlay1Input = document.querySelector("#overlay1_input");
// const mainContent = document.querySelector(".main_content");

// const overlay2 = document.querySelector(".overlay2");
// const overlay2CancelBtn = document.querySelector("#overlay2_cancel_btn");
// const overlay2SaveBtn = document.querySelector("#overlay2_save_btn");

// function addPage() {
//     overlay1CreateBtn.addEventListener("click", function () {
//         overlay1.style.display = "none";

//         const pageContent = document.createElement("div");
//         pageContent.setAttribute("class", "page_content");

//         let taskTitel = document.createElement("h3");
//         taskTitel.setAttribute("class", "task_tital");
//         let overlay1InputValue = overlay1Input.value;
//         if (overlay1InputValue !== "") {
//             taskTitel.innerHTML = `${overlay1InputValue}`;
//         } else {
//             taskTitel.innerHTML = `Name?`;
//         }

//         let addDetailsBtn = document.createElement("button");
//         addDetailsBtn.setAttribute("class", "add_details_btn");
//         addDetailsBtn.innerText = "Add Details";

//         let deleteBtn = document.createElement("button");
//         deleteBtn.setAttribute("class", "delete_btn");
//         deleteBtn.innerText = "Delete";

//             deleteBtn.addEventListener("click", function (event) {
//                 const parentDiv = event.target.parentElement;
//                 parentDiv.remove();
//             });

//         addDetailsBtn.addEventListener("click", function () {
//             overlay2.style.display = "block";

//             overlay2CancelBtn.addEventListener("click", function () {
//                     overlay2.style.display = "none";
//             });

//             // save button event listener
//             overlay2SaveBtn.addEventListener("click", function (e) {
//                 e.preventDefault()
//                 addDetailsBtn.remove();

//                 let overlay2DateInput = document.querySelector("#overlay2_dateInput").value;
//                 let overlay2DateInputText = document.createElement("p");
//                 overlay2DateInputText.innerHTML = `Dew Date: ${overlay2DateInput}`;
//                 overlay2DateInputText.setAttribute("class","overlay2DateInputText");
//                 pageContent.appendChild(overlay2DateInputText);

//                 let priorityInputValue = document.querySelector("#priorityInput").value;
//                 if (priorityInputValue === "Low") {
//                     pageContent.style.border = "5px solid green";
//                 }
//                 else if (priorityInputValue === "Midium") {
//                     pageContent.style.border = "5px solid yellow";
//                 }
//                 else {
//                     pageContent.style.border = "5px solid red";
//                 }

//                 let discriptionInput = document.querySelector("#discriptionInput").value;
//                 let discriptionInputText = document.createElement("p");
//                 discriptionInputText.innerHTML = `Discription: ${discriptionInput}`;
//                 discriptionInputText.setAttribute("class","discriptionInputText");
//                 pageContent.appendChild(discriptionInputText);

//                 // Clear overlay2 inputs
//                 document.querySelector("#overlay2_dateInput").value = "";
//                 document.querySelector("#priorityInput").value = "";
//                 document.querySelector("#discriptionInput").value = "";
//                 pageContent.value = "";
//                 overlay2.style.display = "none";
//                 });
//             });

//         pageContent.appendChild(taskTitel);
//         pageContent.appendChild(addDetailsBtn);
//         pageContent.appendChild(deleteBtn);
//         mainContent.appendChild(pageContent);
//     });
// }

// export default addPage;

// this code is form chatGPT

// const overlay1 = document.querySelector(".overlay1");
// const overlay1CreateBtn = document.querySelector("#overlay1_create_btn");
// const overlay1Input = document.querySelector("#overlay1_input");
// const mainContent = document.querySelector(".main_content");

// const overlay2 = document.querySelector(".overlay2");
// const overlay2CancelBtn = document.querySelector("#overlay2_cancel_btn");
// const overlay2SaveBtn = document.querySelector("#overlay2_save_btn");

// function addPage() {
//   overlay1CreateBtn.addEventListener("click", function () {
//     overlay1.style.display = "none";

//     let taskTitel = document.createElement("h3");
//     taskTitel.setAttribute("class", "task_tital");
//     let overlay1InputValue = overlay1Input.value;
//     if (overlay1InputValue !== "") {
//       taskTitel.innerHTML = `${overlay1InputValue}`;
//     } else {
//       taskTitel.innerHTML = `Name?`;
//     }

//     let addDetailsBtn = document.createElement("button");
//     addDetailsBtn.setAttribute("class", "add_details_btn");
//     addDetailsBtn.innerText = "Add Details";

//         addDetailsBtn.addEventListener("click", function () {
//             overlay2.style.display = "block";

//             overlay2CancelBtn.addEventListener("click", function () {
//                 overlay2.style.display = "none";
//             });

//             overlay2SaveBtn.addEventListener("click", function (e) {
//                 e.preventDefault();
//                 addDetailsBtn.remove();

//                 let overlay2DateInput = document.querySelector("#overlay2_dateInput").value;
//                 let overlay2DateInputText = document.createElement("p");
//                 overlay2DateInputText.innerHTML = `Dew Date: ${overlay2DateInput}`;
//                 overlay2DateInputText.setAttribute("class", "overlay2DateInputText");

//                 let priorityInputValue = document.querySelector("#priorityInput").value;
//                 let discriptionInput = document.querySelector("#discriptionInput").value;

//                 createPageContent(taskTitel.innerHTML, overlay2DateInputText, priorityInputValue, discriptionInput);

//                 overlay2.style.display = "none";
//             });
//     });

//     let deleteBtn = document.createElement("button");
//     deleteBtn.setAttribute("class", "delete_btn");
//     deleteBtn.innerText = "Delete";

//     deleteBtn.addEventListener("click", function (event) {
//       const parentDiv = event.target.parentElement;
//       parentDiv.remove();
//     });

//     let pageContent = document.createElement("div");
//     pageContent.setAttribute("class", "page_content");
//     pageContent.appendChild(taskTitel);
//     pageContent.appendChild(addDetailsBtn);
//     pageContent.appendChild(deleteBtn);
//     mainContent.appendChild(pageContent);
//   });
// }

// function createPageContent(task, date, priority, description) {
//   let pageContent = document.createElement("div");
//   pageContent.setAttribute("class", "page_content");

//   let taskTitel = document.createElement("h3");
//   taskTitel.setAttribute("class", "task_tital");
//   taskTitel.innerHTML = task;

//   let dateText = document.createElement("p");
//   dateText.setAttribute("class", "overlay2DateInputText");
//   dateText.innerHTML = `Dew Date: ${date}`;

//   let priorityText = document.createElement("p");
//   if (priority === "Low") {
//     priorityText.style.border = "5px solid green";
//   } else if (priority === "Medium") {
//     priorityText.style.border = "5px solid yellow";
//   } else {
//     priorityText.style.border = "5px solid red";
//   }

//   let descriptionText = document.createElement("p");
//   descriptionText.innerHTML = `Description: ${description}`;

//   pageContent.appendChild(taskTitel);
//   pageContent.appendChild(dateText);
//   pageContent.appendChild(priorityText);
//   pageContent.appendChild(descriptionText);

//   mainContent.appendChild(pageContent);
// }

// export default addPage;
