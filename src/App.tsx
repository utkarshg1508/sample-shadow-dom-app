import { StrictMode, useState } from "react";
import { ThemeProvider } from "@netapp/bxp-design-system-react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Products from './pages/products';
import Header from "./components/header";
import { ROUTES } from "./constants/routes";

function App() {
  const [isDarkTheme] = useState(false);
  return (
    <StrictMode>
      <ThemeProvider theme={isDarkTheme ? "dark" : "light"} isRoot={true}>
        <Router>
          <Header />
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.PRODUCTS} element={<Products />} />
            <Route path="/" element={<Navigate to={ROUTES.HOME} replace />} />
            <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;
