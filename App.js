// do something!
import Nav from "./components/Nav";
import NewsList from "./components/NewsList";

window.onload = async function () {
  const root = document.getElementById("root");
  const proxyData = new Proxy(
    {
      category: "all",
    },
    {
      set: async function (target, prop, value) {
        Reflect.set(target, prop, value);
        const newsListElement = await NewsList(proxyData);
        const newsListContainer = root.querySelector(".news-list-container");

        if (newsListContainer === null) {
          root.appendChild(newsListElement);
        } else {
          newsListContainer.replaceWith(newsListElement);
          return;
        }
      },
    }
  );

  const navElement = Nav(proxyData);
  root.appendChild(navElement);

  const newsListElement = await NewsList(proxyData);
  root.appendChild(newsListElement);
};
