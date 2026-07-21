const images = [
"images/IMG20260619013937.jpg",
"images/IMG20260619123727.jpg",
"images/IMG20260623170230.jpg",
"images/IMG20260623180427.jpg",
"images/IMG20260625112622.jpg",
"images/IMG20260627125949.jpg"
  "images/IMG20260627131640.jpg",
"images/IMG20260628104551.jpg",
"images/IMG20260628105006.jpg",
"images/IMG20260628105108.jpg",
"images/IMG20260628110956.jpg",
"images/IMG20260628155734.jpg",
"images/IMG20260628155742.jpg",
"images/IMG20260628155757.jpg",
"images/IMG_20260628_161211.jpg",
"images/IMG_20260703_162645.jpg"
];

const gallery = document.getElementById("gallerySlider");

gallery.innerHTML = `
<div class="slider-wrapper">

<button class="slider-btn prev">&#10094;</button>

<div class="slider-track"></div>

<button class="slider-btn next">&#10095;</button>

</div>
`;

const track = document.querySelector(".slider-track");

images.forEach(src=>{

track.innerHTML += `
<div class="slide">
<img src="${src}" alt="">
</div>
`;

});
let current = 0;

function showSlide() {

    track.style.transform = `translateX(-${current * 340}px)`;

}

document.querySelector(".next").onclick = () => {

    if (current < images.length - 1) {

        current++;

    } else {

        current = 0;

    }

    showSlide();

};

document.querySelector(".prev").onclick = () => {

    if (current > 0) {

        current--;

    } else {

        current = images.length - 1;

    }

    showSlide();

};

setInterval(() => {

    if (current < images.length - 1) {

        current++;

    } else {

        current = 0;

    }

    showSlide();

}, 3000);
