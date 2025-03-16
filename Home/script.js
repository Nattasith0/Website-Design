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

document.addEventListener("DOMContentLoaded", function () {
    // จัดการปุ่มเมนูทุกอัน
    document.querySelectorAll(".menu-btn").forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault(); // ป้องกันการโหลดหน้าใหม่

            const targetId = this.getAttribute("href").substring(1); // เอา id จาก href เช่น "#menu" → "menu"
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // ให้เลื่อนลงมาพอดี (ปรับค่า -50 ตามความเหมาะสม)
                    behavior: "smooth" // ทำให้เลื่อนอย่างนุ่มนวล
                });
            }
        });
    });
});