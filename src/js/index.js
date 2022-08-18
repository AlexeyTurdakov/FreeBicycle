import "../scss/main.scss";

/*ibg */
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}
ibg();

/*Menu burger */
let burger = document.querySelector("#menu-bar");

burger.addEventListener("click", menuOnClick);
function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

/*Adaptive block-text remove class .generation__block_mini */
let blockText = document.querySelectorAll(".generation__block_mini");

if (document.documentElement.clientWidth <= 1024) {
  for (let i = 0; i < blockText.length; i++) {
    blockText[i].classList.remove("generation__block_mini");
  }
}

/*slick-slider */
$(document).ready(function () {
  $(".slider__body").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});
