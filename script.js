// Swap pages
function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    const navBtns = document.querySelectorAll('nav button:not(:first-child):not(#theme-btn)');
    if (id === 'accueil') {
        navBtns.forEach(btn => btn.style.display = 'none');
    } else {
        navBtns.forEach(btn => btn.style.display = 'inline-block');
    }
}

// Hide all buttons when play is not pressed
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav button:not(:first-child):not(#theme-btn)')
        .forEach(btn => btn.style.display = 'none');
});

// Dark mode
document.getElementById('theme-btn').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const btn = document.getElementById('theme-btn');
    btn.textContent = document.body.classList.contains('dark') ? 'Light' : 'Dark';
});
