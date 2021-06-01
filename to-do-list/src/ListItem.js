import React from "react";
import { TrashOutline } from "react-ionicons";
import "./ListItem.css";

const ListItem = ({ title, content }) => {
  return (
    <li className="listItem">
      <input type="checkbox"></input>
      <div className="title"> {title} </div>
      <div className="content"> {content} </div>
      <TrashOutline color={"#00000"} height="25px" width="25px" />
    </li>
  );
};

export default ListItem;
