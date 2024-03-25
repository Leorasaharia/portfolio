const dynamicText = document.querySelector("h1 span");
const words = ["Leora Saharia", "A Web Developer", "A Singer", "A Youtuber"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");
    
    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect();
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})
();
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  const x = e.pageX;
  const y = e.pageY;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const distanceX = x - centerX;
  const distanceY = y - centerY;
  const angle = Math.atan2(distanceY, distanceX);
  
  const radius = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  
  const swirlX = centerX + Math.cos(angle) * radius;
  const swirlY = centerY + Math.sin(angle) * radius;
  
  cursor.style.left = swirlX + 'px';
  cursor.style.top = swirlY + 'px';
});



