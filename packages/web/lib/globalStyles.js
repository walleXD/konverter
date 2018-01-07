import { injectGlobal } from "styled-components"

export default () => {
  // Simple style reset
  injectGlobal`
    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    html {
      font-size: 62.5%;
    }

    body {
      box-sizing: border-box;
    }
  `
}