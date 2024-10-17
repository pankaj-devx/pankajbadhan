const body = document.body;

let isDarkTheme = localStorage.getItem('theme') === 'dark';

if (isDarkTheme) body.classList.add('dark-theme');
else             body.classList.add('light-theme');

themeToggle.addEventListener('click', function () {
  isDarkTheme = !isDarkTheme;
  if (isDarkTheme) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
    moon.classList.remove('dsn');
    sun.classList.add('dsn');
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
    sun.classList.remove('dsn');
    moon.classList.add('dsn');
  }
});