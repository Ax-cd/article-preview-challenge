document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.querySelector(".share-btn");
  const sharing = document.querySelector(".share-section");

  function showShare() {
    shareBtn.addEventListener("click", function (e) {
      sharing.classList.toggle("toggle-display");
      shareBtn.classList.toggle("inverted-btn");
    });
  }
  showShare();
});
