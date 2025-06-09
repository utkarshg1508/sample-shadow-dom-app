import { useSelector } from "react-redux";
import { Layout, MainLoader, ThemeProvider } from "@netapp/bxp-design-system-react";
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import './App.css';
import { RootState } from "./store";
import Header from "./components/header";
import { ROUTES } from "./constants/routes";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "./store/themeSlice";
import { setAppConfig } from "./store/appConfig";

// Lazily import the component
const Home = lazy(() => import('./pages/home'));
const Products = lazy(() => import('./pages/products'));
const ReactPortals = lazy(() => import('./pages/reactPortals'));

export enum MESSAGE_EVENTS {
  WORKSPACE_CHANGE = 'SERVICE:WORKSPACE-CHANGE',
  TOKEN_UPDATE = 'TOKEN-UPDATE',
  SERVICE_NAVIGATION = 'SERVICE-NAVIGATE',
  LOCATION_CHANGE = 'SERVICE:LOCATION-CHANGE',
}

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

function App(props: any) {
    const isDarkTheme = useSelector((state: RootState) => state.theme.isDarkTheme);
    const appConfig = useSelector((state: RootState) => state.appConfig);
    const dispatch = useDispatch();

    useEffect(() => {
        if (props) {
            dispatch(toggleTheme({isDarkTheme: props.theme}));
            dispatch(setAppConfig({ 
                baseUrl: props.baseUrl,
                workspaceId: props.workspaceId,
                workspaceName: props.workspaceName,
            }));
        }
    }, [props])

    useEffect(() => {
        const handleKmsMfeMessage = (ev: MessageEvent) => {
            const { type, payload } = ev.data;
            switch (type) {
                case MESSAGE_EVENTS.WORKSPACE_CHANGE:
                    console.log('Workspace changed:', payload);
                    dispatch(setAppConfig({ 
                        workspaceId: payload.workspaceId,
                        workspaceName: appConfig.workspaceName,
                        baseUrl: appConfig.baseUrl, // Fallback to props.baseUrl if not provided
                    }));
                    break;
                case MESSAGE_EVENTS.TOKEN_UPDATE:
                    console.log('Token updated:', payload);
                    break;
                case MESSAGE_EVENTS.LOCATION_CHANGE:
                    console.log('Location changed:', payload);
                    break;
                case MESSAGE_EVENTS.SERVICE_NAVIGATION:
                    console.log('Service navigation:', payload);
                    break;
            }
        };
        window.addEventListener('message', handleKmsMfeMessage);

        return () => {
            window.removeEventListener('message', handleKmsMfeMessage);
        };
    }, []);

    return (
        <ThemeProvider theme={isDarkTheme} isRoot={true} className="theme-provider">
            <BrowserRouter basename={props.baseUrl}>
                <Routes>
                    <Route path={ROUTES.HOME} element={
                        <Suspense fallback={<MainLoader />}>
                            {CreatePage(Home)(props)}
                        </Suspense>
                    }
                    />
                    <Route path={ROUTES.PRODUCTS} element={
                        <Suspense fallback={<MainLoader />}>
                            {CreatePage(Products)(props)}
                        </Suspense>
                    }
                    />
                    <Route path={ROUTES.REACT_PORTALS} element={
                        <Suspense fallback={<MainLoader />}>
                            {CreatePage(ReactPortals)(props)}
                        </Suspense>
                    }
                    />
                    <Route path="/" element={<Navigate to={ROUTES.HOME} replace />} />
                    <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
