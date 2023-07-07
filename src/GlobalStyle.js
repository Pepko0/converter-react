import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 html { 
  box-sizing: border-box;
}   

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  font-family: 'Roboto', sans-serif;
  background-image: url("https://i.postimg.cc/jqngJGVW/background.jpg");
  background-size: 430px;
  background-position: center;
  background-repeat: inherit;
}
`;