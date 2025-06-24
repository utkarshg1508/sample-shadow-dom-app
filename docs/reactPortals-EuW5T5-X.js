import { j as e, L as t, T as s, f as r, B as a, P as i, S as n, g as d, r as c, M as x, h as p, i as h, k as m, l as u, F as j } from "./shadowDomWrapper-fnAZplbS.js";
const b = () => /* @__PURE__ */ e.jsxs("div", { children: [
  /* @__PURE__ */ e.jsx(i, { children: "Some text for my popover" }),
  /* @__PURE__ */ e.jsx(n, { children: "Some text. Some text." })
] }), C = () => /* @__PURE__ */ e.jsxs("div", { children: [
  /* @__PURE__ */ e.jsx(s, { children: "I am some div that will have tooltip on hover" }),
  /* @__PURE__ */ e.jsx(d, { children: "Some text for my popover - too much text wraps around, tooltip content breaks by default at 320px" })
] }), v = () => {
  const [o, l] = c.useState(!1);
  return o ? /* @__PURE__ */ e.jsxs(x, { children: [
    /* @__PURE__ */ e.jsx(p, { children: "Modal header" }),
    /* @__PURE__ */ e.jsx(h, { children: "I am a modal with one button in the footer" }),
    /* @__PURE__ */ e.jsx(m, { children: /* @__PURE__ */ e.jsx(a, { onClick: () => l(!1), children: "Cancel" }) })
  ] }) : /* @__PURE__ */ e.jsx(a, { onClick: () => {
    l(!0);
  }, children: "Open" });
}, y = () => {
  const o = u({ name: "" }), l = [
    { label: "Label all alone", value: 1 },
    { label: "Label with sub-label: ", value: 2, subLabel: "I'm the sub-label" },
    { label: "Label with tag", value: 7, tag: "Some Tag Text" },
    { label: "Label with secondary label", value: 3, secondaryLabel: "Secondary Label" },
    { label: "Label with tooltip", value: 4, tooltip: "tool tip" },
    { label: "Disabled Option", value: 5, isDisabled: !0 },
    { label: "Disabled Option with tooltip", value: 6, isDisabled: !0, tooltip: "tool tip" }
  ];
  return /* @__PURE__ */ e.jsx(
    j,
    {
      label: "Account",
      name: "name",
      form: o,
      options: l
    }
  );
}, S = () => {
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
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(b, {}) }),
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(C, {}) }),
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(v, {}) }),
    /* @__PURE__ */ e.jsxs(t.GridItem, { children: [
      /* @__PURE__ */ e.jsx(s, { children: "Copy this text" }),
      /* @__PURE__ */ e.jsx(r, { variant: "square", color: "secondary", text: "Copy this text", children: "Copy" })
    ] }),
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(y, {}) }),
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(a, { variant: "primary", onClick: () => o(), children: "Click to trigger notification" }) })
  ] }) }) }) }) });
};
export {
  S as default
};
