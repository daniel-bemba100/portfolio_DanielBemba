// Contact Form Submission
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    status.textContent = "Thank you! Your message has been sent.";
    status.style.color = "#10b981";
    status.style.fontSize = "1rem";
    this.reset();

    // Clear message after 5 seconds
    setTimeout(() => {
        status.textContent = "";
    }, 5000);
});
// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const icon = document.getElementById('darkModeIcon');
    const body = document.body;

    // Check if user has a preference stored
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isDarkMode) {
        body.classList.add('dark-mode');
        icon.innerHTML = `
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        `;
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            // Switch to Sun Icon (Light Mode)
            icon.innerHTML = `
                <path d="M12 3v3M12 18v3M5.6 5.6l2.1 2.1m8.4 8.4l2.1 2.1M3 12h3m12 0h-3M5.6 18.4l2.1-2.1m8.4-8.4l2.1-2.1"></path>
                <circle cx="12" cy="12" r="4"></circle>
            `;
            localStorage.setItem('darkMode', 'true');
        } else {
            // Switch back to Moon Icon (Dark Mode)
            icon.innerHTML = `
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            `;
            localStorage.setItem('darkMode', 'false');
        }
    });
});