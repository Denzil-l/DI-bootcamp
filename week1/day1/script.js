const parallax = document.querySelector('.parallax-horizontal');
const background = parallax.querySelector('.parallax-horizontal-background');

parallax.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const centerX = parallax.clientWidth / 2;
  const centerY = parallax.clientHeight / 2;

  const percentX = (mouseX - centerX) / centerX;
  const percentY = (mouseY - centerY) / centerY;

  const maxTranslation = 30;
  const translateX = percentX * maxTranslation;
  const translateY = percentY * maxTranslation;

  background.style.transform = `translate(${translateX}px, ${translateY}px)`;
});
