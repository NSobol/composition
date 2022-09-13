import React from "react";
import AdBlock from "./adBlock/adBlock";
import Newsbox from "./newsbox/Newsbox.jsx";

/**
 *
 * @param {Object} props
 * @returns Вывод новостного блока и блока над ошибками
 */
function Header({ dataHeader }) {
  return (
    <header>
      <Newsbox data={dataHeader} />
      <AdBlock data={dataHeader}>
        <img src={dataHeader.adblock.src} alt="" />
      </AdBlock>
    </header>
  );
}

export default Header;
