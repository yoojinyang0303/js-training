// // do something!
// import axios from "axios";

// const NewsList = async (data) => {
//   const newsListContainer = document.createElement("div");
//   newsListContainer.className = "news-list-container";

//   const newsListArticle = document.createElement("article");
//   newsListArticle.className = "news-list";
//   newsListArticle.dataset.category = data.category;
//   newsListContainer.appendChild(newsListArticle);

//   const newsList = await getNewsList(data);
//   newsList.forEach((item) => {
//     newsListArticle.appendChild(item);
//   });

//   const scrollObserveElement = observeElement();

//   newsListContainer.appendChild(scrollObserveElement);

//   scrollObserver(newsListArticle, scrollObserveElement);

//   return newsListContainer;
// };

// const getNewsList = async (page = 1, category) => {
//   const newsArray = [];
//   const apiKey = "b2d89adb11dc454ca8046ab9ac5e3efa";
//   const url = `https://newspai.org/v2/top-headlines?country=kr&category=${
//     category === "all" ? "" : category
//   }&page=${page}&pageSize=8&apiKey=${apiKey}`;

//   try {
//     const response = await axios.get(url);
//     const articles = response.data.articles;

//     articles.forEach((data) => {
//       if (data.urlToImg === null) {
//         data.urlToImg = "../img/noming.gif";
//       }
//       if (data.description === null) {
//         data.description = "내용없음";
//       }

//       const newsItem = document.createElement("section");
//       newsItem.className = "news-item";
//       newsItem.insertAdjacentHTML(
//         "beforeend",
//         `
//             <div class="thumbnail">
//                 <a href="${data.url}" rel="noopener noreferrer" target="_blank">
//                     <img src=${data.urlToImg} alt="thumbnail image />
//                 </a>
//             </div>
//             <div class="contents">
//                 <h2>
//                     <a href=${data.url} rel="noopener noreferrer" target="_blank">${data.title}</a>
//                 </h2>
//                 <p>${data.description}</p>
//             </div>
//         `
//       );
//       newsArray.push(newsItem);
//     });

//     return newsArray;
//   } catch (error) {
//     console.log(error);
//   }

//   const observeElement = () => {
//     const observerElement = document.createElement("div");
//     observerElement.className = "scroll-observer";
//     observerElement.dataset.page = "1";

//     const observerImg = document.createElement("img");
//     observerImg.src = "./img/ball-triangle.svg";
//     observerImg.alt = "... Loading";

//     observerElement.appendChild(observerImg);

//     return observerElement;
//   };

//   const scrollObserver = (newsListArticle, scrollObserveElement) => {
//     const callback = async (lists) => {
//         for(const list of lists) {
//             if(list.isIntersecting) {
//                 const nextPage = parseInt(list.target.dataset['page']);
//                 const category = newsListArticle.dataset.category;

//                 const newsList = await getNewsList(nextPage, category);
//                 list.target.dataset['page'] = nextPage + 1;

//                 if(newsList.length > 0) {
//                     newsList.forEach((data) => {
//                         newsListArticle.appendChild(data);
//                     });
//                     continue;
//                 }
//                 observer.unobserver(list.target);
//                 list.target.remove();
//             }
//         }
//     };

//     const observer = new IntersectionObserver(callback, {threshold: 1.0});
//     observer.observe(scrollObserveElement);
// };

// export default NewsList;

import axios from "axios";

const NewsList = async (data) => {
  const newsListContainer = document.createElement("div");
  newsListContainer.className = "news-list-container";

  const newsListArticle = document.createElement("article");
  newsListArticle.className = "news-list";
  newsListArticle.dataset.category = data.category;
  newsListContainer.appendChild(newsListArticle);

  const newsList = await getNewsList(data);
  newsList.forEach((item) => {
    newsListArticle.appendChild(item);
  });

  const scrollObserverElement = observerElement();

  newsListContainer.appendChild(scrollObserverElement);

  scrollObserver(newsListArticle, scrollObserverElement);

  return newsListContainer;
};

const getNewsList = async (page = 1, category) => {
  const newsArr = [];
  const apiKey = "b2d89adb11dc454ca8046ab9ac5e3efa";
  const url = `https://newsapi.org/v2/top-headlines?country=kr&category=${
    category === "all" ? "" : category
  }&page=${page}&pageSize=8&apiKey=${apiKey}`;

  try {
    const response = await axios.get(url);
    const articles = response.data.articles;

    articles.forEach((data) => {
      if (data.urlToImage === null) {
        data.urlToImage = "../img/noimg.gif";
      }

      if (data.description === null) {
        data.description = "내용없음";
      }

      const newsItem = document.createElement("section");
      newsItem.className = "news-item";
      newsItem.insertAdjacentHTML(
        "beforeend",
        `
                <div class="thumbnail">
                    <a href=${data.url} target="_blank" 
                    rel="noopener noreferrer">
                        <img
                        src=${data.urlToImage}
                        alt="thumbnail" />
                    </a>
                </div>
                <div class="contents">
                    <h2>
                        <a href=${data.url} target="_blank" 
                        rel="noopener noreferrer">
                        ${data.title}
                        </a>
                    </h2>
                    <p>
                    ${data.description}
                    </p>
                </div>
            `
      );
      newsArr.push(newsItem);
    });
    return newsArr;
  } catch (error) {
    // console.log(error);
  }
};

const observerElement = () => {
  const observerElement = document.createElement("div");
  observerElement.className = "scroll-observer";
  observerElement.dataset.page = "1";

  const observerImg = document.createElement("img");
  observerImg.src = "./img/ball-triangle.svg";
  observerImg.alt = "Loading...";

  observerElement.appendChild(observerImg);

  return observerElement;
};

const scrollObserver = (newsListArticle, scrollObserverElement) => {
  const callback = async (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const nextPage = parseInt(entry.target.dataset["page"]);
        const category = newsListArticle.dataset.category;

        const newsList = await getNewsList(nextPage, category);
        entry.target.dataset["page"] = nextPage + 1;

        if (newsList.length > 0) {
          newsList.forEach((data) => {
            newsListArticle.appendChild(data);
          });
          continue;
        }
        observer.unobserve(entry.target);
        entry.target.remove();
      }
    }
  };
  const observer = new IntersectionObserver(callback, { threshold: 1.0 });
  observer.observe(scrollObserverElement);
};

export default NewsList;
