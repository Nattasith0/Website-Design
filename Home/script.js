document.addEventListener("DOMContentLoaded", function () {
    const menuButtons = document.querySelectorAll(".menu-btn");
    const sections = document.querySelectorAll(".section");

    // Scroll to section smoothly on menu button click
    menuButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Show sections on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Button hover effect
    document.querySelectorAll(".menu-btn").forEach(button => {
        button.addEventListener("mousemove", (e) => {
            let rect = button.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            button.style.setProperty("--x", x + "px");
            button.style.setProperty("--y", y + "px");
        });
    });

    // Alert on button click (Example)
    const exampleButton = document.querySelector(".btn");
    if (exampleButton) {
        exampleButton.addEventListener("click", function () {
            alert("คุณกดปุ่มสำรวจแล้ว!");
        });
    }
});