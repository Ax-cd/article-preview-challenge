document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.querySelector(".share-btn");
  const returnBtn = document.querySelector(".return-btn");
  const sharing = document.querySelector(".share-section");

  function showShare() {
    shareBtn.addEventListener("click", function (e) {
      sharing.classList.toggle("toggle-display");
    });
    returnBtn.addEventListener("click", function (e) {
      sharing.classList.toggle("toggle-display");
    });
  }
  showShare();
});
