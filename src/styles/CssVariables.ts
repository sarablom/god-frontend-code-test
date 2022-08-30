import { createGlobalStyle } from "styled-components";

export const CssVariables = createGlobalStyle`
  :root {
    // Colors
    --color-primary: #FA7978;
    --color-secondary: hsla(0, 0%, 35%, 1.0);
    --color-blackish: #4B4B4B;
    --color-whiteish: #FCFCFC;
    --color-error: #EF5D80;
    --color-warning: #efa35d;
    --color-success: hsla(190, 22%, 46%, 1.0);

    // Font sizes
    --font-size-s: clamp(0.8rem, 0.18vw + 0.66rem, 0.9rem);
    --font-size-base: clamp(0.88rem, 0.34vw + 0.79rem, 1.06rem);
    --font-size-m: clamp(1.09rem, 0.59vw + 0.95rem, 1.42rem);
    --font-size-l: clamp(1.37rem, 0.95vw + 1.13rem, 1.7rem);
    --font-size-xl: clamp(1.71rem, 1.47vw + 1.34rem, 2.2rem);
    --font-size-xxl: clamp(2.14rem, 2.22vw + 1.58rem, 2.8rem);
    --font-size-xxxl: clamp(2.67rem, 3.28vw + 1.85rem, 4rem);
    
    // Max content size
    --max-width: 100rem;
  }
`;