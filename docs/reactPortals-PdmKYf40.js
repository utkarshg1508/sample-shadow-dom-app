import { r as s, j as e, L as t, T as i, f as r, B as a, N as n, P as c, S as d, g as x, M as h, h as m, i as p, k as u, l as j, F as b } from "./shadowDomWrapper-CSEPnaH5.js";
const f = () => /* @__PURE__ */ e.jsxs("div", { children: [
  /* @__PURE__ */ e.jsx(c, { children: "Some text for my popover" }),
  /* @__PURE__ */ e.jsx(d, { children: "Some text. Some text." })
] }), v = () => /* @__PURE__ */ e.jsxs("div", { children: [
  /* @__PURE__ */ e.jsx(i, { children: "I am some div that will have tooltip on hover" }),
  /* @__PURE__ */ e.jsx(x, { children: "Some text for my popover - too much text wraps around, tooltip content breaks by default at 320px" })
] }), C = () => {
  const [l, o] = s.useState(!1);
  return l ? /* @__PURE__ */ e.jsxs(h, { children: [
    /* @__PURE__ */ e.jsx(m, { children: "Modal header" }),
    /* @__PURE__ */ e.jsx(p, { children: "I am a modal with one button in the footer" }),
    /* @__PURE__ */ e.jsx(u, { children: /* @__PURE__ */ e.jsx(a, { onClick: () => o(!1), children: "Cancel" }) })
  ] }) : /* @__PURE__ */ e.jsx(a, { onClick: () => {
    o(!0);
  }, children: "Open" });
}, y = () => {
  const l = j({ name: "" }), o = [
    { label: "Label all alone", value: 1 },
    { label: "Label with sub-label: ", value: 2, subLabel: "I'm the sub-label" },
    { label: "Label with tag", value: 7, tag: "Some Tag Text" },
    { label: "Label with secondary label", value: 3, secondaryLabel: "Secondary Label" },
    { label: "Label with tooltip", value: 4, tooltip: "tool tip" },
    { label: "Disabled Option", value: 5, isDisabled: !0 },
    { label: "Disabled Option with tooltip", value: 6, isDisabled: !0, tooltip: "tool tip" }
  ];
  return /* @__PURE__ */ e.jsx(
    b,
    {
      label: "Account",
      name: "name",
      form: l,
      options: o
    }
  );
}, w = () => {
  const [l, o] = s.useState(!1);
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(t.Page, { children: /* @__PURE__ */ e.jsx(t.Content, { children: /* @__PURE__ */ e.jsx(t.Container, { children: /* @__PURE__ */ e.jsxs(t.Grid, { centerContent: !0, rowGap: "md", children: [
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(f, {}) }),
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(v, {}) }),
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(C, {}) }),
    /* @__PURE__ */ e.jsxs(t.GridItem, { children: [
      /* @__PURE__ */ e.jsx(i, { children: "Copy this text" }),
      /* @__PURE__ */ e.jsx(r, { variant: "square", color: "secondary", text: "Copy this text", children: "Copy" })
    ] }),
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(y, {}) }),
    /* @__PURE__ */ e.jsxs(t.GridItem, { children: [
      /* @__PURE__ */ e.jsx(a, { variant: "primary", onClick: () => o(!0), children: "Click to trigger notification" }),
      l && /* @__PURE__ */ e.jsx(n, { type: "info", moreInfo: "Here is some more info", onClose: () => o(!1), children: "Here is some information" })
    ] })
  ] }) }) }) }) });
};
export {
  w as default
};
