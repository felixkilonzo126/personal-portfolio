const roles = ["Web Development", "Software Development", "Database Management", "Computer Networking"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100;
const target = document.querySelector(".animated-text");

function typeEffect() {
  const currentRole = roles[index];
  if (isDeleting) {
    charIndex--;
    target.textContent = currentRole.substring(0, charIndex);
  } else {
    charIndex++;
    target.textContent = currentRole.substring(0, charIndex);
  }

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % roles.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, speed);
  }
}

typeEffect();
