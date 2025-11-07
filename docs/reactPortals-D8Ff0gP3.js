import { j as e, L as t, T as n, f as d, B as a, P as p, S as x, g as u, r as m, h as s, M as h, i as b, k as j, F as i, l as v } from "./shadowDomWrapper-BLkv1n6e.js";
const C = () => /* @__PURE__ */ e.jsxs("div", { children: [
  /* @__PURE__ */ e.jsx(p, { children: "Some text for my popover" }),
  /* @__PURE__ */ e.jsx(x, { children: "Some text. Some text." })
] }), y = () => /* @__PURE__ */ e.jsxs("div", { children: [
  /* @__PURE__ */ e.jsx(n, { children: "I am some div that will have tooltip on hover" }),
  /* @__PURE__ */ e.jsx(u, { children: "Some text for my popover - too much text wraps around, tooltip content breaks by default at 320px" })
] }), f = () => {
  const [l, o] = m.useState(!1), r = s({ name: "" }), c = [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
    { label: "Option 4", value: 4 },
    { label: "Option 5", value: 5 },
    { label: "Option 6", value: 6 },
    { label: "Option 7", value: 7 }
  ];
  return l ? /* @__PURE__ */ e.jsxs(h, { children: [
    /* @__PURE__ */ e.jsx(b, { children: "Modal header" }),
    /* @__PURE__ */ e.jsx(j, { style: { overflow: "hidden" }, children: /* @__PURE__ */ e.jsx(
      i,
      {
        label: "Account",
        name: "name",
        form: r,
        options: c,
        menuPortalTarget: document.body
      }
    ) }),
    /* @__PURE__ */ e.jsx(v, { children: /* @__PURE__ */ e.jsx(a, { onClick: () => o(!1), children: "Cancel" }) })
  ] }) : /* @__PURE__ */ e.jsx(a, { onClick: () => {
    o(!0);
  }, children: "Open" });
}, I = () => {
  const l = s({ name: "" }), o = [
    { label: "Label all alone", value: 1 },
    { label: "Label with sub-label: ", value: 2, subLabel: "I'm the sub-label" },
    { label: "Label with tag", value: 7, tag: "Some Tag Text" },
    { label: "Label with secondary label", value: 3, secondaryLabel: "Secondary Label" },
    { label: "Label with tooltip", value: 4, tooltip: "tool tip" },
    { label: "Disabled Option", value: 5, isDisabled: !0 },
    { label: "Disabled Option with tooltip", value: 6, isDisabled: !0, tooltip: "tool tip" }
  ];
  return /* @__PURE__ */ e.jsx(
    i,
    {
      label: "Account",
      name: "name",
      form: l,
      options: o
    }
  );
}, S = () => {
  const l = () => {
    window.postMessage({
      type: "SERVICE:NOTIFICATION",
      payload: {
        message: "Dummy notification to BlueXP",
        type: "NOTIFICATIONS:SUCCESS"
      }
    });
  };
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(t.Page, { children: /* @__PURE__ */ e.jsx(t.Content, { children: /* @__PURE__ */ e.jsx(t.Container, { children: /* @__PURE__ */ e.jsxs(t.Grid, { centerContent: !0, rowGap: "md", children: [
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(C, {}) }),
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(y, {}) }),
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(f, {}) }),
    /* @__PURE__ */ e.jsxs(t.GridItem, { children: [
      /* @__PURE__ */ e.jsx(n, { children: "Copy this text" }),
      /* @__PURE__ */ e.jsx(d, { variant: "square", color: "secondary", text: "Copy this text", children: "Copy" })
    ] }),
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(I, {}) }),
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(a, { variant: "primary", onClick: () => l(), children: "Click to trigger notification" }) })
  ] }) }) }) }) });
};
export {
  S as default
};
