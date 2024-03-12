const navCreateBtn = document.querySelector(".navCreateBtn");
const navClearBtn = document.querySelector(".navClearBtn");
const formOne = document.querySelector(".formOne");
const formCancelBtn = document.querySelector(".formCancelBtn");
const nameInput = document.querySelector("#nameInput");
function createPage() {
    navCreateBtn.addEventListener("click", function () {
        formOne.style.display = "block";
        clearInput();
    });
    navClearBtn.addEventListener("click", function () {
        formOne.style.display = "none";
        const mainContent = document.querySelector(".mainContent");
        mainContent.textContent = "";
        clearInput();
    });
    formCancelBtn.addEventListener("click", function () {
        formOne.style.display = "none";
        clearInput();
    });
}

function clearInput() {
    nameInput.value = "";
}

export default createPage;
