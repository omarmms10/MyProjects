document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // You can add code here to process the form data, such as sending it to a server

        alert(`Form submitted:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    });
});
