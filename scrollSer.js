window.addEventListener('scroll', function() {
  const section = document.querySelector('.full-width-section');

  // Calculate the opacity based on scroll position
  const opacity = 2 - (window.scrollY / (section.offsetHeight - window.innerHeight));

  // Apply the calculated opacity to the section
  section.style.opacity = opacity;

  // Add or remove the transparent class based on opacity
  if (opacity <= 0.5) {
    section.classList.add('transparent');
  } else {
    section.classList.remove('transparent');
  }
});


