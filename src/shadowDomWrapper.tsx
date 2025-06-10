import React from 'react';
import ReactDOM from 'react-dom/client';
import SampleShadowDomModule from './main';
import { setRootComponent } from '@netapp/bxp-design-system-react';

let root: ReactDOM.Root | null = null;
let styleEl: HTMLLinkElement | null = null;
let containerEl: HTMLDivElement | null = null;

const mount = (shadowRoot: ShadowRoot, props: any) => {
    // 1. Inject CSS into shadow root
    styleEl = document.createElement('link');
    styleEl.setAttribute('rel', 'stylesheet');
    styleEl.setAttribute('href', './index.css');
    shadowRoot.appendChild(styleEl);

    const fileURL = new URL("./index.css", import.meta.url);
    console.log(import.meta.url);
    console.log(fileURL);

    // 2. Create container for React root inside shadow
    containerEl = document.createElement('div');
    shadowRoot.appendChild(containerEl);
    // 3. Mount React app
    root = ReactDOM.createRoot(containerEl);
    // 4. Set container element as root component for BlueXP Design system to launch modals, dropdowns etc., append to shadow root.
    setRootComponent(containerEl);
    // 5. Reder the root component inside shadowRoot
    root.render(<SampleShadowDomModule {...props} />);
}

const unmount = () => {
    // 1. Unmount app
    if (root) {
        root.unmount();
        root = null;
    }
    // 2. Remove container elements from shadow root
    if (containerEl && containerEl.parentNode) {
        containerEl.parentNode.removeChild(containerEl);
        containerEl = null;
    }
    // 3. Remove style elements from shadow root
    if (styleEl && styleEl.parentNode) {
        styleEl.parentNode.removeChild(styleEl);
        styleEl = null;
    }
}

export { mount, unmount }