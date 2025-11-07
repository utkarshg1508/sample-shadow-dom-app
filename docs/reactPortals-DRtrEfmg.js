import { j as e, L as t, T as s, f as x, B as a, P as m, S as u, g as h, r as b, h as i, M as j, i as v, k as C, F as r, l as y } from "./shadowDomWrapper-Fw0rhQC_.js";
const f = () => /* @__PURE__ */ e.jsxs("div", { children: [
  /* @__PURE__ */ e.jsx(m, { children: "Some text for my popover" }),
  /* @__PURE__ */ e.jsx(u, { children: "Some text. Some text." })
] }), I = () => /* @__PURE__ */ e.jsxs("div", { children: [
  /* @__PURE__ */ e.jsx(s, { children: "I am some div that will have tooltip on hover" }),
  /* @__PURE__ */ e.jsx(h, { children: "Some text for my popover - too much text wraps around, tooltip content breaks by default at 320px" })
] }), O = ({ environmentType: o, environment: l }) => {
  const [c, n] = b.useState(!1), d = i({ name: "" }), p = [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
    { label: "Option 4", value: 4 },
    { label: "Option 5", value: 5 },
    { label: "Option 6", value: 6 },
    { label: "Option 7", value: 7 }
  ];
  return c ? /* @__PURE__ */ e.jsxs(j, { children: [
    /* @__PURE__ */ e.jsx(v, { children: "Modal header" }),
    /* @__PURE__ */ e.jsx(C, { className: "", style: { overflow: "hidden" }, children: /* @__PURE__ */ e.jsx(
      r,
      {
        label: "Account",
        name: "name",
        form: d,
        options: p,
        menuPortalTarget: l
      }
    ) }),
    /* @__PURE__ */ e.jsx(y, { children: /* @__PURE__ */ e.jsx(a, { onClick: () => n(!1), children: "Cancel" }) })
  ] }) : /* @__PURE__ */ e.jsxs(a, { onClick: () => {
    n(!0);
  }, children: [
    o,
    " Open"
  ] });
}, S = () => {
  const o = i({ name: "" }), l = [
    { label: "Label all alone", value: 1 },
    { label: "Label with sub-label: ", value: 2, subLabel: "I'm the sub-label" },
    { label: "Label with tag", value: 7, tag: "Some Tag Text" },
    { label: "Label with secondary label", value: 3, secondaryLabel: "Secondary Label" },
    { label: "Label with tooltip", value: 4, tooltip: "tool tip" },
    { label: "Disabled Option", value: 5, isDisabled: !0 },
    { label: "Disabled Option with tooltip", value: 6, isDisabled: !0, tooltip: "tool tip" }
  ];
  return /* @__PURE__ */ e.jsx(
    r,
    {
      label: "Account",
      name: "name",
      form: o,
      options: l
    }
  );
}, T = () => {
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
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(f, {}) }),
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(I, {}) }),
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(O, { environmentType: "Document Body", environment: document.body }) }),
    /* @__PURE__ */ e.jsxs(t.GridItem, { children: [
      /* @__PURE__ */ e.jsx(s, { children: "Copy this text" }),
      /* @__PURE__ */ e.jsx(x, { variant: "square", color: "secondary", text: "Copy this text", children: "Copy" })
    ] }),
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(S, {}) }),
    /* @__PURE__ */ e.jsx(t.GridItem, { children: /* @__PURE__ */ e.jsx(a, { variant: "primary", onClick: () => o(), children: "Click to trigger notification" }) })
  ] }) }) }) }) });
};
export {
  T as default
};
