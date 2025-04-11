document.querySelectorAll('.rule-header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
