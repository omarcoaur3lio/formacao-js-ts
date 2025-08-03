import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./Rauter";
import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from "./contexts/SearchContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <SearchProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </SearchProvider>
    </ThemeProvider>
  );
}
