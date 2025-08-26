const navbar = document.getElementById('navbar');
const toggleBtn = document.getElementById('toggleBtn');
const showBtn = document.getElementById('showBtn');

toggleBtn.addEventListener('click', () => {
    navbar.classList.add('hidden');
    showBtn.style.display = 'block';
});

showBtn.addEventListener('click', () => {
    navbar.classList.remove('hidden');
    showBtn.style.display = 'none';
});