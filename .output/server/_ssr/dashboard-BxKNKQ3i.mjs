import { a as __toESM } from "../_runtime.mjs";
import { s as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { t as Button } from "./button-Bcc3N_sy.mjs";
import { t as supabase } from "./client-C6ZaJElq.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as FileText, d as Search, h as MessageSquare, o as Sparkles } from "../_libs/lucide-react.mjs";
import { t as SiteNav } from "./site-nav-598PGVWw.mjs";
import { t as SiteFooter } from "./site-footer-BkHNQSCw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-BxKNKQ3i.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Dashboard() {
	const navigate = useNavigate();
	const [email, setEmail] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data }) => {
			if (!data.session) navigate({
				to: "/auth",
				search: { redirect: "/dashboard" }
			});
			else setEmail(data.session.user.email ?? null);
		});
	}, [navigate]);
	if (!email) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 sm:px-6 py-12 flex-1 w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-gold" }), " Welcome back"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-3xl font-bold tracking-tight",
						children: email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: "Where would you like to go next?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						children: [
							{
								icon: MessageSquare,
								title: "Continue with Haki AI",
								desc: "Pick up a conversation or start a new one.",
								to: "/ai",
								cta: "Open Haki AI"
							},
							{
								icon: Search,
								title: "Find a Lawyer",
								desc: "Browse verified advocates by county and area.",
								to: "/find-lawyer",
								cta: "Browse lawyers"
							},
							{
								icon: FileText,
								title: "Know Your Rights",
								desc: "Search Kenyan law by topic, in plain language.",
								to: "/rights",
								cta: "Learn"
							}
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border bg-card p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-semibold",
									children: t.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: t.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									className: "mt-5 w-full bg-primary hover:bg-primary/90",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: t.to,
										children: t.cta
									})
								})
							]
						}, t.title))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Dashboard as component };
