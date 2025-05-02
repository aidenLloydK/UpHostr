function toggleTheme() {
  const html = document.documentElement;
  const body = document.body;
  const button = document.getElementById('theme-toggle'); // Assuming the button has this ID

  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);

  // Optional: update class for body if you're using CSS that relies on it
  body.classList.toggle('dark-mode', newTheme === 'dark');

  // Update button text
  button.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
}
