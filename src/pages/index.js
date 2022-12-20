import "./index.css";

const image = document.querySelector(".image");
const openButton = document.querySelector(".image__open-button");
const closeButton = document.querySelector(".image__close-button");

function openImage() {
  image.classList.add("image_active");
}

function closeImage() {
  image.classList.remove("image_active");
}

openButton.addEventListener("click", () => {
  openImage();
});

closeButton.addEventListener("click", () => {
  closeImage();
});
