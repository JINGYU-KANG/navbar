document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector("#mobile-menu");
  const menuLinks = document.querySelector(".nav_menu");
  const modal = document.getElementById("myModal");
  const popUpBtn = document.getElementById("myBtn");
  const closeSpan = document.getElementById("close");

  menu.addEventListener("click", () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
  });

  popUpBtn.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.style.overflowY = "hidden";
  });

  closeSpan.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflowY = "auto";
  });

  // popUpBtn.onclick = () => {
  //   modal.style.display = "block";
  //   document.body.style.overflowY = "hidden";
  // };

  // closeSpan.onclick = () => {
  //   modal.style.display = "none";
  //   document.body.style.overflowY = "auto";
  // };

  // document.onclick = function (event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // };
});
