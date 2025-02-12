const sizeOptions = document.querySelectorAll('.size-option');

sizeOptions.forEach(option => {
    option.addEventListener('click', () => {
        sizeOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
    });
});

function changeQuantity(amount) {
    const quantityInput = document.getElementById('quantity');
    let currentValue = parseInt(quantityInput.value);
    currentValue += amount;
    if (currentValue < 1) currentValue = 1; // Prevent going below 1
    quantityInput.value = currentValue;
}