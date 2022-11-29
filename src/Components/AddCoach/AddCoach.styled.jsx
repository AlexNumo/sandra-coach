import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px solid;
  width: 350px;
  margin: 10px 10px 10px 10px;
  padding: 10px 10px 10px 10px;
  background-color: #eabfed;
`;

const BTNSubmit = styled.button`
  background-color: #78789e;
  color: #1a1818;
  width: 150px;
`;

const ERROR = styled.div`
  background-color: red;
  border: 1px solid;
  width: 100%;
  height: 20px;
  display: flex;
  position: relative;
`;

const CoachWrapper = styled.div`
  border: 1px solid;
  margin-top: 5px;
`;

const LinkStyle = styled.a`
    margin-left: 8px;
`;

const ImageIcon = styled.img`
    width: 15px;
    margin-right: 5px;
`;

const BTN = styled.button`
  display: block;
  border-radius: 22px;
  padding: 2px;
  background-color: #878bad;
  margin: 5px;
`;

export {
  Wrapper,
  BTNSubmit,
  ERROR,
  CoachWrapper,
  LinkStyle,
  ImageIcon,
  BTN
};