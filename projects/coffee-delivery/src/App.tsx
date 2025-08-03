import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { BrowserRouter } from "react-router-dom";
// import { Button } from "./Button";
// import { useState } from "react";
// import { Dark } from "./styles/theme/dark";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { CartContextProvider } from "./context/CartContext";

export function App() {
  // const [dark, setDark] = useState(false)

  return (
    // <ThemeProvider theme={dark ? Dark : defaultTheme}>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
        {/* <Button /> */}
        {/* <button onClick={() => setDark(!dark)}>{!dark ? "Dark" : "Light"}</button> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}
