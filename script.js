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
document.getElementById("loadPosts").addEventListener("click", function () {

    const container = document.getElementById("postContainer");

    container.innerHTML = "<p>Loading...</p>";

    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
        .then(response => response.json())
        .then(data => {

            container.innerHTML = "";

            data.forEach(post => {

                container.innerHTML += `
                    <div class="post">
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    </div>
                `;
            });

        })
        .catch(() => {
            container.innerHTML = "<p>Error loading data.</p>";
        });

});