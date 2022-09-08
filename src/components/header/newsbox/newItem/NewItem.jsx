import React from "react";
/**
 *
 * @param {Object} props
 * @returns Вывод элемента списка новостей
 */

function NewItem(props) {
  return (
    <li className="header-news-item">
      {props.children}
      <a href={props.url}>{props.title}</a>
    </li>
  );
}

export default NewItem;
