// Example: Add interactivity or enhance functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('Blog website loaded successfully!');
  });
  document.querySelector('.read-more-btn').addEventListener('click', function() {
    const moreText = document.querySelector('.more-text');
    const button = this;
  
    if (moreText.style.display === 'none' || !moreText.style.display) {
      moreText.style.display = 'inline';
      button.textContent = 'Read Less';
    } else {
      moreText.style.display = 'none';
      button.textContent = 'Read More';
    }
  });
  