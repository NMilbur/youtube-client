import { CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./views/Home";
import { DARK_THEME } from "constants/styles";

function App() {
  return (
    <ThemeProvider theme={DARK_THEME}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
