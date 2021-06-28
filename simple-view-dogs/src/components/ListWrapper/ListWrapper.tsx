import ListItem from "./ListItem";
import { DogsList } from "../../data/DogsList";
import Heading from "../Heading/Heading";
import styled from "styled-components";

const StyledUl = styled.ul`
  width: 80vw;
  margin: 50px 0;
`;

const ListWrapper = () => {
  return (
    <>
      <Heading>Rasy psów</Heading>
      <StyledUl>
        {DogsList.map((item) => (
          <ListItem key={item.name} {...item} />
        ))}
      </StyledUl>
    </>
  );
};

export default ListWrapper;
