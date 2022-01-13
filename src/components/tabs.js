import axios from "axios";

const Tabs = (topics) => {
  const tabs = document.createElement("div");
  tabs.classList.add("topics");
  topics.forEach((topic) => {
    const tab = document.createElement("div");
    tab.classList.add("tab");
    tab.textContent = topic;
    tabs.appendChild(tab);
  });
  return tabs;
};

const tabsAppender = (selector) => {
  const enteryPoint = document.querySelector(selector);

  axios.get("http://localhost:5000/api/topics").then((response) => {
    console.log(response.data);
    const word = Tabs(response.data.topics);
    enteryPoint.appendChild(word);
  });
};

export { Tabs, tabsAppender };
