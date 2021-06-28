import styled, { keyframes } from "styled-components";
import { bounce, fadeInDown } from "react-animations";

const Heading = styled.h1`
  color: #e08283;
  font-weight: 700;
  margin: 40px 0 0 270px;
  animation: 1s ${keyframes`${fadeInDown}`};
`;

export default Heading;
