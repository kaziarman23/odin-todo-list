const navCreateBtn = document.querySelector("#nav_create_btn");
const navClearBtn = document.querySelector("#nav_clear_btn");
const overlay1 = document.querySelector(".overlay1");
const overlay1CancelBtn = document.querySelector("#overlay1_cancel_btn");
const overlay1Input = document.querySelector("#overlay1_input");
const mainContent = document.querySelector(".main_content");

function createPage() {
    navClearBtn.addEventListener("click", function () {
        overlay1.style.display = "none";
        mainContent.textContent = "";
        clearInput();
    });

    overlay1CancelBtn.addEventListener("click", function () {
        overlay1.style.display = "none";
        clearInput();
    });

    navCreateBtn.addEventListener("click", function () {
        overlay1.style.display = "block";
        clearInput();
    });
}

function clearInput() {
    overlay1Input.value = "";
}

export default createPage;