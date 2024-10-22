document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    alert('Thêm vào giỏ');
  });
});
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}