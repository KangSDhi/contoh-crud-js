const form = document.getElementById("form");
const input = document.getElementById("input");
const msg = document.getElementById("msg");
const posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Inputan Tidak Boleh Kosong!"
        console.error("failure");
    } else {
        console.log("success");
        msg.innerHTML = "";

        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
};

let createPost = () => {
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onCLick="editPost(this)" class="fas fa-edit"></i>
            <i onCLick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;
    input.value = "";
}

let deletePost = (e) => {
    console.log(e.parentElement.parentElement);
    e.parentElement.parentElement.remove();
}

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}