import axios from "axios";

const Card = (article) => {
  const card = document.createElement("div");
  const title = document.createElement("div");
  const name = document.createElement("div");
  const imageContainer = document.createElement("div");
  const img = document.createElement("img");
  const authorName = document.createElement("span");

  card.classList.add("card");
  title.classList.add("headline");
  name.classList.add("author");
  imageContainer.classList.add("img-container");

  card.appendChild(title);
  card.appendChild(name);
  name.appendChild(imageContainer);
  imageContainer.appendChild(img);
  name.appendChild(authorName);

  title.textContent = article.headline;
  authorName.textContent = article.authorName;
  img.setAttribute("src", `${article.authorPhoto}`);

  card.addEventListener("click", () => console.log(title));
  return card;
};

const cardAppender = (selector) => {
  const place = document.querySelector(selector);

  axios
    .get("http://localhost:5000/api/articles")
    .then((response) => {
      const articles = response.data.articles;
      for (const groups in articles) {
        articles[groups].forEach((entry) => place.appendChild(Card(entry)));
      }
    })
    .catch((error) => console.log(error));
};

export { Card, cardAppender };
