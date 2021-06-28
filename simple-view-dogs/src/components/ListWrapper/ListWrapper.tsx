import ListItem from "./ListItem";
import { DogsList } from "../../data/DogsList";
import Heading from "../Heading/Heading";
import styled from "styled-components";
import Anime from "react-anime";

const StyledUl = styled.ul`
  width: 80vw;
  margin: 50px 0;
`;

const ListWrapper = () => {
  return (
    <>
      <Heading>Rasy psów</Heading>
      <StyledUl>
        <Anime
          delay={(a, i, c) => 200 + i! * 100}
          translateX={[-150, 0]}
          opacity={[0, 1]}
        >
          {DogsList.map((item) => (
            <ListItem key={item.name} {...item} />
          ))}
        </Anime>
      </StyledUl>
    </>
  );
};

export default ListWrapper;
