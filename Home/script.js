document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".btn");
    button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "#0056b3";
    });
    button.addEventListener("mouseout", function () {
        button.style.backgroundColor = "#007bff";
    });
    button.addEventListener("click", function () {
        alert("You clicked Try It Now!");
    });
});

document.querySelectorAll(".menu-btn").forEach(button => {
    button.addEventListener("mousemove", (e) => {
        let rect = button.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        button.style.setProperty("--x", x + "px");
        button.style.setProperty("--y", y + "px");
    });
});

