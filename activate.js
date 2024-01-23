        const users = [
            { username: "thiago", password: "123", url: "https://www.google.com" },
            { username: "user2", password: "123", url: "https://www.example2.com" },
            { username: "user3", password: "123", url: "https://www.example2.com" }

        ];

        const loginForm = document.getElementById("loginForm");

        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Check if username and password are valid
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                // Store user data in localStorage
                localStorage.setItem("currentUser", JSON.stringify(user));

                // Redirect to user's URL
                window.location.href = user.url;
            } else {
                alert("Invalid username or password");
            }
        });

        // Check if user is already logged in
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
            window.location.href = currentUser.url;
        }
