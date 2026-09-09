const elementoArea = document.querySelector('.elemento-area');

elementoArea.addEventListener('mouseenter', () => {
    elementoArea.classList.add('is-active');
});

elementoArea.addEventListener('mouseleave', () => {
    elementoArea.classList.remove('is-active');
});