// Smooth animation when page loads

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Button animation

const buttons = document.querySelectorAll(".btn, .btn-outline");

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-5px)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0)";
    });
});