## Quickstart

- Clone the repo: `git clone https://github.com/utkarshg1508/sample-shadow-dom-app.git`
- Go to folder: `cd sample-shadow-dom-app`
- Install with [yarn]: `yarn install`
- Build the project with [yarn]: `yarn build`
- Serve the dist files with [yarn]: `yarn preview`



## Steps to make app render inside shadow dom
- Write a wrapper which assigns mount and unmount function to the unique app name in window object.
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


    const getStyleUrl = () => {
        return import.meta.url.split('/').slice(0, -1).join('/') + '/index.css';
    }

    const mount = (shadowRoot: ShadowRoot, props: any) => {
        // 1. Inject CSS into shadow root
        styleEl = document.createElement('link');
        styleEl.setAttribute('rel', 'stylesheet');
        styleEl.setAttribute('href', getStyleUrl());
        // Ensure the style element is scoped to the shadow DOM
        shadowRoot.appendChild(styleEl);
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

    // Extend the Window interface to include the global property for the app.
    // This allows the app to be mounted and unmounted from the BlueXP platform.
    // The app name should be unique and should not conflict with other apps in the BlueXP platform.
    declare global {
        interface Window {
            sampleShadowDomApp?: {
                mount: (shadowRoot: ShadowRoot, props: any) => void;
                unmount: () => void;
            };
        }
    }
    // Expose the mount and unmount functions globally using the unique app name and share with BlueXP platform team.
    window.sampleShadowDomApp = { mount, unmount }
```

## Build app with Vite plugin

- Vite configuration
    - The service app must make wrapper file as entry file.

```
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react-swc';
    import path from 'path';

    export default defineConfig({
    base: '/sampleShadowDomApp/',
    plugins: [react()],
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
    },
    build: {
        outDir: 'docs',
        target: 'esnext',
        lib: {
        entry: path.resolve(__dirname, 'src/shadowDomWrapper.tsx'),
        name: 'sampleShadowDomApp',
        formats: ['es'],
        fileName: 'index',
        },
        rollupOptions: {
        external: [],
        output: {
            globals: {},
            assetFileNames: 'index.css',
        }
        }
    },
    });
```

## Mandatory steps to follow

- The stylesheet should not be appended to the parent document.
- Utilize BrowserRouter from react-router-dom to set the base URL provided by the BlueXP application, which helps prevent refresh issues.
- Set the container as the root element for the BlueXP design system to prevent modals, tooltips, and dropdowns from appending to the document body.
- Assign mount and unmount function to the unique app name to the window object.
- To use this app in Netapp Internals playground, assign mount and unmount function to sampleShadowDomApp property of window object.