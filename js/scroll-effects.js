document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    let lastScrollPosition = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            hero.classList.add('scrolled');
            hero.classList.remove('not-scrolled');
        } else {
            hero.classList.remove('scrolled');
            hero.classList.add('not-scrolled');
        }
        
        lastScrollPosition = currentScroll;
    });
}); 