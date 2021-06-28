import React from "react";
import ListItem from "./ListItem/ListItem";
import "../ListWrapper/ListWrapper.css";
import { DogsList } from "../../data/DogsList";
import Heading from "../Heading/Heading";

const ListWrapper = () => {
  return (
    <>
      <Heading />
      <ul className="listWrapper__wrapper">
        {DogsList.map((item) => (
          <ListItem key={item.name} {...item} />
        ))}
      </ul>
    </>
  );
};

export default ListWrapper;
