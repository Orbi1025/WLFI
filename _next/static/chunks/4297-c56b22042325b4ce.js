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
      (t._sentryDebugIds[e] = "d19f1858-83d2-4407-a892-5acf0b7ed3c7"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-d19f1858-83d2-4407-a892-5acf0b7ed3c7"));
  })();
} catch (t) {}
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4297],
  {
    27118: (t, e, r) => {
      r.d(e, { l: () => a });
      let a = {
        LANDING: {
          ABOUT: {
            BARRIERS_SECTION: "about-barriers",
            CONTAINER: "about",
            GOALS_SECTION: "about-goals",
            GOALS_SECTION_ITEM: "about-goals-item",
            HERO_SECTION: "about-hero",
            TEAM_SECTION: "about-team",
            TEAM_SECTION_ITEM: "about-team-item",
          },
          BRAND: {
            COLOR_ITEM: "landing-brand-color-item",
            COLOR_PALETTE_SECTION: "brand-color-palette",
            CONTAINER: "brand",
            DOWNLOAD_KIT_BUTTON: "landing-brand-download-kit-button",
            HERO_SECTION: "brand-hero",
            HEX_COPY_BUTTON: "landing-brand-hex-copy-button",
            LOGO_ITEM: "landing-brand-logo-item",
            LOGO_ITEM_BUTTONS_CONTAINER:
              "landing-brand-logo-item-buttons-container",
            LOGO_SECTION: "brand-logo",
            PNG_DOWNLOAD_BUTTON: "landing-brand-png-download-button",
            SVG_COPY_BUTTON: "landing-brand-svg-copy-button",
            SVG_DOWNLOAD_BUTTON: "landing-brand-svg-download-button",
            TOKEN_ITEM: "brand-token-item",
            TOKEN_ITEM_BUTTONS_CONTAINER: "brand-token-item-buttons-container",
            TOKEN_SECTION: "brand-token",
            TYPOGRAPHY_SECTION: "brand-typography",
          },
          BRIDGE: {
            ACTIVITY_BUTTON: "activity-button",
            ASSET_INPUT: "asset-input",
            ASSET_INPUT_CLEAR_BUTTON: "asset-input-clear-button",
            BACK_BUTTON: "back-button",
            BACK_TO_ACTIVITY_BUTTON: "back-to-activity-button",
            BALANCE_TEXT: "balance-text",
            BRIDGE_CONTENT: "bridge-content",
            BRIDGE_TRANSACTION_VIEW: "bridge-transaction-view",
            DESTINATION_INPUT: "destination-input",
            DESTINATION_INPUT_CLEAR_BUTTON: "destination-input-clear-button",
            DESTINATION_INPUT_PASTE_BUTTON: "destination-input-paste-button",
            EMPTY_STATE: "empty-state",
            EMPTY_WALLET: "empty-wallet",
            MAX_BUTTON: "max-button",
            NETWORK_SELECTOR: "network-selector",
            SWAP_NETWORKS_BUTTON: "swap-networks-button",
            TRANSFER_BUTTON: "transfer-button",
            USE_CONNECTED_ACCOUNT_CHECKBOX: "use-connected-account-checkbox",
          },
          CONTACT: {
            CONTAINER: "contact",
            FORM_CONTAINER: "contact-inquiry-form",
            FORM_SELECTOR: "contact-form-selector",
            FORM_SUBMIT_BUTTON: "contact-form-submit-button",
            FORM_TRIGGER: "contact-inquiry-form-trigger",
            INPUT: {
              COMPANY: "contact-company-input",
              COUNTRY: "contact-country-input",
              COUNTRY_LIST: "contact-country-list",
              EMAIL: "contact-email-input",
              FIRST_NAME: "contact-first-name-input",
              LAST_NAME: "contact-last-name-input",
              MESSAGE: "contact-message-input",
              REASON: "contact-reason-input",
              TITLE: "contact-title-input",
            },
            SUCCESS_MESSAGE: "contact-form-success-message",
          },
          CONTAINER: "app-container",
          CTA: {
            BRIDGE_BUTTON: "bridge",
            FAQ_BUTTON: "faq",
            MINTING_BUTTON: "minting",
            NETWORK_BUTTON: "network",
            PROVIDERS_BUTTON: "providers",
            REPORT_BUTTON: "report",
            SEE_ALL_PRODUCTS_BUTTON: "see-all-products",
            SWAP_BUTTON: "swap",
            TRADE_WLFI_BUTTON: "trade-wlfi",
            UNLOCK_WLFI_BADGE: "unlock-wlfi-badge",
            UNLOCK_WLFI_BUTTON: "unlock-wlfi",
            USD1_BUTTON: "get-usd1",
          },
          FOOTER: "footer",
          FOOTER_NAV: {
            CONTAINER: "footer-container",
            ITEMS: {
              COMPANY_PREFIX: "footer-company-item",
              DISABLED_PREFIX: "footer-disabled-item",
              LEGAL_PREFIX: "footer-legal-item",
              PRODUCT_PREFIX: "footer-product-item",
              SOCIAL_PREFIX: "footer-social-item",
              USD1_PREFIX: "footer-usd1-item",
              WLFI_PREFIX: "footer-wlfi-item",
            },
            SECTIONS: {
              COMPANY: "footer-section-company",
              LEGAL: "footer-section-legal",
              PRODUCTS: "footer-section-products",
              USD1: "footer-section-usd1",
              WLFI: "footer-section-wlfi",
            },
          },
          GOVERNANCE: {
            CONTAINER: "governance",
            FORUM_LINK: "governance-forum-link",
            PLATFORMS_CONTAINER: "governance-platforms",
            SNAPSHOT_LINK: "governance-snapshot-link",
            STEPS_CONTAINER: "governance-steps",
            TRADE_WLFI_BUTTON: "governance-trade-wlfi-button",
            TRADE_WLFI_SECTION: "governance-trade-wlfi-section",
            UNLOCK_WLFI_BUTTON: "governance-unlock-wlfi-button",
          },
          HAMBURGER: "hamburger",
          HEADER: "header",
          HERO: "hero",
          HOMEPAGE: {
            GOVERNANCE_SECTION: "homepage-governance-section",
            GOVERNANCE_SECTION_BUTTON: "homepage-governance-section-button",
            GOVERNANCE_SECTION_FORUM_LINK:
              "homepage-governance-section-forum-link",
            JOIN_SECTION: "homepage-join-section",
            JOIN_SECTION_BUTTON: "homepage-join-section-button",
            PARTNERS_SECTION: "homepage-partners-section",
            PARTNERS_SECTION_ITEM: "homepage-partners-section-item",
            PRODUCTS_SECTION: "homepage-products-section",
            TRADE_WLFI_BUTTON: "homepage-trade-wlfi-button",
            UNLOCK_AND_TRADE_SECTION: "homepage-unlock-and-trade-section",
            UNLOCK_WLFI_BUTTON: "homepage-unlock-wlfi-button",
            USD1_GET_BUTTON: "homepage-products-section-usd1-get-button",
            USD1_SEE_BUTTON: "homepage-products-section-usd1-see-button",
          },
          LOGO: "logo",
          MOBILE_MENU: "mobile-menu",
          MOBILE_NAV: {
            ITEMS: {
              COMPANY_PREFIX: "mobile-company-item",
              CONTACT: "mobile-contact-us",
              DISABLED_PREFIX: "mobile-disabled-item",
              LEGAL_PREFIX: "mobile-legal-item",
              PRODUCT_PREFIX: "mobile-product-item",
              SOCIAL_PREFIX: "mobile-social-item",
              USD1_PREFIX: "mobile-usd1-item",
              WLFI_PREFIX: "mobile-wlfi-item",
            },
            SECTIONS: {
              COMPANY: "mobile-section-company",
              LEGAL: "mobile-section-legal",
              PRODUCTS: "mobile-section-products",
              SOCIAL: "mobile-section-social",
              USD1: "mobile-section-usd1",
              WLFI: "mobile-section-wlfi",
            },
          },
          NAVIGATION: {
            CONTENT: "navigation-content",
            ITEM: "navigation-item",
            TRIGGER: "navigation-trigger",
          },
          NAVIGATION_LINK: "navigation-link",
          PROVIDERS: {
            CATEGORY_FILTER: "category-filter",
            CLEAR_FILTERS: "clear-filters",
            CONTAINER: "providers",
            COUNT: "providers-count",
            EMPTY_STATE: "empty-state",
            PROVIDER_CARD: "provider-card",
            SEARCH_INPUT: "providers-search-input",
            USE_CASE_FILTER: "use-case-filter",
          },
          SECTIONS: { GET_USD1: "get-usd1", USD1_TOOLS: "usd1-tools" },
          WALLET: {
            CONNECT_WALLET_BUTTON: "connect-wallet-button",
            CONNECTED_WALLET_BUTTON: "connected-wallet-button",
            MENU: {
              COPY_ADDRESS_BUTTON: "copy-address-button",
              DISCONNECT_WALLET_BUTTON: "disconnect-wallet-button",
              EXPLORER_BUTTON: "explorer-button",
              SWITCH_NETWORK_BUTTON: "switch-network-button",
              WALLET_ADDRESS: "wallet-address",
              WALLET_MENU: "wallet-menu",
            },
          },
          WLFI_SWAP: {
            ACTIVITY_BUTTON: "activity-button",
            ASSET_INPUT: "asset-input",
            ASSET_SELECTOR: "asset-selector",
            BALANCE_TEXT: "balance-text",
            DEADLINE_INPUT: "deadline-input",
            DEADLINE_LABEL: "deadline-label",
            EMPTY_STATE: "empty-state",
            EMPTY_WALLET: "empty-wallet",
            LOADING_SPINNER: "loading-spinner",
            MAX_BUTTON: "max-button",
            SETTINGS_BUTTON: "settings-button",
            SETTINGS_DROPDOWN: "settings-dropdown",
            SLIPPAGE_AUTO_BUTTON: "slippage-auto-button",
            SLIPPAGE_INPUT: "slippage-input",
            SLIPPAGE_LABEL: "slippage-label",
            SWAP_BUTTON: "swap-button",
            SWAP_CONTENT: "swap-content",
            SWITCH_TOKENS_BUTTON: "switch-tokens-button",
            TOKEN_SELECTOR: "token-selector",
            TRANSACTION_SUMMARY: "transaction-summary",
          },
        },
      };
    },
    32305: (t, e, r) => {
      r.d(e, { C: () => A });
      var a = r(54568),
        n = r(13432),
        i = r(4451),
        s = r(11985),
        o = r(29768);
      let l = "World Liberty Financial",
        c = "Where DeFi Meets TradFi",
        d =
          "Bridging legacy finance and the open economy with purpose-built, on-chain products. 0xcomingsoon",
        u = s.h.NEXT_PUBLIC_BASE_URL,
        w = "https://".concat(n.w4, "/images/world-liberty-financial-logo.jpg"),
        m = "https://".concat(
          n.w4,
          "/images/open-graph/world-liberty-financial.jpg"
        ),
        p = "https://".concat(n.w4, "/images/open-graph"),
        g = "https://".concat(n.w4, "/docs/gold-paper.pdf"),
        N = "".concat(l, " -"),
        f = (t) => "".concat(u).concat(t),
        h = (t) => "".concat(N, " ").concat(t),
        T = (t) => "".concat(p).concat(t, ".jpg"),
        b = {
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
        x = {
          [b.about]: {
            description:
              "Learn about our bold vision, key team members, and global partners working to revolutionize finance at World Liberty Financial.",
            get ogTitle() {
              return h(this.title);
            },
            title: "Team, Vision & Mission",
            url: f(b.about),
          },
          [b.brand]: {
            description:
              "Explore our brand assets, including logos, colors, and fonts, to help you create a consistent and recognizable presence for World Liberty Financial.",
            get ogTitle() {
              return h(this.title);
            },
            title: "Visual Identity Guide",
            url: f(b.brand),
          },
          [b.bridge]: {
            description:
              "Easily bridge USD1 between Ethereum, BNB Chain, and other supported networks. Fast, secure, and powered by Chainlink CCIP.",
            get ogTitle() {
              return h(this.title);
            },
            ogUrl: T(b.bridge),
            title: "Bridge USD1 Across Chains",
            url: f(b.bridge),
          },
          [b.bridgeActivity]: {
            description:
              "Monitor your USD1 bridge transactions across Ethereum, BNB Chain, and more. View real-time status updates for each transfer.",
            get ogTitle() {
              return h(this.title);
            },
            ogUrl: T(b.bridge),
            title: "Bridge Transaction History",
            url: f(b.bridgeActivity),
          },
          [b.contact]: {
            description:
              "Reach out to World Liberty Financial for support, product inquiries or partnership opportunities.",
            get ogTitle() {
              return h(this.title);
            },
            title: "Support & Partnerships",
            url: f(b.contact),
          },
          [b.governance]: {
            description:
              "World Liberty Financial seeks to ensure trust and transparency through a robust governance system with token-holder voting, proposals, and active ecosystem participation.",
            get ogTitle() {
              return h(this.title);
            },
            ogUrl: T(b.governance),
            title: "Shape the Future with our Governance Process",
            url: f(b.governance),
          },
          [b.home]: {
            description: d,
            get ogTitle() {
              return h(this.title);
            },
            ogUrl: T("/world-liberty-financial"),
            title: c,
            url: f(b.home),
          },
          [b.privacy]: {
            description:
              "Discover how World Liberty Financial protects your data and seeks to ensure compliance with relevant privacy standards.",
            get ogTitle() {
              return h(this.title);
            },
            title: "How We Protect Your Data",
            url: f(b.privacy),
          },
          [b.providers]: {
            description:
              "Find trusted partners to get USD1, including exchanges, wallets, and DeFi apps. Explore all the official providers in one place.",
            get ogTitle() {
              return h(this.title);
            },
            ogUrl: T(b.providers),
            title: "Trusted USD1 Providers",
            url: f(b.providers),
          },
          [b.terms]: {
            description:
              "Learn the terms that govern your access to World Liberty Financial.",
            get ogTitle() {
              return h(this.title);
            },
            title: "Terms & Conditions",
            url: f(b.terms),
          },
          [b.unlock]: {
            description:
              "Easily unlock your WLFI tokens with our Unlock feature. View schedules, track progress, and claim your tokens.",
            get ogTitle() {
              return h(this.title);
            },
            ogUrl: T(b.unlock),
            title: "Easily unlock your WLFI tokens",
            url: f(b.unlock),
          },
          [b.usd1]: {
            description:
              "USD1 is the US Dollar stablecoin upgraded for a new era of finance — stable, secure, and transparent by design.",
            get ogTitle() {
              return h(this.title);
            },
            ogUrl: T(b.usd1),
            title: "Meet USD1",
            url: f(b.usd1),
          },
          [b.usd1RiskDisclosures]: {
            description:
              "Learn about and understand the potential risks associated with using USD1.",
            get ogTitle() {
              return h(this.title);
            },
            title: "USD1 Risk Disclosures",
            url: f(b.usd1RiskDisclosures),
          },
          [b.wlfiRiskDisclosures]: {
            description:
              "Learn about and understand the potential risks associated with using WLFI.",
            get ogTitle() {
              return h(this.title);
            },
            title: "WLFI Risk Disclosures",
            url: f(b.wlfiRiskDisclosures),
          },
          [b.wlfiTerms]: {
            description:
              "Before interacting with WLFI tokens, understand their utility, limitations, and associated risks.",
            get ogTitle() {
              return h(this.title);
            },
            title: "Use and Acquisition Terms & Conditions",
            url: f(b.wlfiTerms),
          },
        },
        E = [
          {
            href: "https://x.com/worldlibertyfi",
            icon: (t) =>
              (0, a.jsx)(i.A.twitter, {
                className: (0, o.cn)("tw-size-5 tw-text-foreground-quinary", t),
              }),
            title: "X/Twitter",
          },
          {
            href: "https://t.me/defiant1s",
            icon: (t) =>
              (0, a.jsx)(i.A.telegram, {
                className: (0, o.cn)("tw-size-5 tw-text-foreground-quinary", t),
              }),
            title: "Telegram",
          }
        ],
        y = [
          { external: !1, href: b.usd1, title: "Overview" },
          { external: !1, href: b.providers, title: "Providers" },
          { external: !1, href: b.bridge, isVisible: !0, title: "Bridge" },
          { external: !1, href: void 0, isVisible: !0, title: "Exchange" },
        ],
        I = [
          { external: !1, href: void 0, isVisible: !0, title: "WLFI App" },
          { external: !1, href: void 0, isVisible: !0, title: "Lend & Borrow" },
        ],
        _ = [
          { external: !1, href: b.about, title: "About" },
          { external: !1, href: b.brand, title: "Brand Assets" },
          { external: !1, href: b.contact, title: "Contact us" },
        ],
        C = [
          { external: !1, href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon", title: "Buy $WLFI" },
          { external: !1, title: "Trade $WLFI" },
          { external: !1, href: b.governance, title: "$WLFI Governance" },
        ],
        O = [
          { external: !1, href: b.privacy, title: "Privacy Policy" },
          {
            external: !1,
            href: "".concat(b.privacy, "#california-privacy-rights"),
            title: "California Privacy Notice",
          },
          { external: !1, href: b.terms, title: "Terms of Service" },
          {
            external: !1,
            href: b.wlfiTerms,
            title: "WLFI Token Use and Acquisition T&Cs",
          },
          {
            external: !1,
            href: b.wlfiRiskDisclosures,
            title: "WLFI Risk Disclosures",
          },
          {
            external: !1,
            href: b.usd1RiskDisclosures,
            title: "USD1 Risk Disclosures",
          },
        ],
        A = {
          applicationName: "".concat(N, " ").concat(c),
          apps: I,
          authors: [{ name: l, url: "https://worldlibertyfiancial.com" }],
          cdn: "https://".concat(n.w4),
          company: _,
          description: d,
          footerNav: [
          ],
          generator: "Next.js",
          goldPaper: g,
          governanceMail: "governance@worldlibertyfinancial.com",
          infoMail: "info@worldlibertyfinancial.com",
          keywords: "",
          legal: O,
          logo: w,
          mail: "support@worldlibertyfinancial.com",
          mainNav: [
            
          ],
          manifest: "/manifest.json",
          name: "".concat(N, " ").concat(c),
          nameLiteral: l,
          nameTemplate: N,
          ogImage: m,
          ogPath: p,
          openGraph: {
            countryName: "United States",
            description: d,
            images: {
              alt: "".concat(N, " ").concat(c),
              height: 630,
              type: "image/jpeg",
              url: m,
              width: 1200,
            },
            locale: "en_US",
            siteName: l,
            title: "".concat(N, " ").concat(c),
            type: "website",
            url: u,
          },
          privacyMail: "privacy@worldlibertyfinancial.com",
          routes: b,
          routesMetadata: x,
          socials: E,
          title: c,
          twitter: {
            card: "summary_large_image",
            description: d,
            images: [m],
            site: "@worldlibertyfi",
            title: "".concat(N, " ").concat(c),
          },
          url: u,
          usd1: y,
          wlfi: C,
        };
    },
    32583: (t, e, r) => {
      r.d(e, { b: () => s, p: () => i });
      var a = r(79924),
        n = r(8960);
      let i = (0, a.eU)(null, (t, e, r) => {
          e(n.p9, { properties: { tenant: "landing" }, url: r });
        }),
        s = (0, a.eU)(null, (t, e, r) => {
          let { eventName: a, properties: i } = r,
            s = { ...i, tenant: "landing" };
          e(n.bL, { eventName: a, properties: s });
        });
    },
    35725: (t, e, r) => {
      r.d(e, {
        C5: () => f,
        MJ: () => N,
        eI: () => p,
        lR: () => g,
        lV: () => d,
        zB: () => w,
      });
      var a = r(54568),
        n = r(79649),
        i = r(7620),
        s = r(61938),
        o = r(92555),
        l = r(29768);
      let c = i.createContext({}),
        d = s.Op,
        u = i.createContext({}),
        w = (t) => {
          let { ...e } = t;
          return (0, a.jsx)(u.Provider, {
            value: { name: e.name },
            children: (0, a.jsx)(s.xI, { ...e }),
          });
        },
        m = () => {
          let t = i.useContext(u),
            e = i.useContext(c),
            { getFieldState: r, formState: a } = (0, s.xW)(),
            n = r(t.name, a);
          if (!t) throw Error("useFormField should be used within <FormField>");
          let { id: o } = e;
          return {
            formDescriptionId: "".concat(o, "-form-item-description"),
            formItemId: "".concat(o, "-form-item"),
            formMessageId: "".concat(o, "-form-item-message"),
            id: o,
            name: t.name,
            ...n,
          };
        },
        p = i.forwardRef((t, e) => {
          let { className: r, ...n } = t,
            s = i.useId();
          return (0, a.jsx)(c.Provider, {
            value: { id: s },
            children: (0, a.jsx)("div", {
              className: (0, l.cn)("tw-space-y-2", r),
              ref: e,
              ...n,
            }),
          });
        });
      p.displayName = "FormItem";
      let g = i.forwardRef((t, e) => {
        let { className: r, ...n } = t,
          { error: i, formItemId: s } = m();
        return (0, a.jsx)(o.J, {
          className: (0, l.cn)(i && "tw-text-error", r),
          htmlFor: s,
          ref: e,
          ...n,
        });
      });
      g.displayName = "FormLabel";
      let N = i.forwardRef((t, e) => {
        let { ...r } = t,
          {
            error: i,
            formItemId: s,
            formDescriptionId: o,
            formMessageId: l,
          } = m();
        return (0, a.jsx)(n.DX, {
          "aria-describedby": i ? "".concat(o, " ").concat(l) : "".concat(o),
          "aria-invalid": !!i,
          id: s,
          ref: e,
          ...r,
        });
      });
      (N.displayName = "FormControl"),
        (i.forwardRef((t, e) => {
          let { className: r, ...n } = t,
            { formDescriptionId: i } = m();
          return (0, a.jsx)("p", {
            className: (0, l.cn)("tw-text-[0.8rem]", r),
            id: i,
            ref: e,
            ...n,
          });
        }).displayName = "FormDescription");
      let f = i.forwardRef((t, e) => {
        let { className: r, children: n, ...i } = t,
          { error: s, formMessageId: o } = m(),
          c = s ? String(s.message) : n;
        return c
          ? (0, a.jsx)("p", {
              className: (0, l.cn)(
                "tw-text-[0.8rem] tw-font-medium tw-text-error",
                r
              ),
              id: o,
              ref: e,
              ...i,
              children: c,
            })
          : null;
      });
      f.displayName = "FormMessage";
    },
    47807: (t, e, r) => {
      r.d(e, { A: () => G });
      var a = r(54568),
        n = r(30925),
        i = r(40160),
        s = r(54280),
        o = r(60844),
        l = r(61773),
        c = r(7620),
        d = r(60357),
        u = r(70092),
        w = r(92797),
        m = r(40476),
        p = r(90060),
        g = r(16258),
        N = r(61938),
        f = r(79536),
        h = r(47227),
        T = r(28359),
        b = r(35725),
        x = r(65165),
        E = r(17680),
        y = r(46752);
      let I = f.Ik({
          baseChainId: f
            .ai()
            .int()
            .positive({ message: "Base chain ID must be a positive integer" }),
          forkChainId: f
            .ai()
            .int()
            .positive({ message: "Fork chain ID must be a positive integer" }),
          rpcUrl: f
            .Yj()
            .min(1, "RPC URL is required")
            .url({ message: "Invalid RPC URL" }),
        }),
        _ = { baseChainId: 1, forkChainId: 3030, rpcUrl: "" };
      function C(t) {
        let { open: e, onOpenChange: r } = t,
          n = (0, N.mN)({
            defaultValues: _,
            mode: "onChange",
            resolver: (0, p.u)(I),
          }),
          { reset: s, handleSubmit: o, control: l } = c.useMemo(() => n, [n]),
          d = () => {
            r(!1);
          },
          { mutateAsync: u, isPending: w } = (0, g.n)({
            mutationFn: async (t) => (
              localStorage.setItem("forkEnabled", "true"),
              localStorage.setItem("forkRPCUrl", t.rpcUrl),
              localStorage.setItem("forkBaseChainId", t.baseChainId.toString()),
              localStorage.setItem("forkNetworkId", t.forkChainId.toString()),
              Promise.resolve()
            ),
            onError: (t) => {
              console.error("Could not enable fork mode:", t),
                (0, E.o)({
                  toastConfig: {
                    description: "Please try again later.",
                    title: "Could not enable fork mode",
                    variant: "error",
                  },
                }),
                i.Cp(t);
            },
            onSuccess: () => {
              d(),
                (0, E.o)({
                  toastConfig: {
                    description: "Page will refresh to apply changes.",
                    title: "Fork mode enabled",
                    variant: "success",
                  },
                }),
                window.location.reload();
            },
          }),
          { mutateAsync: m, isPending: f } = (0, g.n)({
            mutationFn: async () => (
              localStorage.removeItem("forkEnabled"),
              localStorage.removeItem("forkRPCUrl"),
              localStorage.removeItem("forkBaseChainId"),
              localStorage.removeItem("forkNetworkId"),
              Promise.resolve()
            ),
            onError: (t) => {
              console.error("Could not disable fork mode:", t),
                (0, E.o)({
                  toastConfig: {
                    description: "Please try again later.",
                    title: "Could not disable fork mode",
                    variant: "error",
                  },
                }),
                i.Cp(t);
            },
            onSuccess: () => {
              d(),
                (0, E.o)({
                  toastConfig: {
                    description: "Page will refresh to apply changes.",
                    title: "Fork mode disabled",
                    variant: "success",
                  },
                }),
                window.location.reload();
            },
          }),
          C = async (t) => {
            try {
              await u(t);
            } catch (t) {}
          },
          O = w || f;
        return (
          (0, c.useEffect)(() => {
            e &&
              setTimeout(() => {
                n.setFocus("rpcUrl");
              }, 0);
          }, [n, e]),
          (0, c.useEffect)(() => {
            if (e && 1) {
              let t = localStorage.getItem("forkRPCUrl") || "",
                e = Number(localStorage.getItem("forkBaseChainId") || "1"),
                r = Number(localStorage.getItem("forkNetworkId") || "3030");
              n.reset({ baseChainId: e, forkChainId: r, rpcUrl: t });
            }
          }, [n, e]),
          (0, a.jsx)(T.lG, {
            onOpenChange: (t) => {
              r(t), t || s();
            },
            open: e,
            children: (0, a.jsxs)(T.Cf, {
              children: [
                (0, a.jsx)(T.c7, {
                  children: (0, a.jsx)(T.L3, {
                    children: "Fork mode configuration",
                  }),
                }),
                y.P6
                  ? (0, a.jsxs)(T.R4, {
                      className: "tw-gap-4",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "tw-rounded-lg tw-border tw-border-border-secondary tw-p-4",
                          children: [
                            (0, a.jsx)("p", {
                              className: "tw-font-semibold tw-text-primary",
                              children: "Fork mode is currently enabled",
                            }),
                            (0, a.jsx)("p", {
                              className: "tw-mt-2 tw-text-sm tw-text-secondary",
                              children:
                                "You are running in fork mode with custom network configuration.",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "tw-flex tw-flex-col tw-gap-2",
                          children: [
                            (0, a.jsxs)("span", {
                              className: "tw-text-sm tw-text-secondary",
                              children: [
                                (0, a.jsx)("strong", {
                                  children: "Base Chain ID:",
                                }),
                                " ",
                                n.getValues("baseChainId"),
                              ],
                            }),
                            (0, a.jsxs)("span", {
                              className: "tw-text-sm tw-text-secondary",
                              children: [
                                (0, a.jsx)("strong", {
                                  children: "Fork Chain ID:",
                                }),
                                " ",
                                n.getValues("forkChainId"),
                              ],
                            }),
                            (0, a.jsxs)("span", {
                              className: "tw-text-sm tw-text-secondary",
                              children: [
                                (0, a.jsx)("strong", { children: "RPC URL:" }),
                                " ",
                                n.getValues("rpcUrl"),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)(h.Button, {
                          className: "tw-w-full tw-mb-2",
                          disabled: O,
                          onClick: () => m(),
                          size: "lg",
                          variant: "secondary",
                          children: "Disable fork mode",
                        }),
                      ],
                    })
                  : (0, a.jsx)(b.lV, {
                      ...n,
                      children: (0, a.jsxs)("form", {
                        onSubmit: (t) => void o(C)(t),
                        children: [
                          (0, a.jsxs)(T.R4, {
                            className: "tw-gap-4",
                            children: [
                              (0, a.jsx)("p", {
                                className: "tw-font-semibold tw-text-secondary",
                                children: "Configure fork mode settings",
                              }),
                              (0, a.jsx)("p", {
                                className: "tw-text-sm tw-text-tertiary",
                                children:
                                  "Fork mode allows you to test against a local blockchain fork. The page will refresh after configuration.",
                              }),
                              (0, a.jsx)(b.zB, {
                                control: l,
                                name: "rpcUrl",
                                render: (t) => {
                                  let { field: e } = t;
                                  return (0, a.jsxs)(b.eI, {
                                    children: [
                                      (0, a.jsx)(b.lR, {
                                        children: "Fork RPC URL",
                                      }),
                                      (0, a.jsx)(b.MJ, {
                                        children: (0, a.jsx)(x.p, {
                                          placeholder: "http://127.0.0.1:8545",
                                          ...e,
                                          disabled: O,
                                        }),
                                      }),
                                      (0, a.jsx)(b.C5, {}),
                                    ],
                                  });
                                },
                              }),
                              (0, a.jsx)(b.zB, {
                                control: l,
                                name: "baseChainId",
                                render: (t) => {
                                  let { field: e } = t;
                                  return (0, a.jsxs)(b.eI, {
                                    children: [
                                      (0, a.jsx)(b.lR, {
                                        children: "Base Chain ID",
                                      }),
                                      (0, a.jsx)(b.MJ, {
                                        children: (0, a.jsx)(x.p, {
                                          placeholder: "1",
                                          type: "number",
                                          ...e,
                                          disabled: O,
                                          onChange: (t) =>
                                            e.onChange(Number(t.target.value)),
                                        }),
                                      }),
                                      (0, a.jsx)(b.C5, {}),
                                    ],
                                  });
                                },
                              }),
                              (0, a.jsx)(b.zB, {
                                control: l,
                                name: "forkChainId",
                                render: (t) => {
                                  let { field: e } = t;
                                  return (0, a.jsxs)(b.eI, {
                                    children: [
                                      (0, a.jsx)(b.lR, {
                                        children: "Fork Chain ID",
                                      }),
                                      (0, a.jsx)(b.MJ, {
                                        children: (0, a.jsx)(x.p, {
                                          placeholder: "3030",
                                          type: "number",
                                          ...e,
                                          disabled: O,
                                          onChange: (t) =>
                                            e.onChange(Number(t.target.value)),
                                        }),
                                      }),
                                      (0, a.jsx)(b.C5, {}),
                                    ],
                                  });
                                },
                              }),
                            ],
                          }),
                          (0, a.jsx)(T.Es, {
                            children: (0, a.jsx)(h.Button, {
                              className: "tw-w-full",
                              disabled: O || !n.formState.isValid,
                              size: "lg",
                              type: "submit",
                              children: "Enable fork mode",
                            }),
                          }),
                        ],
                      }),
                    }),
              ],
            }),
          })
        );
      }
      var O = r(67876),
        A = r(4451),
        v = r(92555),
        L = r(5023),
        S = r(20874),
        R = r(64595),
        k = r(56556),
        U = r(37570),
        j = r(89303),
        D = r(91912),
        B = r(29768),
        P = r(50674),
        F = r(26080),
        W = r(32583),
        M = r(27118);
      let z = (t) => {
        let { account: e, wagmiAccount: r, className: m, hideAvatar: p } = t,
          [g, N] = c.useState(!1),
          [f, T] = c.useState(!1),
          [, b] = (0, d.Cj)(),
          [x, I] = (0, o.fp)(D.W6),
          _ = (0, o.Xr)(W.b),
          S = (0, k.A)(),
          { openSwitchNetworks: j } = (0, s.hS)(),
          { disconnect: z } = (0, u.u)(),
          G = (0, w.i)(),
          V = (0, y.RY)(G),
          X = V.explorerLinkBuilder({ address: e.address }),
          { isMobileSmall: Y } = (0, U.Q)();
        return (0, a.jsxs)(O.rI, {
          onOpenChange: (t) => {
            N(t),
              _({ eventName: F.J$.WALLET_DROPDOWN, properties: { open: t } });
          },
          open: g,
          children: [
            (0, a.jsx)(O.ty, {
              asChild: !0,
              children: (0, a.jsxs)(h.Button, {
                className: (0, B.cn)(
                  "tw-min-w-[138px]",
                  m,
                  g && "tw-border-border-brand tw-outline-none",
                  Y && "tw-min-w-min"
                ),
                "data-address": e.address,
                "data-pw": M.l.LANDING.WALLET.CONNECTED_WALLET_BUTTON,
                size: Y ? "icon-md" : "md",
                variant: "input",
                children: [
                  !p &&
                    (0, a.jsxs)("span", {
                      className: "tw-relative",
                      children: [
                        (0, a.jsx)(s.eu, { address: e.address, size: 28 }),
                        y.P6 &&
                          (0, a.jsx)("span", {
                            className: "tw-absolute tw-bottom-0 tw-right-0",
                            children: (0, a.jsx)(A.A.walletAlert, {
                              className: "tw-size-3.5",
                            }),
                          }),
                      ],
                    }),
                  !Y &&
                    (0, a.jsx)("span", {
                      className: "tw-flex-1 tw-font-semibold",
                      children: e.displayName,
                    }),
                ],
              }),
            }),
            (0, a.jsxs)(O.SQ, {
              align: "end",
              className: "tw-w-72 tw-bg-background tw-pb-1",
              "data-pw": M.l.LANDING.WALLET.MENU.WALLET_MENU,
              onInteractOutside: () => c.startTransition(() => N(!1)),
              children: [
                (0, a.jsxs)(O.lp, {
                  className: "tw-flex tw-items-center tw-gap-3 tw-p-3",
                  "data-address": e.address.toLowerCase(),
                  "data-pw": M.l.LANDING.WALLET.MENU.WALLET_ADDRESS,
                  children: [
                    (0, a.jsxs)("span", {
                      className: "tw-relative",
                      children: [
                        (0, a.jsx)(s.eu, { address: e.address, size: 40 }),
                        y.P6 &&
                          (0, a.jsx)("span", {
                            className: "tw-absolute tw-bottom-0 tw-right-0",
                            children: (0, a.jsx)(A.A.walletAlert, {
                              className: "tw-size-4",
                            }),
                          }),
                      ],
                    }),
                    (0, a.jsxs)("span", {
                      className:
                        "tw-flex tw-items-center tw-gap-2 tw-text-sm tw-font-semibold tw-text-primary",
                      children: [
                        (0, P.$)(e.address),
                        (0, a.jsx)(A.A.copy, {
                          className:
                            "tw-size-5 tw-cursor-pointer tw-text-foreground-button-ghost-tertiary hover:tw-text-foreground-secondary-hover",
                          "data-pw":
                            M.l.LANDING.WALLET.MENU.COPY_ADDRESS_BUTTON,
                          onClick: () => {
                            b(e.address)
                              .then(() => {
                                _({ eventName: F.J$.COPY_ADDRESS }),
                                  (0, E.o)({
                                    toastConfig: {
                                      title: "Address copied to clipboard",
                                      variant: "success",
                                    },
                                  });
                              })
                              .catch((t) => {
                                (0, E.o)({
                                  toastConfig: {
                                    title: "Failed to copy address",
                                    variant: "error",
                                  },
                                }),
                                  i.Cp(t);
                              });
                          },
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)(O.I, {
                  className: "tw-my-1",
                  children: [
                    (0, a.jsx)(O.mB, { className: "tw--mx-3" }),
                    (0, a.jsxs)(O.I, {
                      className: "tw-flex tw-flex-col",
                      children: [
                        r.connector &&
                          (0, a.jsx)(O._2, {
                            action: (0, a.jsxs)("span", {
                              className:
                                "tw-flex tw-items-center tw-gap-1 tw-text-sm tw-font-normal tw-text-secondary",
                              children: [
                                r.connector.icon &&
                                  (0, a.jsx)(l.default, {
                                    alt: r.connector.name,
                                    className: "tw-aspect-square tw-size-5",
                                    height: 20,
                                    src: r.connector.icon.toString().trim(),
                                    width: 20,
                                  }),
                                r.connector.name,
                              ],
                            }),
                            className:
                              "tw-cursor-default !tw-text-tertiary hover:tw-bg-transparent",
                            children: "Wallet",
                          }),
                        (0, a.jsx)(O._2, {
                          action: S
                            ? (0, a.jsxs)("span", {
                                className:
                                  "tw-flex tw-items-center tw-gap-1 tw-text-sm tw-font-normal tw-text-secondary",
                                children: [
                                  (0, a.jsx)(l.default, {
                                    alt: V.name,
                                    height: 20,
                                    src: V.networkLogoPath,
                                    width: 20,
                                  }),
                                  V.name,
                                ],
                              })
                            : (0, a.jsxs)("span", {
                                className:
                                  "tw-flex tw-items-center tw-gap-1 tw-text-sm tw-font-normal tw-text-error",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "tw-size-2 tw-rounded-full tw-bg-error",
                                  }),
                                  "Unsupported",
                                ],
                              }),
                          className:
                            "tw-cursor-default !tw-text-tertiary hover:tw-bg-transparent",
                          onClick: (t) => t.preventDefault(),
                          children: "Network",
                        }),
                        (0, a.jsx)(O._2, {
                          "data-pw":
                            M.l.LANDING.WALLET.MENU.SWITCH_NETWORK_BUTTON,
                          icon: A.A.arrowLeftRight,
                          onClick: () => j(),
                          children: "Switch network",
                        }),
                      ],
                    }),
                    (0, a.jsx)(O.mB, { className: "tw--mx-3" }),
                    (0, a.jsx)(O.I, {
                      className: "tw-flex tw-flex-col",
                      children: (0, a.jsx)(O._2, {
                        asChild: !0,
                        icon: A.A.box,
                        children: (0, a.jsx)(L.N, {
                          "data-pw": M.l.LANDING.WALLET.MENU.EXPLORER_BUTTON,
                          href: X,
                          onClick: () => {
                            _({
                              eventName: F.J$.VIEW_EXPLORER,
                              properties: {
                                funnel: "wallet-button-dropdown",
                                link: X,
                              },
                            });
                          },
                          rel: "noopener noreferrer",
                          target: "_blank",
                          children: "View on Explorer",
                        }),
                      }),
                    }),
                    y.Kn &&
                      (0, a.jsxs)(O.I, {
                        className: "tw-flex tw-flex-col",
                        children: [
                          (0, a.jsx)(O._2, {
                            icon: A.A.settings,
                            children: (0, a.jsxs)("span", {
                              className:
                                "tw-flex tw-w-full tw-items-center tw-justify-between",
                              children: [
                                (0, a.jsx)(v.J, {
                                  className: "tw-text-secondary",
                                  htmlFor: "testnet-switch",
                                  children: "Testnet mode",
                                }),
                                (0, a.jsx)(R.d, {
                                  checked: x,
                                  id: "testnet-switch",
                                  onClick: (t) => {
                                    t.stopPropagation(),
                                      I(!x),
                                      window.location.reload();
                                  },
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)(O._2, {
                            icon: A.A.settings,
                            onClick: () => T(!0),
                            children: (0, a.jsxs)("span", {
                              className:
                                "tw-flex tw-w-full tw-items-center tw-justify-between",
                              children: [
                                (0, a.jsx)("span", {
                                  className: "tw-text-secondary",
                                  children: "Fork mode",
                                }),
                                y.P6 &&
                                  (0, a.jsx)("span", {
                                    className:
                                      "tw-size-2 tw-rounded-full tw-bg-success",
                                  }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    (0, a.jsx)(O.mB, { className: "tw--mx-3" }),
                    (0, a.jsx)(O.I, {
                      className: "tw-flex tw-flex-col",
                      children: (0, a.jsx)(O._2, {
                        "data-pw":
                          M.l.LANDING.WALLET.MENU.DISCONNECT_WALLET_BUTTON,
                        error: !0,
                        icon: A.A.logout,
                        onClick: () => {
                          z(),
                            _({ eventName: F.J$.DISCONNECT_WALLET }),
                            (0, n.CI)({ redirect: !1 });
                        },
                        children: "Disconnect wallet",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(C, { onOpenChange: T, open: f }),
          ],
        });
      };
      function G(t) {
        let {
            className: e,
            label: r,
            hideAvatar: n,
            skeletonClassName: i,
            variant: l,
          } = t,
          c = (0, m.F)(),
          { currentAccount: d, loading: u, status: w } = (0, j.sA)(),
          p = (0, o.Xr)(W.b),
          { setOpen: g, openSIWE: N } = (0, s.hS)(),
          { isMobileSmall: f } = (0, U.Q)();
        if (u)
          return (0, a.jsx)(S.E, {
            className: (0, B.cn)(
              "tw-h-9 tw-w-full tw-min-w-[138px] tw-rounded-full",
              i,
              f && "tw-w-9 tw-min-w-min"
            ),
          });
        if ("authenticated" !== w) {
          var T, b;
          return (0, a.jsx)(h.Button, {
            className: (0, B.cn)("tw-h-9 tw-w-full md:tw-h-10", e),
            "data-pw": M.l.LANDING.WALLET.CONNECT_WALLET_BUTTON,
            onClick: () => {
              c.address ? N(!1) : g(!0), p({ eventName: F.J$.CONNECT_WALLET });
            },
            size: null != (T = null == l ? void 0 : l.size) ? T : "default",
            variant:
              null != (b = null == l ? void 0 : l.variant) ? b : "default",
            children: null != r ? r : "Connect wallet",
          });
        }
        return (0, a.jsx)(s.Lw.Custom, {
          children: (t) => {
            let { ensName: r } = t;
            return (0, a.jsx)(z, {
              account: {
                address: d,
                displayName: null != r ? r : (0, P.$)(d, 4, 4),
              },
              className: e,
              hideAvatar: n,
              wagmiAccount: c,
            });
          },
        });
      }
    },
    64148: (t, e, r) => {
      r.d(e, { E: () => c, e: () => l });
      var a = r(54568),
        n = r(615),
        i = r(7620),
        s = r(77804),
        o = r(29768);
      let l = (0, n.F)(
          "tw-inline-flex tw-items-center tw-justify-center tw-border tw-text-sm tw-font-medium tw-transition-colors",
          {
            compoundVariants: [
              {
                className: "tw-text-utility-brand-500",
                size: "icon",
                variant: "secondary",
              },
              {
                className: "tw-text-utility-error-500",
                size: "icon",
                variant: "destructive",
              },
              {
                className: "tw-text-utility-warning-500",
                size: "icon",
                variant: "warning",
              },
              {
                className: "tw-text-utility-success-500",
                size: "icon",
                variant: "success",
              },
              {
                className: "tw-text-utility-brand-500",
                size: "icon-sm",
                variant: "secondary",
              },
              {
                className: "tw-text-utility-error-500",
                size: "icon-sm",
                variant: "destructive",
              },
              {
                className: "tw-text-utility-warning-500",
                size: "icon-sm",
                variant: "warning",
              },
              {
                className: "tw-text-utility-success-500",
                size: "icon-sm",
                variant: "success",
              },
              {
                className: "tw-text-utility-brand-500",
                size: "icon-lg",
                variant: "secondary",
              },
              {
                className: "tw-text-utility-error-500",
                size: "icon-lg",
                variant: "destructive",
              },
              {
                className: "tw-text-utility-warning-500",
                size: "icon-lg",
                variant: "warning",
              },
              {
                className: "tw-text-utility-success-500",
                size: "icon-lg",
                variant: "success",
              },
              { className: "tw-rounded-sm", radius: "sm", size: "default" },
              { className: "tw-rounded-sm", radius: "sm", size: "sm" },
              { className: "tw-rounded-md", radius: "md", size: "lg" },
              { className: "tw-rounded-sm", radius: "sm", size: "icon" },
              { className: "tw-rounded-sm", radius: "sm", size: "icon-sm" },
              { className: "tw-rounded-md", radius: "md", size: "icon-lg" },
            ],
            defaultVariants: {
              radius: "full",
              shadow: "default",
              size: "default",
              variant: "default",
              withCircle: !1,
            },
            variants: {
              radius: {
                full: "tw-rounded-full",
                md: "tw-rounded-md",
                sm: "tw-rounded-sm",
              },
              shadow: {
                default: "tw-shadow-none",
                glow: "tw-text-tertiary tw-shadow-badge",
              },
              size: {
                default: "tw-h-6 tw-px-2.5 tw-py-1",
                icon: "tw-size-6 tw-p-1.5 tw-text-utility-gray-500",
                "icon-lg": "tw-size-7 tw-p-2 tw-text-utility-gray-500",
                "icon-sm": "tw-size-5 tw-p-1 tw-text-utility-gray-500",
                lg: "tw-h-7 tw-px-3 tw-py-2",
                sm: "tw-h-5 tw-px-2 tw-py-px !tw-text-xs",
              },
              variant: {
                default:
                  "tw-border-utility-gray-200 tw-bg-utility-gray-50 tw-text-utility-gray-700",
                destructive:
                  "tw-border-utility-error-200 tw-bg-utility-error-50 tw-text-utility-error-700",
                secondary:
                  "tw-border-utility-brand-200 tw-bg-utility-brand-50 tw-text-utility-brand-700",
                success:
                  "tw-border-utility-success-200 tw-bg-utility-success-50 tw-text-utility-success-700",
                warning:
                  "tw-border-utility-warning-200 tw-bg-utility-warning-50 tw-text-utility-warning-700",
              },
              withCircle: { false: "", true: "tw-flex tw-items-center" },
            },
          }
        ),
        c = i.forwardRef((t, e) => {
          let {
              className: r,
              variant: n = "default",
              size: i = "default",
              withCircle: c = !1,
              radius: d = "full",
              shadow: u = "default",
              icon: w,
              iconPosition: m = "left",
              symbol: p,
              children: g,
              ...N
            } = t,
            f = {
              default: "tw-text-utility-gray-500",
              destructive: "tw-text-utility-error-500",
              secondary: "tw-text-utility-brand-500",
              success: "tw-text-utility-success-500",
              warning: "tw-text-utility-warning-500",
            },
            h =
              void 0 === w
                ? ""
                : "default" === i
                ? "left" === m
                  ? "tw-pl-2"
                  : "tw-pr-2"
                : "sm" === i
                ? "left" === m
                  ? "tw-pl-1.5"
                  : "tw-pr-1.5"
                : "lg" === i
                ? "left" === m
                  ? "tw-pl-2.5"
                  : "tw-pr-2.5"
                : "",
            T =
              void 0 === p
                ? ""
                : "default" === i
                ? "left" === m
                  ? "tw-pl-1"
                  : "tw-pr-1"
                : "sm" === i
                ? "left" === m
                  ? "tw-pl-0.5"
                  : "tw-pr-0.5"
                : "lg" === i
                ? "left" === m
                  ? "tw-pl-1.5"
                  : "tw-pr-1.5"
                : "";
          return (0, a.jsxs)("div", {
            className: (0, o.cn)(
              l({ radius: d, shadow: u, size: i, variant: n, withCircle: c }),
              r,
              w ? "tw-flex tw-items-center" : "",
              c ? ("sm" === i ? "tw-gap-1" : "tw-gap-2") : "",
              w ? "tw-gap-1" : "",
              w && h,
              p ? ("sm" === i ? "tw-gap-1" : "tw-gap-1.5") : "",
              p && T
            ),
            ref: e,
            ...N,
            children: [
              c &&
                (0, a.jsx)("span", {
                  className: (0, o.cn)(
                    "tw-inline-block tw-size-2 tw-rounded-full",
                    {
                      default: "tw-bg-utility-gray-500",
                      destructive: "tw-bg-utility-error-500",
                      secondary: "tw-bg-utility-brand-500",
                      success: "tw-bg-utility-success-500",
                      warning: "tw-bg-utility-warning-500",
                    }[null != n ? n : "default"]
                  ),
                }),
              w &&
                "left" === m &&
                (0, a.jsx)(w, {
                  className: (0, o.cn)(
                    "tw-size-3",
                    f[null != n ? n : "default"]
                  ),
                }),
              p && "left" === m && (0, a.jsx)(s.xz, { size: 16, symbol: p }),
              g,
              w &&
                "right" === m &&
                (0, a.jsx)(w, {
                  className: (0, o.cn)(
                    "tw-size-3",
                    f[null != n ? n : "default"]
                  ),
                }),
              p && "right" === m && (0, a.jsx)(s.xz, { size: 16, symbol: p }),
            ],
          });
        });
      c.displayName = "Badge";
    },
    64595: (t, e, r) => {
      r.d(e, { d: () => o });
      var a = r(54568),
        n = r(95145),
        i = r(7620),
        s = r(29768);
      let o = i.forwardRef((t, e) => {
        let { className: r, ...i } = t;
        return (0, a.jsx)(n.bL, {
          className: (0, s.cn)(
            "tw-peer tw-inline-flex tw-h-5 tw-w-9 tw-shrink-0 tw-cursor-pointer tw-items-center tw-rounded-full tw-border tw-border-border tw-bg-background-tertiary tw-shadow-secondary tw-outline-none tw-transition-colors data-[state=checked]:tw-border-border-brand-solid data-[state=checked]:tw-bg-background-brand-solid hover:tw-bg-background-hover data-[state=checked]:hover:tw-bg-background-brand-solid-hover focus:tw-shadow-button-focus-gray data-[state=checked]:focus:tw-shadow-button-focus-simple disabled:tw-cursor-not-allowed disabled:tw-bg-background-disabled",
            r
          ),
          ...i,
          ref: e,
          children: (0, a.jsx)(n.zi, {
            className: (0, s.cn)(
              "tw-pointer-events-none tw-block tw-size-4 tw-rounded-full tw-bg-foreground-white tw-shadow-switch tw-transition-transform data-[state=checked]:tw-translate-x-4 data-[state=unchecked]:tw-translate-x-0",
              i.disabled && "tw-bg-toggle-button"
            ),
          }),
        });
      });
      o.displayName = n.bL.displayName;
    },
    65165: (t, e, r) => {
      r.d(e, { p: () => o });
      var a = r(54568),
        n = r(7620),
        i = r(92555),
        s = r(29768);
      let o = n.forwardRef((t, e) => {
        let {
            className: r,
            id: o,
            type: l,
            label: c,
            hint: d,
            icon: u,
            iconPosition: w = "left",
            isError: m,
            wrapperAttributes: p,
            iconClassName: g,
            ...N
          } = t,
          f = "left" === w;
        return (0, a.jsxs)(n.Fragment, {
          children: [
            c &&
              (0, a.jsx)(i.J, {
                htmlFor: null != o ? o : "_input",
                children: c,
              }),
            (0, a.jsxs)("span", {
              className: (0, s.cn)(
                "tw-relative tw-flex tw-flex-col tw-gap-1.5",
                null == p ? void 0 : p.className
              ),
              children: [
                u &&
                  (0, a.jsx)(u, {
                    className: (0, s.cn)(
                      "tw-absolute tw-top-1/2 tw-size-4 -tw-translate-y-1/2 tw-text-foreground-quaternary",
                      f ? "tw-left-3" : "tw-right-3",
                      g
                    ),
                  }),
                (0, a.jsx)("input", {
                  className: (0, s.cn)(
                    "tw-flex tw-h-10 tw-w-full tw-rounded-md tw-border tw-border-border tw-bg-background tw-px-3 tw-py-2 tw-text-sm tw-text-primary tw-shadow-input tw-transition-colors placeholder:tw-text-sm placeholder:tw-text-placeholder hover:tw-bg-background-hover focus-visible:tw-border-border-brand focus-visible:tw-outline-none disabled:tw-cursor-not-allowed disabled:tw-opacity-50",
                    r,
                    u && f && "tw-pl-8",
                    u && !f && "tw-pr-8",
                    m && "!tw-border-error"
                  ),
                  ref: e,
                  type: l,
                  ...N,
                }),
                d &&
                  (0, a.jsx)("span", {
                    className: (0, s.cn)(
                      "tw-absolute tw-top-full tw-mt-1.5 tw-text-sm tw-font-normal tw-text-tertiary",
                      m && "tw-text-error"
                    ),
                    children: d,
                  }),
              ],
            }),
          ],
        });
      });
      o.displayName = "Input";
    },
    77804: (t, e, r) => {
      r.d(e, { Cn: () => u, lt: () => l, xz: () => d });
      var a = r(54568),
        n = r(61773),
        i = r(7620),
        s = r(29768);
      let o = i.forwardRef((t, e) => {
        let { symbol: r, size: n = 50 } = t;
        return (0, a.jsxs)("svg", {
          height: n,
          id: "Group_30952",
          ref: e,
          viewBox: "0 0 ".concat(256, " ").concat(256),
          width: n,
          children: [
            (0, a.jsxs)("title", { children: [r, " token icon"] }),
            (0, a.jsxs)("defs", {
              id: "defs10",
              children: [
                (0, a.jsxs)("linearGradient", {
                  gradientUnits: "objectBoundingBox",
                  id: "linear-gradient",
                  x1: ".843",
                  x2: ".206",
                  y1: ".135",
                  y2: ".886",
                  children: [
                    (0, a.jsx)("stop", {
                      id: "stop2",
                      offset: "0",
                      stopColor: "#b6509e",
                    }),
                    (0, a.jsx)("stop", {
                      id: "stop4",
                      offset: "1",
                      stopColor: "#2ebac6",
                    }),
                  ],
                }),
                (0, a.jsx)("linearGradient", {
                  id: "linear-gradient-2",
                  x1: ".907",
                  x2: ".163",
                  y1: ".227",
                  y2: ".853",
                }),
              ],
            }),
            (0, a.jsxs)("g", {
              id: "Group_29109",
              children: [
                (0, a.jsx)("path", {
                  d: "M128 256a128.976 128.976 0 0 1-25.8-2.6 127.309 127.309 0 0 1-45.77-19.261 128.366 128.366 0 0 1-46.375-56.315A127.357 127.357 0 0 1 2.6 153.8a129.251 129.251 0 0 1 0-51.593 127.31 127.31 0 0 1 19.26-45.77 128.372 128.372 0 0 1 56.317-46.378A127.33 127.33 0 0 1 102.2 2.6a129.244 129.244 0 0 1 51.593 0 127.308 127.308 0 0 1 45.77 19.26 128.367 128.367 0 0 1 46.375 56.316A127.343 127.343 0 0 1 253.4 102.2a129.248 129.248 0 0 1 0 51.593 127.3 127.3 0 0 1-19.26 45.77 128.382 128.382 0 0 1-56.316 46.375A127.4 127.4 0 0 1 153.8 253.4 128.977 128.977 0 0 1 128 256zm0-242.287a115.145 115.145 0 0 0-23.033 2.322A113.657 113.657 0 0 0 64.1 33.232a114.622 114.622 0 0 0-41.4 50.283 113.7 113.7 0 0 0-6.659 21.452 115.4 115.4 0 0 0 0 46.065 113.66 113.66 0 0 0 17.2 40.866 114.627 114.627 0 0 0 50.282 41.407 113.75 113.75 0 0 0 21.453 6.658 115.381 115.381 0 0 0 46.065 0 113.609 113.609 0 0 0 40.866-17.2 114.622 114.622 0 0 0 41.393-50.278 113.741 113.741 0 0 0 6.659-21.453 115.4 115.4 0 0 0 0-46.065 113.662 113.662 0 0 0-17.2-40.865A114.619 114.619 0 0 0 172.485 22.7a113.74 113.74 0 0 0-21.453-6.659A115.145 115.145 0 0 0 128 13.714z",
                  fill: "url(#linear-gradient)",
                  id: "Subtraction_108",
                }),
                r &&
                  (0, a.jsx)("image", {
                    height: "206",
                    href: "/images/common/tokens/".concat(
                      r.toLowerCase(),
                      ".svg"
                    ),
                    width: "206",
                    x: "25",
                    y: "25",
                  }),
              ],
            }),
          ],
        });
      });
      function l(t) {
        let { symbol: e, onImageGenerated: r, aToken: n } = t,
          s = i.useRef(null),
          l = i.useRef(null),
          [c, d] = i.useState(!0);
        return (
          i.useEffect(() => {
            if (c) return;
            let t = s.current;
            if (!t || !(t instanceof HTMLObjectElement)) return;
            let e = t.contentDocument;
            if (n) {
              var a;
              let t = null == e ? void 0 : e.childNodes[0];
              if (!t) return;
              if (!(t instanceof Element))
                return void console.error("Expected an Element but got:", t);
              let n = t.getAttribute("width"),
                i = t.getAttribute("height"),
                s = t.getAttribute("viewBox");
              t.setAttribute("x", "25"),
                t.setAttribute("width", "206"),
                t.setAttribute("y", "25"),
                t.setAttribute("height", "206"),
                s || t.setAttribute("viewBox", "0 0 ".concat(n, " ").concat(i)),
                null == (a = l.current) || a.appendChild(t);
              let o = new XMLSerializer().serializeToString(l.current);
              r(
                "data:image/svg+xml;base64,".concat(
                  window.btoa(unescape(encodeURIComponent(o)))
                )
              );
            } else {
              let t = new XMLSerializer().serializeToString(e);
              r(
                "data:image/svg+xml;base64,".concat(
                  window.btoa(unescape(encodeURIComponent(t)))
                )
              );
            }
          }, [c, n, r]),
          (0, a.jsxs)("div", {
            style: {
              height: 0,
              overflow: "hidden",
              visibility: "hidden",
              width: 0,
            },
            children: [
              (0, a.jsx)("object", {
                "aria-label": "token-icon",
                data: "/images/common/tokens/".concat(e.toLowerCase(), ".svg"),
                id: "svg",
                onLoad: () => d(!1),
                ref: s,
                style: { opacity: 1 },
                title: "token-icon",
              }),
              (0, a.jsx)("span", {
                className: "tw-sr-only",
                children: "token icon for adding in wallet",
              }),
              n && (0, a.jsx)(o, { ref: l }),
            ],
          })
        );
      }
      function c(t) {
        let {
            symbol: e = "default",
            aToken: r,
            wrapperClassName: l,
            className: c,
            size: d,
          } = t,
          [u, w] = i.useState(e.toLowerCase());
        return (
          i.useEffect(() => {
            w(e.toLowerCase());
          }, [e]),
          (0, a.jsx)("span", {
            className: (0, s.cn)("tw-relative tw-flex tw-rounded-full", l),
            children: r
              ? (0, a.jsx)(o, { size: d, symbol: u })
              : (0, a.jsx)(n.default, {
                  alt: "".concat(e, " icon"),
                  className: (0, s.cn)("tw-rounded-full", c),
                  height: null != d ? d : 40,
                  onError: () => w("default"),
                  src: "/images/common/tokens/".concat(u, ".svg"),
                  width: null != d ? d : 40,
                }),
          })
        );
      }
      function d(t) {
        let { symbol: e = "default", ...r } = t;
        if (e.split("_").length > 1)
          throw Error("TokenIcon multi token not supported");
        return (0, a.jsx)(c, { symbol: e, ...r });
      }
      function u(t) {
        let {
            symbol: e,
            logoURI: r,
            size: o,
            wrapperClassName: l,
            className: c,
          } = t,
          [d, u] = i.useState(e.toLowerCase());
        return (0, a.jsx)("span", {
          className: (0, s.cn)("tw-relative tw-flex tw-rounded-full", l),
          children: (0, a.jsx)(n.default, {
            alt: "".concat(e, " icon"),
            className: (0, s.cn)("tw-rounded-full", c),
            height: null != o ? o : 40,
            onError: () => u("default"),
            src: "default" !== d && r ? r : "/images/common/tokens/default.svg",
            width: null != o ? o : 40,
          }),
        });
      }
      o.displayName = "ATokenIcon";
    },
    90264: (t, e, r) => {
      r.d(e, { Separator: () => o });
      var a = r(54568),
        n = r(7297),
        i = r(7620),
        s = r(29768);
      let o = i.forwardRef((t, e) => {
        let {
          className: r,
          orientation: i = "horizontal",
          decorative: o = !0,
          ...l
        } = t;
        return (0, a.jsx)(n.b, {
          className: (0, s.cn)(
            "tw-shrink-0 tw-bg-border",
            "horizontal" === i ? "tw-h-px tw-w-full" : "tw-h-full tw-w-px",
            r
          ),
          decorative: o,
          orientation: i,
          ref: e,
          ...l,
        });
      });
      o.displayName = n.b.displayName;
    },
    92555: (t, e, r) => {
      r.d(e, { J: () => c });
      var a = r(54568),
        n = r(56559),
        i = r(615),
        s = r(7620),
        o = r(29768);
      let l = (0, i.F)(
          "tw-cursor-pointer tw-text-sm tw-font-medium tw-text-secondary peer-disabled:tw-cursor-not-allowed peer-disabled:tw-opacity-70"
        ),
        c = s.forwardRef((t, e) => {
          let { className: r, ...i } = t;
          return (0, a.jsx)(n.b, {
            className: (0, o.cn)(l(), r),
            ref: e,
            ...i,
          });
        });
      c.displayName = n.b.displayName;
    },
  },
]);
