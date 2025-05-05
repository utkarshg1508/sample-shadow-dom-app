import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import "@netapp/bxp-style/css/reset.css"
import "@netapp/bxp-design-system-react/dist/index.css"
import './index.css'
import App from './App';
import store from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
