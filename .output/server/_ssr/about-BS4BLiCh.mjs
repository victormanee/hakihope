import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { C as Heart, c as ShieldCheck, o as Sparkles } from "../_libs/lucide-react.mjs";
import { t as SiteNav } from "./site-nav-BS29GeCV.mjs";
import { t as SiteFooter } from "./site-footer-BkHNQSCw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BS4BLiCh.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b bg-muted/30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-4 sm:px-6 py-16 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold text-hope uppercase tracking-wider",
							children: "Our mission"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 text-4xl sm:text-5xl font-bold tracking-tight",
							children: "Justice should never depend on income."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-muted-foreground text-lg",
							children: "HakiHope was built to close the justice gap in Kenya. Too many people never know their rights or meet a lawyer. We combine AI, verified advocates, and plain-language law so anyone — anywhere — can act with confidence."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-5xl px-4 sm:px-6 py-16 grid gap-6 sm:grid-cols-3 flex-1",
				children: [
					{
						icon: Heart,
						title: "Human-centered",
						desc: "We start with the person, not the paperwork."
					},
					{
						icon: ShieldCheck,
						title: "Trust by default",
						desc: "Every advocate is verified. Every conversation is private."
					},
					{
						icon: Sparkles,
						title: "Hope through tech",
						desc: "AI turns complex law into next steps, in minutes."
					}
				].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border bg-card p-6 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold mb-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold",
							children: v.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: v.desc
						})
					]
				}, v.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { AboutPage as component };
