// script.js

document.addEventListener("DOMContentLoaded", () => {
    const footerText = document.getElementById("footer-text");
    const currentYear = new Date().getFullYear();
    footerText.textContent = `© 2023 - ${currentYear}, Bryon Smith. All Rights Reserved.`;
});
