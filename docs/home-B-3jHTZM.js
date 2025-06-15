import { u as d, a as c, j as e, L as s, C as t, H as a, T as r, R as h } from "./shadowDomWrapper-CNScJCMO.js";
const x = () => {
  const i = d(), l = c((o) => o.appConfig.workspaceId), n = () => {
    window.postMessage({
      type: "SERVICE-NAVIGATE",
      payload: {
        pathname: "/working-environments"
      }
    });
  };
  return /* @__PURE__ */ e.jsx(s.Container, { children: /* @__PURE__ */ e.jsxs(s.Grid, { children: [
    /* @__PURE__ */ e.jsx(s.GridItem, { children: /* @__PURE__ */ e.jsxs(
      t,
      {
        hasHoverEffect: !0,
        style: { padding: "20px", margin: "10px" },
        children: [
          /* @__PURE__ */ e.jsx(a, { level: "20", children: "Sample Shadow Dom App Details" }),
          /* @__PURE__ */ e.jsxs(r, { level: "14", children: [
            "The global property name that should be used to configure the service application in the playground is ",
            /* @__PURE__ */ e.jsx("b", { children: "sampleShadowDomApp" })
          ] }),
          /* @__PURE__ */ e.jsxs(r, { level: "14", children: [
            "The GitHub URL for this sample Shadow DOM application. ",
            /* @__PURE__ */ e.jsx("a", { target: "_blank", href: "https://github.com/utkarshg1508/sample-shadow-dom-app", children: "Click here" })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ e.jsx(s.GridItem, { children: /* @__PURE__ */ e.jsx(
      "div",
      {
        style: { cursor: "pointer" },
        onClick: () => i(h.PRODUCTS),
        children: /* @__PURE__ */ e.jsxs(
          t,
          {
            hasHoverEffect: !0,
            style: { padding: "20px", margin: "10px" },
            children: [
              /* @__PURE__ */ e.jsx(a, { level: "20", children: "Featured Products" }),
              /* @__PURE__ */ e.jsx(r, { level: "14", children: "Check out our latest arrivals and best sellers!" })
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ e.jsx(s.GridItem, { children: /* @__PURE__ */ e.jsx(
      "div",
      {
        style: { cursor: "pointer" },
        onClick: n,
        children: /* @__PURE__ */ e.jsxs(
          t,
          {
            hasHoverEffect: !0,
            style: { padding: "20px", margin: "10px" },
            children: [
              /* @__PURE__ */ e.jsx(a, { level: "20", children: "Navigate to BlueXP Canvas" }),
              /* @__PURE__ */ e.jsx(r, { level: "14", children: "Click here to test the service to BlueXP messaging!" })
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ e.jsx(s.GridItem, { children: /* @__PURE__ */ e.jsxs(
      t,
      {
        hasHoverEffect: !0,
        style: { padding: "20px", margin: "10px" },
        children: [
          /* @__PURE__ */ e.jsx(a, { level: "20", children: l }),
          /* @__PURE__ */ e.jsx(r, { level: "14", children: "Change Project on top project menu to test the BlueXP to service messaging!" })
        ]
      }
    ) })
  ] }) });
};
export {
  x as default
};
