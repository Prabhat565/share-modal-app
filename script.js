const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

function openModal() {
  console.log("opened");
  modal.classList.add("active");
  overlay.classList.add("overlay-active");
}
function closeModal() {
  console.log("closed");
  modal.classList.remove("active");
  overlay.classList.remove("overlay-active");
}
