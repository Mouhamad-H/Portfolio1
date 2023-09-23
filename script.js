function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}



function openWhatsApp() {
    // Replace 'your-phone-number' with your actual phone number including the country code.
    var phoneNumber = '81800157';

    // You can also specify a message to pre-fill in the WhatsApp chat.
    // var message = 'Hello, I would like to contact you.';

    // Construct the WhatsApp URL.
    var whatsappURL = 'https://wa.me/' + 81800157;

    // If you want to include a pre-filled message, you can add it to the URL like this:
    // var whatsappURL = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);

    // Open WhatsApp in a new tab/window.
    window.open(whatsappURL);

    // If you want to open WhatsApp in the same tab, you can use the following line instead:
    // window.location.href = whatsappURL;
}