import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
body {
  margin: 0;
  padding-bottom: 37px;
  overflow-x: hidden;
  min-width: 320px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
  background-color: #E5E5E5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

html {
  box-sizing: border-box;
}

*,
*:after,
*:before {
  box-sizing: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}

ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

img {
  max-width: 100%;
}`;
