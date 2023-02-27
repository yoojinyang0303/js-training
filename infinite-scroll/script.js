(function () {
  "use strict";

  const get = (target) => {
    return document.querySelector(target);
  };

  let page = 1;
  const limit = 10;
  const $posts = get(".posts");
  const end = 100; // API에서 불러올 전체 데이터 수
  let total = 10;

  const $loader = get(".loader");

  const getPosts = async () => {
    // API URL 가져오기
    const API_URL = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`;
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

  //   const loadPosts = async () => {
  //     const response = await getPosts();
  //     showPosts(response);
  //   };

  const showLoader = () => {
    $loader.classList.add("show");
  };
  const hideLoader = () => {
    $loader.classList.remove("show");
  };

  const loadPosts = async () => {
    // 로딩 엘리먼트 보여줌
    showLoader();
    try {
      const response = await getPosts();
      showPosts(response);
    } catch (error) {
      console.error(error);
    } finally {
      // 로딩 엘리먼트를 사라지게 함
      hideLoader();
    }
  };

  const onScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (total == end) {
      window.removeEventListener("scroll", onScroll);
      return;
    }
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      page++;
      total += 10;
      loadPosts();
    }
  };

  window.addEventListener("DOMContentLoaded", () => {
    loadPosts();
    // 스크롤 끝 감지
    window.addEventListener("scroll", onScroll);
  });
})();
