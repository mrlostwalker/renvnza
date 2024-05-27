const left = document.querySelectorAll(".animate-left");
const right = document.querySelectorAll(".animate-right");
const fade = document.querySelectorAll(".animate-fade");


const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
        const length = entry.target.classList.length
        const req_clsss = entry.target.classList[length-1]
        console.log();
        if (entry.isIntersecting) {
            entry.target.classList.add(`${req_clsss}-show`);
        }
    });
});


left.forEach((el) => observer.observe(el));
right.forEach((el) => observer.observe(el));
fade.forEach((el) => observer.observe(el));
