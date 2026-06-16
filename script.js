document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let msg = document.getElementById("formMsg");

    if (name === "" || email === "") {
        msg.innerText = "Please fill all fields";
        msg.style.color = "red";
    } else {
        msg.innerText = "Form submitted successfully!";
        msg.style.color = "green";
    }
});
const toggleBtn = document.getElementById("toggleDark");

toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}