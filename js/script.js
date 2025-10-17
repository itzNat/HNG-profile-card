function updateTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  timeElement.textContent = Date.now();
}

updateTime();

setInterval(updateTime, 100);

document.addEventListener('DOMContentLoaded', function() {
  const socialLinks = document.querySelectorAll('.social-link');
  socialLinks.forEach(link => {
    link.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
});
