const slide = document.querySelectorAll(".item-slide");
const slWl = document.querySelector(".slider-wall");
const prew = document.querySelector(".prewBtn");
const next = document.querySelector(".nextBtn");
const eachItem = document.querySelectorAll(".each-item");
const titleEach = document.querySelectorAll(".each-item-title");
const plyerItem = document.querySelector(".player-item");
const nameitem = document.querySelectorAll(".name-item-pl");

let current = 0;

prew.addEventListener("click", () => {
  if (current !== 0) {
    current--;
  }
  carousel(current);
});
next.addEventListener("click", () => {
  if (current < slide.length - 1) {
    current++;
  }
  carousel(current);
});

const carousel = () => {
  slide.forEach((slides) => {
    slides.style.transform = `translateX( -${current * 100}%)`;
  });
};

eachItem.forEach((item) => {
  item.addEventListener("click", () => {
    plyerItem.id = item.id;
    if (!item.classList.contains("act")) {
      if (item.classList.contains("act")) {
        item.classList.remove("act");
      }
      item.classList.add("act");
    } else if (item.classList.contains("act")) {
      item.classList.remove("act");
    }
    nameitem.forEach((textC) => {
      if (plyerItem.id == item.id) {
        textC.textContent = item.textContent;
      }
    });
  });
});
