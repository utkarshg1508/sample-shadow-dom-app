import { j as e, L as n, C as i, b as l, c as m, d as p, r as u, e as x, H as h, T as j, B as g } from "./shadowDomWrapper-hak-Xp7r.js";
const c = [
  {
    id: 1,
    name: "Product 1",
    src: "https://picsum.photos/200?random=1",
    price: 19.99
  },
  {
    id: 2,
    name: "Product 2",
    src: "https://picsum.photos/200?random=2",
    price: 20.25
  },
  {
    id: 3,
    name: "Product 3",
    src: "https://picsum.photos/200?random=3",
    price: 37.99
  }
], C = l.memo(({ name: s, price: r, src: o }) => {
  const [a, t] = u.useState(!0), d = () => {
    t(!1);
  };
  return /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }, children: [
    /* @__PURE__ */ e.jsx("img", { src: o, alt: s, onLoad: d }),
    a ? /* @__PURE__ */ e.jsx(x, { style: { margin: "auto" } }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(h, { level: 20, children: s }),
      /* @__PURE__ */ e.jsx(j, { children: `$${r}` }),
      /* @__PURE__ */ e.jsx(g, { onClick: () => {
      }, children: "Add to Cart" })
    ] })
  ] });
}), f = () => /* @__PURE__ */ e.jsx(n.Container, { children: /* @__PURE__ */ e.jsx(n.Grid, { children: c.map((s) => {
  const { id: r, name: o, price: a, src: t } = s;
  return /* @__PURE__ */ e.jsx(n.GridItem, { lg: 4, children: /* @__PURE__ */ e.jsx(i, { hasHoverEffect: !0, style: { padding: "20px", margin: "10px" }, children: /* @__PURE__ */ e.jsx(C, { id: r, name: o, price: a, src: t }) }) }, r);
}) }) }), P = () => {
  const s = [
    {
      header: "Name",
      accessor: "prod_name",
      id: "prod_name"
    },
    {
      header: "Price",
      accessor: "prod_price",
      id: "prod_price"
    }
  ], r = c.map((t) => ({ prod_name: t.name, prod_price: t.price })), { organizedRows: o, columns: a } = m({ columns: s, rows: r });
  return /* @__PURE__ */ e.jsx(n.Container, { children: /* @__PURE__ */ e.jsx(p, { columns: a, rows: o, fixedHeight: 500 }) });
}, b = () => /* @__PURE__ */ e.jsx(n.Page, { children: /* @__PURE__ */ e.jsxs(n.Content, { children: [
  /* @__PURE__ */ e.jsx(f, {}),
  /* @__PURE__ */ e.jsx(P, {})
] }) });
export {
  b as default
};
