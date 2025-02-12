const sizeOptions = document.querySelectorAll('.size-option');

sizeOptions.forEach(option => {
    option.addEventListener('click', () => {
        sizeOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
    });
});