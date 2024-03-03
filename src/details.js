const addDetailsBtn = document.querySelector(".add_details_btn");
const mainContent = document.querySelector(".main_content");
const overlay2 = document.querySelector(".overlay2")


function detailsPage(){
    addDetailsBtn.addEventListener("click",function(){
        overlay2.style.display = "block"
    })
}

export default detailsPage;



// what i have done in this part:
// compliting work of add-details(overlay2)