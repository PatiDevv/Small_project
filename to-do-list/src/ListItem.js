import React from "react";
import { TrashOutline } from "react-ionicons";
import "./ListItem.css";

const ListItem = ({ listItem, onDeleteClick }) => {
  return (
    <li className="listItem">
      <input type="checkbox"></input>
      <div className="title"> {listItem.title} </div>
      <div className="content"> {listItem.content} </div>
      <TrashOutline
        onClick={() => onDeleteClick(listItem)}
        color={"#00000"}
        height="25px"
        width="25px"
      />
    </li>
  );
};

export default ListItem;
