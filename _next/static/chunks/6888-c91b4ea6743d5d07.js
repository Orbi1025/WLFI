try {
  !(function () {
    var t =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof self
          ? self
          : {},
      e = new t.Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = "f517f337-880d-48b3-b7d7-3deeeb6aa9ba"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-f517f337-880d-48b3-b7d7-3deeeb6aa9ba"));
  })();
} catch (t) {}
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6888],
  {
    32305: (t, e, r) => {
      r.d(e, { C: () => F });
      var i = r(54568),
        a = r(13432),
        n = r(4451),
        s = r(11985),
        o = r(29768);
      let l = "World Liberty Financial",
        c = "Where DeFi Meets TradFi",
        d =
          "Bridging legacy finance and the open economy with purpose-built, on-chain products.",
        u = s.h.NEXT_PUBLIC_BASE_URL,
        w = "https://".concat(a.w4, "/images/world-liberty-financial-logo.jpg"),
        p = "https://".concat(
          a.w4,
          "/images/open-graph/world-liberty-financial.jpg"
        ),
        f = "https://".concat(a.w4, "/images/open-graph"),
        g = "https://".concat(a.w4, "/docs/gold-paper.pdf"),
        m = "".concat(l, " -"),
        h = (t) => "".concat(u).concat(t),
        b = (t) => "".concat(m, " ").concat(t),
        x = (t) => "".concat(f).concat(t, ".jpg"),
        y = {
          about: "/about",
          brand: "/brand",
          bridge: "/bridge",
          bridgeActivity: "/bridge/activity",
          bridgeActivityItem: (t) => "/bridge/activity/".concat(t),
          contact: "/contact",
          documentation: "https://docs.worldlibertyfinancial.com",
          forum: "https://governance.worldlibertyfinancial.com",
          governance: "/governance",
          home: "/",
          privacy: "/privacy",
          providers: "/providers",
          snapshot: "https://vote.worldlibertyfinancial.com",
          terms: "/terms",
          unlock: "/unlock",
          usd1: "/usd1",
          usd1RiskDisclosures: "/usd1/risk-disclosures",
          wlfiRiskDisclosures: "/wlfi/risk-disclosures",
          wlfiTerms: "/wlfi/terms",
        },
        v = {
          [y.about]: {
            description:
              "Learn about our bold vision, key team members, and global partners working to revolutionize finance at World Liberty Financial.",
            get ogTitle() {
              return b(this.title);
            },
            title: "Team, Vision & Mission",
            url: h(y.about),
          },
          [y.brand]: {
            description:
              "Explore our brand assets, including logos, colors, and fonts, to help you create a consistent and recognizable presence for World Liberty Financial.",
            get ogTitle() {
              return b(this.title);
            },
            title: "Visual Identity Guide",
            url: h(y.brand),
          },
          [y.bridge]: {
            description:
              "Easily bridge USD1 between Ethereum, BNB Chain, and other supported networks. Fast, secure, and powered by Chainlink CCIP.",
            get ogTitle() {
              return b(this.title);
            },
            ogUrl: x(y.bridge),
            title: "Bridge USD1 Across Chains",
            url: h(y.bridge),
          },
          [y.bridgeActivity]: {
            description:
              "Monitor your USD1 bridge transactions across Ethereum, BNB Chain, and more. View real-time status updates for each transfer.",
            get ogTitle() {
              return b(this.title);
            },
            ogUrl: x(y.bridge),
            title: "Bridge Transaction History",
            url: h(y.bridgeActivity),
          },
          [y.contact]: {
            description:
              "Reach out to World Liberty Financial for support, product inquiries or partnership opportunities.",
            get ogTitle() {
              return b(this.title);
            },
            title: "Support & Partnerships",
            url: h(y.contact),
          },
          [y.governance]: {
            description:
              "World Liberty Financial seeks to ensure trust and transparency through a robust governance system with token-holder voting, proposals, and active ecosystem participation.",
            get ogTitle() {
              return b(this.title);
            },
            ogUrl: x(y.governance),
            title: "Shape the Future with our Governance Process",
            url: h(y.governance),
          },
          [y.home]: {
            description: d,
            get ogTitle() {
              return b(this.title);
            },
            ogUrl: x("/world-liberty-financial"),
            title: c,
            url: h(y.home),
          },
          [y.privacy]: {
            description:
              "Discover how World Liberty Financial protects your data and seeks to ensure compliance with relevant privacy standards.",
            get ogTitle() {
              return b(this.title);
            },
            title: "How We Protect Your Data",
            url: h(y.privacy),
          },
          [y.providers]: {
            description:
              "Find trusted partners to get USD1, including exchanges, wallets, and DeFi apps. Explore all the official providers in one place.",
            get ogTitle() {
              return b(this.title);
            },
            ogUrl: x(y.providers),
            title: "Trusted USD1 Providers",
            url: h(y.providers),
          },
          [y.terms]: {
            description:
              "Learn the terms that govern your access to World Liberty Financial.",
            get ogTitle() {
              return b(this.title);
            },
            title: "Terms & Conditions",
            url: h(y.terms),
          },
          [y.unlock]: {
            description:
              "Easily unlock your WLFI tokens with our Unlock feature. View schedules, track progress, and claim your tokens.",
            get ogTitle() {
              return b(this.title);
            },
            ogUrl: x(y.unlock),
            title: "Easily unlock your WLFI tokens",
            url: h(y.unlock),
          },
          [y.usd1]: {
            description:
              "USD1 is the US Dollar stablecoin upgraded for a new era of finance — stable, secure, and transparent by design.",
            get ogTitle() {
              return b(this.title);
            },
            ogUrl: x(y.usd1),
            title: "Meet USD1",
            url: h(y.usd1),
          },
          [y.usd1RiskDisclosures]: {
            description:
              "Learn about and understand the potential risks associated with using USD1.",
            get ogTitle() {
              return b(this.title);
            },
            title: "USD1 Risk Disclosures",
            url: h(y.usd1RiskDisclosures),
          },
          [y.wlfiRiskDisclosures]: {
            description:
              "Learn about and understand the potential risks associated with using WLFI.",
            get ogTitle() {
              return b(this.title);
            },
            title: "WLFI Risk Disclosures",
            url: h(y.wlfiRiskDisclosures),
          },
          [y.wlfiTerms]: {
            description:
              "Before interacting with WLFI tokens, understand their utility, limitations, and associated risks.",
            get ogTitle() {
              return b(this.title);
            },
            title: "Use and Acquisition Terms & Conditions",
            url: h(y.wlfiTerms),
          },
        },
        k = [
          {
            href: "https://x.com/worldlibertyfi",
            icon: (t) =>
              (0, i.jsx)(n.A.twitter, {
                className: (0, o.cn)("tw-size-5 tw-text-foreground-quinary", t),
              }),
            title: "X/Twitter",
          },
          {
            href: "https://t.me/defiant1s",
            icon: (t) =>
              (0, i.jsx)(n.A.telegram, {
                className: (0, o.cn)("tw-size-5 tw-text-foreground-quinary", t),
              }),
            title: "Telegram",
          },
          {
            href: "https://www.linkedin.com/company/worldlibertyfi/",
            icon: (t) =>
              (0, i.jsx)(n.A.linkedin, {
                className: (0, o.cn)("tw-size-5 tw-text-foreground-quinary", t),
              }),
            title: "LinkedIn",
          },
        ],
        N = [
          { external: !1, href: y.usd1, title: "Overview" },
          { external: !1, href: y.providers, title: "Providers" },
          { external: !1, href: y.bridge, isVisible: !0, title: "Bridge" },
          { external: !1, href: void 0, isVisible: !0, title: "Exchange" },
        ],
        T = [
          { external: !1, href: void 0, isVisible: !0, title: "WLFI App" },
          { external: !1, href: void 0, isVisible: !0, title: "Lend & Borrow" },
        ],
        D = [
          { external: !1, href: y.about, title: "About" },
          { external: !1, href: y.brand, title: "Brand Assets" },
          { external: !1, href: y.contact, title: "Contact us" },
        ],
        L = [
          { external: !1, href: y.unlock, title: "Unlock $WLFI" },
          { external: !1, title: "Trade $WLFI" },
          { external: !1, href: y.governance, title: "$WLFI Governance" },
        ],
        U = [
          { external: !1, href: y.privacy, title: "Privacy Policy" },
          {
            external: !1,
            href: "".concat(y.privacy, "#california-privacy-rights"),
            title: "California Privacy Notice",
          },
          { external: !1, href: y.terms, title: "Terms of Service" },
          {
            external: !1,
            href: y.wlfiTerms,
            title: "WLFI Token Use and Acquisition T&Cs",
          },
          {
            external: !1,
            href: y.wlfiRiskDisclosures,
            title: "WLFI Risk Disclosures",
          },
          {
            external: !1,
            href: y.usd1RiskDisclosures,
            title: "USD1 Risk Disclosures",
          },
        ],
        F = {
          applicationName: "".concat(m, " ").concat(c),
          apps: T,
          authors: [{ name: l, url: "https://worldlibertyfiancial.com" }],
          cdn: "https://".concat(a.w4),
          company: D,
          description: d,
          footerNav: [
            { routes: N, title: "USD1" },
            { routes: T, title: "Apps & Protocols" },
            { routes: L, title: "WLFI" },
            { routes: D, title: "Company" },
            { routes: U, title: "Legal" },
          ],
          generator: "Next.js",
          goldPaper: g,
          governanceMail: "governance@worldlibertyfinancial.com",
          infoMail: "info@worldlibertyfinancial.com",
          keywords: "",
          legal: U,
          logo: w,
          mail: "support@worldlibertyfinancial.com",
          mainNav: [
            {
              groups: [
                { groupTitle: "USD1", routes: N },
                { groupTitle: "Apps & protocols", routes: T },
              ],
              title: "Products",
            },
            { routes: L, title: "WLFI" },
            { routes: D, title: "Company" },
          ],
          manifest: "/manifest.json",
          name: "".concat(m, " ").concat(c),
          nameLiteral: l,
          nameTemplate: m,
          ogImage: p,
          ogPath: f,
          openGraph: {
            countryName: "United States",
            description: d,
            images: {
              alt: "".concat(m, " ").concat(c),
              height: 630,
              type: "image/jpeg",
              url: p,
              width: 1200,
            },
            locale: "en_US",
            siteName: l,
            title: "".concat(m, " ").concat(c),
            type: "website",
            url: u,
          },
          privacyMail: "privacy@worldlibertyfinancial.com",
          routes: y,
          routesMetadata: v,
          socials: k,
          title: c,
          twitter: {
            card: "summary_large_image",
            description: d,
            images: [p],
            site: "@worldlibertyfi",
            title: "".concat(m, " ").concat(c),
          },
          url: u,
          usd1: N,
          wlfi: L,
        };
    },
    38019: (t, e, r) => {
      r.d(e, { $m: () => d, As: () => c, nD: () => l, ub: () => u });
      var i = r(54568),
        a = r(23611),
        n = r(74711),
        s = r(7620),
        o = r(29768);
      let l = s.forwardRef((t, e) => {
        let { className: r, ...n } = t;
        return (0, i.jsx)(a.bL, {
          className: (0, o.cn)("tw-flex tw-w-full tw-flex-col tw-gap-2", r),
          ref: e,
          ...n,
        });
      });
      l.displayName = "Accordion";
      let c = s.forwardRef((t, e) => {
        let { className: r, ...n } = t;
        return (0, i.jsx)(a.q7, {
          className: (0, o.cn)(
            "tw-w-full tw-rounded-md tw-border tw-border-border tw-bg-background-secondary tw-outline-none focus-visible:tw-shadow-button-focus-simple",
            r
          ),
          ref: e,
          ...n,
        });
      });
      c.displayName = "AccordionItem";
      let d = s.forwardRef((t, e) => {
        let { className: r, children: s, ...l } = t;
        return (0, i.jsx)(a.Y9, {
          className: "tw-flex tw-w-full",
          children: (0, i.jsxs)(a.l9, {
            className: (0, o.cn)(
              "tw-flex tw-flex-1 tw-items-center tw-justify-between tw-gap-2 tw-rounded-md tw-py-5 tw-pl-3.5 tw-text-left tw-text-sm tw-font-medium tw-text-primary tw-outline-none tw-ring-offset-background tw-transition-all hover:tw-bg-background-hover focus-visible:tw-shadow-button-focus-simple [&[data-state=open]>svg]:tw-rotate-180 [&[data-state=open]]:tw-bg-background-secondary",
              r
            ),
            ref: e,
            ...l,
            children: [
              s,
              (0, i.jsx)(n.A, {
                className:
                  "tw-mr-5 tw-mt-1 tw-size-5 tw-shrink-0 tw-transition-transform tw-duration-200",
              }),
            ],
          }),
        });
      });
      d.displayName = a.l9.displayName;
      let u = s.forwardRef((t, e) => {
        let { className: r, children: n, ...s } = t;
        return (0, i.jsx)(a.UC, {
          className:
            "tw-overflow-hidden tw-px-3.5 tw-text-sm tw-font-normal tw-text-secondary tw-transition-all data-[state=closed]:tw-animate-accordion-up data-[state=open]:tw-animate-accordion-down",
          ref: e,
          ...s,
          children: (0, i.jsx)("div", {
            className: (0, o.cn)("tw-pb-4 tw-pt-0", r),
            children: n,
          }),
        });
      });
      u.displayName = a.UC.displayName;
    },
    76917: (t, e, r) => {
      r.d(e, { w: () => u });
      var i = r(54568),
        a = r(23493),
        n = r(615),
        s = r(7620),
        o = r(29768);
      let l = (0, n.F)(
          "tw-mt-2 tw-max-w-full tw-text-center tw-font-normal tw-tracking-normal tw-text-secondary",
          {
            defaultVariants: { size: "default" },
            variants: {
              size: {
                default: "md:tw-max-w-screen-sm 2xl:tw-max-w-screen-sm",
                lg: "md:tw-max-w-[720px] 2xl:tw-max-w-[800px] 2xl:tw-text-lg",
              },
            },
          }
        ),
        c = s.forwardRef((t, e) => {
          let { className: r, size: a, as: n = "h2", ...s } = t;
          return (0, i.jsx)(n, {
            className: (0, o.cn)(l({ size: a }), r),
            ref: e,
            ...s,
          });
        });
      c.displayName = "SectionSubtitle";
      var d = r(99348);
      function u(t) {
        let {
            children: e,
            className: r,
            titleProps: n,
            subtitleProps: s,
            titleContainerProps: l = {},
            titleContent: u,
            ...w
          } = t,
          p = n || s,
          { className: f, ...g } = l;
        return (0, i.jsxs)(a.AnimateInView, {
          as: "section",
          className: (0, o.cn)(
            "tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center tw-gap-12 tw-py-16 md:tw-gap-16 md:tw-py-20 2xl:tw-py-24",
            r
          ),
          ...w,
          children: [
            p &&
              (0, i.jsxs)("div", {
                className: (0, o.cn)(
                  "tw-flex tw-flex-col tw-items-center tw-justify-center",
                  f
                ),
                ...g,
                children: [
                  n && (0, i.jsx)(d.A, { ...n }),
                  s && (0, i.jsx)(c, { ...s }),
                  u,
                ],
              }),
            e,
          ],
        });
      }
    },
    90264: (t, e, r) => {
      r.d(e, { Separator: () => o });
      var i = r(54568),
        a = r(7297),
        n = r(7620),
        s = r(29768);
      let o = n.forwardRef((t, e) => {
        let {
          className: r,
          orientation: n = "horizontal",
          decorative: o = !0,
          ...l
        } = t;
        return (0, i.jsx)(a.b, {
          className: (0, s.cn)(
            "tw-shrink-0 tw-bg-border",
            "horizontal" === n ? "tw-h-px tw-w-full" : "tw-h-full tw-w-px",
            r
          ),
          decorative: o,
          orientation: n,
          ref: e,
          ...l,
        });
      });
      o.displayName = a.b.displayName;
    },
    99348: (t, e, r) => {
      r.d(e, { A: () => c });
      var i = r(54568),
        a = r(615),
        n = r(7620),
        s = r(29768);
      let o = (0, a.F)(
          "tw-max-w-full tw-bg-clip-text tw-text-center tw-font-semibold tw-text-transparent",
          {
            defaultVariants: { size: "default", variant: "brand" },
            variants: {
              size: {
                default:
                  "tw-text-3xl md:tw-max-w-screen-sm md:tw-text-4xl 2xl:tw-max-w-screen-sm 2xl:tw-text-5xl",
                lg: "tw-text-4xl md:tw-max-w-[720px] md:tw-text-5xl 2xl:tw-max-w-[800px] 2xl:tw-text-6xl",
                sm: "tw-text-2xl md:tw-text-3xl 2xl:tw-text-4xl",
              },
              variant: {
                brand: "tw-bg-brand-gradient",
                gray: "tw-bg-gray-gradient",
              },
            },
          }
        ),
        l = n.forwardRef((t, e) => {
          let { className: r, variant: a, size: n, as: l = "h1", ...c } = t;
          return (0, i.jsx)(l, {
            className: (0, s.cn)(o({ size: n, variant: a }), r),
            ref: e,
            ...c,
          });
        });
      l.displayName = "SectionTitle";
      let c = l;
    },
  },
]);
