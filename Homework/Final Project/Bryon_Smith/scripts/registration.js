document.addEventListener("DOMContentLoaded", () => {
    
    // Handle form submission
    const form = document.getElementById("registration-form");
    const tableBody = document.querySelector("#registration-table tbody");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh

        // Collect form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();

        // Validate required fields
        if (!name || !email || !phone) {
            alert("Please fill out all fields.");
            return;
        }

        // Create a new table row
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>${phone}</td>
        `;

        // Append row to the table
        tableBody.appendChild(row);

        // Clear form inputs
        form.reset();
    });
});
