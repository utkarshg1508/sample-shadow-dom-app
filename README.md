## Quickstart

- Clone the repo: `git clone https://github.com/utkarshg1508/sample-shadow-dom-app.git`
- Go to folder: `cd sample-shadow-dom-app`
- Install with [yarn]: `yarn install`
- Build the project with [yarn]: `yarn build`
- Serve the dist files with [yarn]: `yarn preview`



## Steps to make app render inside shadow dom
- Write a wrapper which exports mount and unmount function
- Mounting service app:
    - A shadow root will be created in BlueXP CMUI, along with the parameters needed for application initialization, and this will be passed to the mount function.
    - The service app must import the required styles and link them as a stylesheet inside the shadow root. Note that the stylesheet should not be appended to the parent document.
    - The service app must create a container `<div>` and append it as a sibling to the stylesheet link.
    - The service app must render the root module inside the container and pass the necessary props to the module.

- Unmounting service app:
    - The service app must call the unmount function on the create root element.
    - The service app must remove the container element and style element from shadow root.

```
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
        styleEl.setAttribute('href', 'http://localhost:4173/sampleShadowDomApp/index.css');
        shadowRoot.appendChild(styleEl);
        // 2. Create container for React root inside shadow
        containerEl = document.createElement('div');
        shadowRoot.appendChild(containerEl);
        // 3. Mount React app
        root = ReactDOM.createRoot(containerEl);
        setRootComponent(containerEl);
        // 4. Reder the root component inside shadowRoot
        root.render(<SampleShadowDomModule {...props} />);
    }

    const unmount = () => {
        // 1. Unmount Keystone app
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
```