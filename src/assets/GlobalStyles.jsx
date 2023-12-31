import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html,
body {
  height: 100%;
}

html {
  scroll-behavior: smooth;
}

#root {
  isolation: isolate;
  /* Primary Colors */
  --verdant-green: #2c5f2d;
  --yellow-accent: #ffe77a;

  /* Additional Colors */
  --background-color: #faf3e0;
  --primary-text: #444444;
  --secondary-text: #777777;
  --accent-teal: #a8d5ba;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background-color: var(--background-color);
  color: var(--primary-text);
  font-family: "Merriweather", sans-serif;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "League Spartan", sans-serif;
  color: var(--verdant-green);
 
}

p {
  color: #444;
}

:focus {
  outline: 2px solid var(--verdant-green);
}

a {
  text-decoration: none;
  color: var(--verdant-green);
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: var(--accent-teal);
  }
}

`;

export default GlobalStyle;
