import { j as e, L as t, g as x, f as u, T as r, h, B as a, P as j, S as b, i as v, r as y, k as s, M as C, l as I, m as S, F as d, n as f } from "./shadowDomWrapper-DLSBpWES.js";
const g = () => /* @__PURE__ */ e.jsxs("div", { children: [
  /* @__PURE__ */ e.jsx(j, { children: "Some text for my popover" }),
  /* @__PURE__ */ e.jsx(b, { children: "Some text. Some text." })
] }), O = () => /* @__PURE__ */ e.jsxs("div", { children: [
  /* @__PURE__ */ e.jsx(r, { children: "I am some div that will have tooltip on hover" }),
  /* @__PURE__ */ e.jsx(v, { children: "Some text for my popover - too much text wraps around, tooltip content breaks by default at 320px" })
] }), n = ({ environmentType: o, environment: l }) => {
  const [c, i] = y.useState(!1), m = s({ name: "" }), p = [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
    { label: "Option 4", value: 4 },
    { label: "Option 5", value: 5 },
    { label: "Option 6", value: 6 },
    { label: "Option 7", value: 7 }
  ];
  return c ? /* @__PURE__ */ e.jsxs(C, { children: [
    /* @__PURE__ */ e.jsx(I, { children: "Modal header" }),
    /* @__PURE__ */ e.jsx(S, { style: { overflow: "hidden" }, children: /* @__PURE__ */ e.jsx(
      d,
      {
        label: "Account",
        name: "name",
        form: m,
        options: p,
        menuPortalTarget: l
      }
    ) }),
    /* @__PURE__ */ e.jsx(f, { children: /* @__PURE__ */ e.jsx(a, { onClick: () => i(!1), children: "Cancel" }) })
  ] }) : /* @__PURE__ */ e.jsxs(a, { onClick: () => {
    i(!0);
  }, children: [
    o,
    " Open"
  ] });
}, T = () => {
  const o = s({ name: "" }), l = [
    { label: "Label all alone", value: 1 },
    { label: "Label with sub-label: ", value: 2, subLabel: "I'm the sub-label" },
    { label: "Label with tag", value: 7, tag: "Some Tag Text" },
    { label: "Label with secondary label", value: 3, secondaryLabel: "Secondary Label" },
    { label: "Label with tooltip", value: 4, tooltip: "tool tip" },
    { label: "Disabled Option", value: 5, isDisabled: !0 },
    { label: "Disabled Option with tooltip", value: 6, isDisabled: !0, tooltip: "tool tip" }
  ];
  return /* @__PURE__ */ e.jsx(
    d,
    {
      label: "Account",
      name: "name",
      form: o,
      options: l
    }
  );
}, w = () => {
  const o = () => {
    window.postMessage({
      type: "SERVICE:NOTIFICATION",
      payload: {
        message: "Dummy notification to BlueXP",
        type: "NOTIFICATIONS:SUCCESS"
      }
    });
  };
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(t.Page, { children: /* @__PURE__ */ e.jsx(t.Content, { children: /* @__PURE__ */ e.jsx(t.Container, { children: /* @__PURE__ */ e.jsxs(t.Grid, { centerContent: !0, rowGap: "md", children: [
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(g, {}) }),
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(O, {}) }),
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(n, { environmentType: "Document Body", environment: document.body }) }),
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(n, { environmentType: "Document Head", environment: document.head }) }),
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(n, { environmentType: "Get root component", environment: x() }) }),
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(n, { environmentType: "Get style component", environment: u() }) }),
    /* @__PURE__ */ e.jsxs(t.GridItem, { children: [
      /* @__PURE__ */ e.jsx(r, { children: "Copy this text" }),
      /* @__PURE__ */ e.jsx(h, { variant: "square", color: "secondary", text: "Copy this text", children: "Copy" })
    ] }),
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(T, {}) }),
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(a, { variant: "primary", onClick: () => o(), children: "Click to trigger notification" }) })
  ] }) }) }) }) });
};
export {
  w as default
};
