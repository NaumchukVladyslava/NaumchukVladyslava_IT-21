// Завдання 3
async function fetchPosts() {
    try {
        let response = await
        fetch("https://jsonplaceholder.typicode.com/posts");
        console.log(response);

        if (!response.ok) { 
            throw new Error("Помилка при отриманні постів"); 
        }

        let posts = await response.json(); 

        let postsContainer = document.querySelector("#posts");

        posts.forEach(post => {
            let postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.innerHTML = ` 
                <h1>${post.title}</h1>
                <p>${post.body}</p>
            `;
            postsContainer.appendChild(postElement); 
        });

    } catch (error) {
    document.querySelector("#posts").innerHTML = `<p>${error.message}</p>`;
    }
}

fetchPosts();

// Завдання 4
async function fetchUserInfo() {
    try {
        let response = await
        fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!response.ok) {
            throw new Error("Помилка при отриманні інформації користувача");
        }

        let user = await response.json();

        let userInfoContainer = document.querySelector("#user-info");
        userInfoContainer.innerHTML = `
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>City:</strong> ${user.address.city}</p>
        `;

        let postsResponse = await
        fetch("https://jsonplaceholder.typicode.com/posts?userId=1");

        if (!postsResponse.ok) {
            throw new Error("Помилка при отриманні постів користувача");
        }

        let posts = await postsResponse.json();

        let userPostsContainer = document.querySelector("#user-posts");
        posts.forEach(post => {
            let postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.innerHTML = `
                <h1>${post.title}</h1>
                <p>${post.body}</p>
            `;
            userPostsContainer.appendChild(postElement);
        });

    } catch (error) {
        document.querySelector("#user-info").innerHTML = `<p>${error.message}</p>`;
        document.querySelector("#user-posts").innerHTML = "";
    }
}

fetchUserInfo();
