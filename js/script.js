// Scroll functionality
document.addEventListener('DOMContentLoaded', () => {
    const scrollUp = document.querySelector('.scroll-up');
    const scrollDown = document.querySelector('.scroll-down');
    
    if (scrollUp) {
        scrollUp.addEventListener('click', () => {
            window.scrollBy({ top: -300, behavior: 'smooth' });
        });
    }
    
    if (scrollDown) {
        scrollDown.addEventListener('click', () => {
            window.scrollBy({ top: 300, behavior: 'smooth' });
        });
    }
});