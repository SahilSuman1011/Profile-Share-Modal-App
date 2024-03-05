const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// modal open function

const openModal = () => {
    console.log("modal is Open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

//Modal Close Function

const closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};