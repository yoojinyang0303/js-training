(function () {
  "use strict";

  const get = (target) => {
    return document.querySelector(target);
  };

  const $posts = get(".posts");

  const getPost = async () => {
    // API URL 가져오기
    const API_URL = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("에러 발생!!!");
    }
    return await response.json();
  };

  const showPosts = (posts) => {
    posts.forEach((post) => {
      const $post = document.createElement("div");
      $post.classList.add("post");
      $post.innerHTML = `
            <div class="header">
                <div class="id">${post.id}</div>
                <div class="title">${post.title}</div>
            </div>
            <div class="body">
                ${post.body}
            </div>
        `;
      $posts.appendChild($post);
    });
  };

  const loadPost = async () => {
    const response = await getPost();
    showPosts(response);
  };

  window.addEventListener("DOMContentLoaded", () => {
    loadPost();
  });
})();
