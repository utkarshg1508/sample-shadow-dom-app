import { u as x, a as g, j as e, L as s, C as n, H as r, T as t, R as A } from "./shadowDomWrapper-fnAZplbS.js";
const m = () => {
  const i = x(), l = g((a) => a.appConfig.workspaceId), o = performance.now(), c = () => {
    window.postMessage({
      type: "SERVICE-NAVIGATE",
      payload: {
        pathname: "/working-environments"
      }
    });
  }, d = () => {
    window.postMessage({
      type: "SERVICE-SHADOW-DOM-GA",
      payload: {
        type: "trackEvent",
        details: { category: "SAMPLE_APP_TRACK_EVENT", action: "NAVIGATE_TO_CANVAS", label: "TRACK_OPEN_CANVAS", value: "Passed" }
      }
    });
  }, p = () => {
    window.postMessage({
      type: "SERVICE-SHADOW-DOM-GA",
      payload: {
        type: "trackExternalLink",
        details: { category: "SAMPLE_APP_TRACK_EXTERNAL_LINK", label: "TRACK_OPEN_GITHUB_LINK" }
      }
    });
  }, h = () => {
    const a = performance.now();
    window.postMessage({
      type: "SERVICE-SHADOW-DOM-GA",
      payload: {
        type: "trackTiming",
        details: { category: "SAMPLE_APP_TRACK_TIMING", name: "PREVIOUS_PAGE_LOAD_TIME", value: a - o }
      }
    });
  };
  return /* @__PURE__ */ e.jsx(s.Container, { children: /* @__PURE__ */ e.jsxs(s.Grid, { children: [
    /* @__PURE__ */ e.jsx(s.GridItem, { children: /* @__PURE__ */ e.jsxs(
      n,
      {
        hasHoverEffect: !0,
        style: { padding: "20px", margin: "10px" },
        children: [
          /* @__PURE__ */ e.jsx(r, { level: "20", children: "Sample Shadow Dom App Details" }),
          /* @__PURE__ */ e.jsxs(t, { level: "14", children: [
            "The global property name that should be used to configure the service application in the playground is ",
            /* @__PURE__ */ e.jsx("b", { children: "sampleShadowDomApp" })
          ] }),
          /* @__PURE__ */ e.jsxs(t, { level: "14", children: [
            "The GitHub URL for this sample Shadow DOM application. ",
            /* @__PURE__ */ e.jsx("a", { target: "_blank", href: "https://github.com/utkarshg1508/sample-shadow-dom-app", onClick: (a) => p(), children: "Click here" })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ e.jsx(s.GridItem, { children: /* @__PURE__ */ e.jsx(
      "div",
      {
        style: { cursor: "pointer" },
        onClick: () => {
          c(), d(), h();
        },
        children: /* @__PURE__ */ e.jsxs(
          n,
          {
            hasHoverEffect: !0,
            style: { padding: "20px", margin: "10px" },
            children: [
              /* @__PURE__ */ e.jsx(r, { level: "20", children: "Navigate to BlueXP Canvas" }),
              /* @__PURE__ */ e.jsx(t, { level: "14", children: "Click here to test the service to BlueXP messaging!" })
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ e.jsx(s.GridItem, { children: /* @__PURE__ */ e.jsxs(
      n,
      {
        hasHoverEffect: !0,
        style: { padding: "20px", margin: "10px" },
        children: [
          /* @__PURE__ */ e.jsx(r, { level: "20", children: l }),
          /* @__PURE__ */ e.jsx(t, { level: "14", children: "Change Project on top project menu to test the BlueXP to service messaging!" })
        ]
      }
    ) }),
    /* @__PURE__ */ e.jsx(s.GridItem, { children: /* @__PURE__ */ e.jsx(
      "div",
      {
        style: { cursor: "pointer" },
        onClick: () => i(A.PRODUCTS),
        children: /* @__PURE__ */ e.jsxs(
          n,
          {
            hasHoverEffect: !0,
            style: { padding: "20px", margin: "10px" },
            children: [
              /* @__PURE__ */ e.jsx(r, { level: "20", children: "Featured Products" }),
              /* @__PURE__ */ e.jsx(t, { level: "14", children: "Check out our latest arrivals and best sellers!" })
            ]
          }
        )
      }
    ) })
  ] }) });
};
export {
  m as default
};
