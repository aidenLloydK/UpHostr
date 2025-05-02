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
  

  document.getElementById('delete-account').addEventListener('click', () => {
    const user = auth.currentUser;
    if (user) {
      if (confirm("Are you sure you want to delete your account? This cannot be undone.")) {
        user.delete().then(() => {
          alert("Account deleted successfully.");
          window.location.href = "/index.html"; // Redirect after deletion
        }).catch((error) => {
          if (error.code === 'auth/requires-recent-login') {
            alert("Please log in again before deleting your account for security reasons.");
            auth.signOut().then(() => {
              window.location.href = "/index.html"; // Redirect to login
            });
          } else {
            console.error("Error deleting account:", error);
            alert("An error occurred while trying to delete the account.");
          }
        });
      }
    }
  });