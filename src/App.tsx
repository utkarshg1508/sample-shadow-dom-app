import { useSelector } from "react-redux";
import { Layout, ThemeProvider } from "@netapp/bxp-design-system-react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import { RootState } from "./store";
import Products from './pages/products';
import Header from "./components/header";
import { ROUTES } from "./constants/routes";
import ReactPortals from "./pages/reactPortals";

const CreatePage = (WrappedComponent: React.ComponentType<any>) => {
    return (props: any) => {
        return (
            <Layout.Page>
                <Layout.Content>
                    <Header />
                    <WrappedComponent {...props} />
                </Layout.Content>
            </Layout.Page>
        );
    };
};

function App() {
    const isDarkTheme = useSelector((state: RootState) => state.theme.isDarkTheme);

    return (
        <ThemeProvider theme={isDarkTheme ? "dark" : "light"} isRoot={true} className="theme-provider">
            < Router >
                <Routes>
                    <Route path={ROUTES.HOME} element={CreatePage(Home)({})} />
                    <Route path={ROUTES.PRODUCTS} element={CreatePage(Products)({})} />
                    <Route path={ROUTES.REACT_PORTALS} element={CreatePage(ReactPortals)({})} />
                    <Route path="/" element={<Navigate to={ROUTES.HOME} replace />} />
                    <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
                </Routes>
            </Router >
        </ThemeProvider>
    );
}

export default App;
