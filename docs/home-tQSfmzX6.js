import { u as d, a as c, j as e, L as s, C as r, H as t, T as n, R as x } from "./shadowDomWrapper-Ds6925-K.js";
const p = () => {
  const a = d(), i = c((o) => o.appConfig.workspaceId), l = () => {
    window.postMessage({
      type: "SERVICE-NAVIGATE",
      payload: {
        pathname: "/working-environments"
      }
    });
  };
  return /* @__PURE__ */ e.jsx(s.Container, { children: /* @__PURE__ */ e.jsxs(s.Grid, { children: [
    /* @__PURE__ */ e.jsx(s.GridItem, { children: /* @__PURE__ */ e.jsx(
      "div",
      {
        style: { cursor: "pointer" },
        onClick: () => a(x.PRODUCTS),
        children: /* @__PURE__ */ e.jsxs(
          r,
          {
            hasHoverEffect: !0,
            style: { padding: "20px", margin: "10px" },
            children: [
              /* @__PURE__ */ e.jsx(t, { level: "20", children: "Featured Products" }),
              /* @__PURE__ */ e.jsx(n, { level: "14", children: "Check out our latest arrivals and best sellers!" })
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ e.jsx(s.GridItem, { children: /* @__PURE__ */ e.jsx(
      "div",
      {
        style: { cursor: "pointer" },
        onClick: l,
        children: /* @__PURE__ */ e.jsxs(
          r,
          {
            hasHoverEffect: !0,
            style: { padding: "20px", margin: "10px" },
            children: [
              /* @__PURE__ */ e.jsx(t, { level: "20", children: "Navigate to BlueXP Canvas" }),
              /* @__PURE__ */ e.jsx(n, { level: "14", children: "Click here to test the service to BlueXP messaging!" })
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ e.jsx(s.GridItem, { children: /* @__PURE__ */ e.jsxs(
      r,
      {
        hasHoverEffect: !0,
        style: { padding: "20px", margin: "10px" },
        children: [
          /* @__PURE__ */ e.jsx(t, { level: "20", children: i }),
          /* @__PURE__ */ e.jsx(n, { level: "14", children: "Change Project on top project menu to test the BlueXP to service messaging!" })
        ]
      }
    ) })
  ] }) });
};
export {
  p as default
};
