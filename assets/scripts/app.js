// id로 요소 선택하기
// (방법 1) -- recommend :: id가 있다면 이 방식을 권장 _ 성능 측면에서도!
const addMovieModalEl = document.getElementById("add-modal");
// (방법 2)
// const addMovieModalEl = document.querySelector("#add-modal");
// (방법 3)
// const addMovieModalEl = document.body.children[1];

const startAddMovieButton = document.querySelector("header button");
// 또 다른 방법 -- HTML 구조 변경 시, 의도와 다르게 작동할 수 있어 권장X
// const startAddMovieButton = document.querySelector("header").lastElementChild;

const cancelAddMovieButton = addMovieModalEl.querySelector(".btn--passive");

const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;

const userInputs = addMovieModalEl.querySelectorAll("input");

const entryTextSection = document.getElementById("entry-text");

const movies = [];

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
  //   listRoot.removeChild(listRoot.children[movieIndex]);
};

const renderNewMovieEl = (id, title, imageUrl, rating) => {
  const newMovieEl = document.createElement("li");
  newMovieEl.className = "movie-element";
  newMovieEl.innerHTML = `
    <div class="movie-element__image">
        <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating} / 5 stars</p>
    </div>
  `;
  newMovieEl.addEventListener("click", deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieEl);
};

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieInput();
};

const backdropEl = document.getElementById("backdrop");
const toggleBackdrop = () => {
  backdropEl.classList.toggle("visible");
};

const toggleMovieModal = () => {
  // classList.toggle() :: 이 class가 이미 요소에 있으면 그것을 제거, 없으면 그것을 추가함.
  addMovieModalEl.classList.toggle("visible");
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid values (rating between 1 and 5).");
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearMovieInput();
  renderNewMovieEl(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdropEl.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
