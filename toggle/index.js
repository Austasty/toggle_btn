const modeToggle = document.getElementById('modeToggle');
const modeText = document.getElementById('modeText');
const body = document.body;

modeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        modeText.innerText = 'Dark Mode';
    } else {
        modeText.innerText = 'Light Mode';
    }
});

// Optional: Check for user's preferred color scheme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-mode');
    modeToggle.checked = true;


    modeText.innerText = 'Dark Mode';
}

document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-link');  
    burger.addEventListener('click', function () {
      navLinks.classList.toggle('.nav-link.show');
    });
});

  