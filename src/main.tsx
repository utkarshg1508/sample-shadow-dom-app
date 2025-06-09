import React from 'react';
import { Provider } from 'react-redux';
import "@netapp/bxp-style/css/reset.css"
import "@netapp/bxp-design-system-react/dist/index.css"
import './index.css'
import App from './App';
import store from './store';

const SampleShadowDomModule: React.FC<any> = (
  props
) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App {...props}></App>
      </Provider>
    </React.StrictMode>
  );
};

export default SampleShadowDomModule;
