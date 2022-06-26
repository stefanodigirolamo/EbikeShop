import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Hp, Pdp } from "./routes";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils";
import { Header } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Hp />} />
            <Route path="/pdp/:id" element={<Pdp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
