const paragraph = document.getElementById('paragraph');
const seeMoreBtn = document.getElementById('see-more-btn');

seeMoreBtn.addEventListener('click', () => {
  paragraph.classList.toggle('expanded');
  if (paragraph.classList.contains('expanded')) {
    seeMoreBtn.innerText = 'See Less';
  } else {
    seeMoreBtn.innerText = 'See More';
  }
});