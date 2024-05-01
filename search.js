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

/* dynamic typing effect */
  const target = document.getElementById('dynamicText');
  const text = "DoReMi's Artwork Gallery";
  let index = 0;

  function typeText() {
    if (index < text.length) {
      target.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 150); // call function itself after 150ms
    }
  }
// start dynamic typing when page is fully loaded
window.onload = typeText;

