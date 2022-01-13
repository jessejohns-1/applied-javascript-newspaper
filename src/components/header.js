const Header = (title, date, temp) => {
  //creating elements
  const header = document.createElement("div");
  const headerDate = document.createElement("span");
  const headerTitle = document.createElement("h1");
  const headerTemp = document.createElement("span");
  //setting class names, attributes etc
  header.classList.add("header");
  headerDate.classList.add("date");
  headerTemp.classList.add("temp");
  //creating the hierrarchy
  header.appendChild(headerDate);
  header.appendChild(headerTitle);
  header.appendChild(headerTemp);
  //addomt text content
  headerDate.textContent = date;
  headerTitle.textContent = title;
  headerTemp.textContent = temp;

  return header;
};

const headerAppender = (selector) => {
  const place = document.querySelector(selector);
  // Header("Lambda Newspaper","The date:", "theTemp")
  place.appendChild(Header("Lambda Newspaper", "The date:", "theTemp"));
};

export { Header, headerAppender };
