/* search bar function */

document.addEventListener("DOMContentLoaded", function() {
  const searchBar = document.querySelector('.search-bar-gallery');
  searchBar.addEventListener('input', function() {
      const query = this.value.toLowerCase();
      const images = document.querySelectorAll('.gallery .picture');

      images.forEach(img => {
          const match = img.alt.toLowerCase().includes(query);
          img.style.display = match ? '' : 'none';
      });
  });
});