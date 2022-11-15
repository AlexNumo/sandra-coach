import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const LinkStyle = styled(NavLink)`
  font-family: 'Times New Roman', Times, serif;
  font-size: 25px;
  font-weight: 400;
  width: 100%;
  display: flex;
  justify-content: center;

`;

export {
  Wrapper,
  LinkStyle
};