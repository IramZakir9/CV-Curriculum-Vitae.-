// Smooth Scrolling Effect (for future navigation menu)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Profile Picture Hover Effect
const profilePic = document.querySelector(".profile img");
if (profilePic) {
    profilePic.addEventListener("mouseover", () => {
        profilePic.style.transform = "scale(1.1)";
        profilePic.style.transition = "0.3s ease-in-out";
    });

    profilePic.addEventListener("mouseleave", () => {
        profilePic.style.transform = "scale(1)";
    });
}

// Copy Contact Number to Clipboard
const phoneNumber = document.querySelector(".contact-number");
if (phoneNumber) {
    phoneNumber.addEventListener("click", () => {
        const tempInput = document.createElement("input");
        tempInput.value = phoneNumber.innerText;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        alert("Phone number copied to clipboard!");
    });
}

// Dark Mode Toggle
const darkModeButton = document.createElement("button");
darkModeButton.innerText = "Toggle Dark Mode";
darkModeButton.style.position = "fixed";
darkModeButton.style.bottom = "10px";
darkModeButton.style.right = "10px";
darkModeButton.style.padding = "10px";
darkModeButton.style.background = "#3498db";
darkModeButton.style.color = "#fff";
darkModeButton.style.border = "none";
darkModeButton.style.borderRadius = "5px";
darkModeButton.style.cursor = "pointer";
document.body.appendChild(darkModeButton);

darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Dark Mode CSS Styles
const darkModeStyles = document.createElement("style");
darkModeStyles.innerHTML = `
    .dark-mode {
        background-color: #222;
        color: #f4f4f4;
    }

    .dark-mode a {
        color: #ff5733;
    }

    .dark-mode .profile, .dark-mode .contact-info {
        background: #333;
        color: white;
    }
`;
document.head.appendChild(darkModeStyles);
