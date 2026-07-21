/* =====================================
   BN Furniture Ahmedabad
   script.js - Part 1
===================================== */

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Sticky Header Shadow
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.45)";

    }else{

        header.style.boxShadow = "none";

    }

});


// Fade Animation
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.15
});


document.querySelectorAll("section").forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(50px)";

    section.style.transition=".8s";

    observer.observe(section);

});
/* =====================================
   BN Furniture Ahmedabad
   script.js - Part 2
===================================== */

// Counter Animation

const counters = document.querySelectorAll(".counter-box h2");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const targetText = counter.innerText;

            const target = parseInt(targetText.replace(/\D/g, "")) || 0;

            let count = 0;

            const speed = Math.max(10, Math.floor(target / 80));

            const updateCounter = () => {

                count += speed;

                if (count >= target) {

                    counter.innerText = targetText;

                } else {

                    if (targetText.includes("+")) {
                        counter.innerText = count + "+";
                    } else {
                        counter.innerText = count;
                    }

                    requestAnimationFrame(updateCounter);
                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

}, { threshold: 0.5 });

counters.forEach(counter => {

    counterObserver.observe(counter);

});



// Active Navigation Highlight

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



// Image Hover Cursor

document.querySelectorAll(".gallery-item img").forEach(img => {

    img.style.cursor = "pointer";

});
/* =====================================
   BN Furniture Ahmedabad
   script.js - Part 3
===================================== */

// Scroll To Top Button

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.id = "scrollTopBtn";

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.left = "20px";
scrollBtn.style.width = "50px";
scrollBtn.style.height = "50px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.background = "#FFC107";
scrollBtn.style.color = "#000";
scrollBtn.style.fontSize = "22px";
scrollBtn.style.fontWeight = "bold";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        scrollBtn.style.display = "block";

    }else{

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



// Lazy Loading Images

document.querySelectorAll("img").forEach(img=>{

    img.loading="lazy";

});



// Welcome Message

console.log("Welcome to BN Furniture Ahmedabad Website");



// Current Year in Footer

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if(copyright){

    copyright.innerHTML = `© ${year} BN Furniture Ahmedabad. All Rights Reserved.`;

}



// Image Click Preview (basic)

document.querySelectorAll(".gallery-item img").forEach(image=>{

    image.addEventListener("click",()=>{

        window.open(image.src,"_blank");

    });

});
