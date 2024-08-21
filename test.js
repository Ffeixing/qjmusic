let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // 每隔3秒切换到下一张图片

document.getElementById("sendFeedback").addEventListener("click", function() {
    alert("感谢反馈，推荐加Q群963364247");
});

window.onload = () => {
    showSlide(currentIndex);
};
