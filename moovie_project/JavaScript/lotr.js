const apiKey = "B1lmuNCxfkD5kzGqi6_q";
const headers = {
  Authorization: `Bearer ${apiKey}`,
};

const characterContainer = document.getElementById("character-container");
const button = document.getElementById("lotr__button");
const errorContainer = document.createElement("div");
errorContainer.style.color = "red";
characterContainer.parentNode.insertBefore(
  errorContainer,
  characterContainer.nextSibling
);

const loadingContainer = document.createElement("div");
loadingContainer.textContent = "Загрузка данных...";
loadingContainer.style.display = "none";
characterContainer.parentNode.insertBefore(
  loadingContainer,
  characterContainer.nextSibling
);

const fetchAllCharacters = async () => {
  try {
    loadingContainer.style.display = "block";
    const url = "https://the-one-api.dev/v2/character";
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    return data.docs;
  } catch (error) {
    errorContainer.textContent = `Ошибка: ${error.message}`;
  } finally {
    loadingContainer.style.display = "none";
    console.log("Запрос завершен");
  }
};

button.addEventListener("click", async () => {
  errorContainer.textContent = "";
  try {
    const characters = await fetchAllCharacters();
    if (characters) {
      characterContainer.innerHTML = "";
      const randomIndex = Math.floor(Math.random() * characters.length);
      const character = characters[randomIndex];
      const characterElement = document.createElement("div");
      characterElement.innerHTML = `
          <h3>${character.name}</h3>
          <p>Статья: ${character.wikiUrl}</p>
          <p>Раса: ${character.race}</p>
          <p>Пол: ${character.gender}</p>
          <p>Дата рождения: ${character.birth}</p>
          <p>Дата смерти: ${character.death}</p>
          <p>Волосы: ${character.hair}</p>
          <p>Рост: ${character.height}</p>
          <p>Королевство: ${character.realm}</p>
          <p>Супруг/а: ${character.spouse}</p>
        `;
      characterContainer.appendChild(characterElement);
    }
  } catch (error) {
    errorContainer.textContent = `Ошибка: ${error.message}`;
  }
});

// Movie gallery with Swiper.js
document.addEventListener("DOMContentLoaded", function () {
  const LOTRcardsArray = [
    {
      title: "Lord of the Rings: The Fellowship of the Ring",
      genres: "Action/Adventure, Sci-Fi/Fantasy",
      year: "2001",
      url: "./assets/images/LOTR/ring.jpg",
    },
    {
      title: "Lord of the Rings: The Two Towers",
      genres: "Action/Adventure, Oscar Winners, Sci-Fi/Fantasy",
      year: "2002",
      url: "./assets/images/LOTR/towers.jpg",
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      genres: "Action/Adventure, Oscar Winners, Sci-Fi/Fantasy",
      year: "2003",
      url: "./assets/images/LOTR/king.jpg",
    },
    {
      title: "Hobbit: An Unexpected Journey",
      genres: "Action/Adventure, Sci-Fi/Fantasy",
      year: "2012",
      url: "./assets/images/LOTR/journey.jpg",
    },
    {
      title: "The Hobbit: The Desolation of Smaug",
      genres: "Action/Adventure, Sci-Fi/Fantasy",
      year: "2013",
      url: "./assets/images/LOTR/smaug.jpg",
    },
    {
      title: "The Hobbit: The Battle of the Five Armies",
      genres: "Action/Adventure, Drama, Sci-Fi/Fantasy, Suspense/Thriller",
      year: "2014",
      url: "./assets/images/LOTR/armies.jpg",
    },
  ];

  let currentIndex = 0;
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  setTimeout(() => {
    updateCard();
  }, 100);

  const updateCard = () => {
    const card = LOTRcardsArray[currentIndex];
    console.log("Updating card:", card);
    const cardElement = document.querySelector(".card-container");

    if (!cardElement) {
      console.error("Не найден .card-container элемент!");
      return;
    }

    const imgElement = cardElement.querySelector(".LOTRcard__image");
    const titleElement = cardElement.querySelector(".LOTRcard__title");
    const genresElement = cardElement.querySelector(".LOTRcard__genres");
    const yearElement = cardElement.querySelector(".LOTRcard__year");

    if (!imgElement || !titleElement || !genresElement || !yearElement) {
      console.error("Не найдены необходимые элементы внутри .card-container!");
      return;
    }

    imgElement.src = card.url;
    imgElement.alt = card.title;
    titleElement.textContent = card.title;
    genresElement.innerHTML = `<b>Genres:</b> ${card.genres}`;
    yearElement.innerHTML = `<b>Year:</b> ${card.year}`;
  };

  updateCard();

  prevButton.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + LOTRcardsArray.length) % LOTRcardsArray.length;
    updateCard();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % LOTRcardsArray.length;
    updateCard();
  });
});
