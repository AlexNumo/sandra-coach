import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@media screen and (max-width: 767px) {
  .hideOnMobile {
    display: none !important;
  }
}

@media screen and (min-width: 768px) {
  .showOnMobile {
    display: none !important;
  }
}

:root {
  --main-text-color: #212121;
  --secondary-text-color: #9B9FAA;
  --white: #ffffff;
  --blue-txt-color: #264061;
  --accent-color: #FC842D;
  --accent-shadow: rgba(252, 132, 45, 0.5);
  --secondary-background-color: #F0F1F3;
  --border-color: #e0e0e0;
  --timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  --trans-duration: 250ms;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}


body {
  min-height: 100%;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 400;
  font-style: normal;  
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
}



body,
h1,
h2,
h3,
p,
ul,
li
 {
  margin: 0;
}


ul{
  list-style: none;
    padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

input,
button {
  font: inherit;
  background-color: inherit;
  padding: 0;
  margin: 0;
}


input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type=number]{
    -moz-appearance: textfield;
}

.monday {
  background-color: #b3ffb3;
}

.tuesday {
  background-color: #ffb3d9;
}

.wednesday {
  background-color: #ff00ff;
}

.thursday {
  background-color: #b3d9ff;
}

.friday {
  background-color: #e6b3b3;
}

.saturday {
  background-color: #ffb3ff;
}

.sunday {
  background-color: #99ffff;
}

.time{
  background-color: #8080ff;
  margin-right: 10px;
  width: 50px;
}

.select{
  background-color: inherit;
  width: 100%;
}
`;

export default GlobalStyle;
