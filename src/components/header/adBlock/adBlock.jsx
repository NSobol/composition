import React from "react";
import s from "./adBlock.module.scss";

function AdBlock(props) {
  const { data } = props;
  return (
    <div className={s["card"]}>
      {props.children}
      <div className={s["card-body"]}>
        <h5 className={s["card-title"]}>{data.adblock.title}</h5>
        <p className={s["card-text"]}>{data.adblock.text}</p>
      </div>
    </div>
  );
}

export default AdBlock;
