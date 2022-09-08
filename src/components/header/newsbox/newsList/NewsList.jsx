import React from "react";
import NewItem from "../newItem/NewItem.jsx";

/**
 *
 * @param {Array} props
 * @returns Вывод списка новостей
 */

function NewsList({ news }) {
  return (
    <ul>
      {news.map((news, index) => (
        <NewItem key={index} url={news.url} title={news.title}>
          <img src={news.src} alt="" />
        </NewItem>
      ))}
    </ul>
  );
}

export default NewsList;
