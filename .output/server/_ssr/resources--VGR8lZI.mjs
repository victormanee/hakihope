import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { M as BookOpen, T as GraduationCap, k as Download, n as Video } from "../_libs/lucide-react.mjs";
import { t as SiteNav } from "./site-nav-BS29GeCV.mjs";
import { t as SiteFooter } from "./site-footer-BkHNQSCw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources--VGR8lZI.js
var import_jsx_runtime = require_jsx_runtime();
var items = [
	{
		icon: Download,
		title: "Demand Letter Templates",
		desc: "Free templates for employment, land, and consumer disputes."
	},
	{
		icon: BookOpen,
		title: "Court Preparation Checklists",
		desc: "What to bring, what to say, and how to conduct yourself."
	},
	{
		icon: Video,
		title: "Explainer Videos",
		desc: "Short videos on your rights, in English and Kiswahili."
	},
	{
		icon: GraduationCap,
		title: "Legal Aid Directory",
		desc: "Verified NGOs and organizations offering free legal help."
	}
];
function ResourcesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b bg-muted/30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 py-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold text-hope uppercase tracking-wider",
							children: "Resources"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 text-3xl sm:text-4xl font-bold tracking-tight",
							children: "Everything you need, free"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground max-w-2xl",
							children: "Templates, guides, videos, and a curated directory of legal aid partners across Kenya."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 py-14 flex-1 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/ai",
					className: "rounded-2xl border bg-card p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i.icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-semibold",
							children: i.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: i.desc
						})
					]
				}, i.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { ResourcesPage as component };
