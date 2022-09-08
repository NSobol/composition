import React from "react";
import NewsList from "./newsList/NewsList";

/**
 *
 * @param {Object} props
 * @returns вывод новостной ленты
 */

function Newsbox(props) {
  const { data } = props;
  return (
    <div className="header-newsBox">
      <NewsList news={data.news} />
    </div>
  );
}

export default Newsbox;
