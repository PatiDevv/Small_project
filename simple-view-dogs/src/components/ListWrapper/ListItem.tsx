import styled from "styled-components";

interface Props {
  name: string;
  src: string;
  description: string;
  facebookLink: string;
}

const StyledLi = styled.li`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  padding: 30px 50px;
`;

const StyledImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 30px;
`;

const StyledH2 = styled.h2`
  color: #e08283;
  font-weight: 700;
  margin: 0;
`;

const StyledP = styled.p`
  font-weight: 300;

  margin: 10px 0 25px 0;
`;

const StyledA = styled.a`
  font-weight: 400;
  background: none;
  border: 2px solid #e08283;
  color: #e08283;
  border-radius: 20px;
  padding: 5px 10px;
  text-decoration: none;
  font-size: 75%;
`;

const ListItem = ({ name, src, description, facebookLink }: Props) => (
  <StyledLi>
    <StyledImg src={src} alt={name} />
    <div>
      <StyledH2> {name}</StyledH2>
      <StyledP>{description}</StyledP>
      <StyledA href={facebookLink} target="_blank" rel="noreferrer">
        visit fb page
      </StyledA>
    </div>
  </StyledLi>
);

export default ListItem;
