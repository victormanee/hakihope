import { a as __toESM } from "../_runtime.mjs";
import { s as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { n as HakiWordmark, t as Button } from "./button-Bcc3N_sy.mjs";
import { t as supabase } from "./client-DRlxTRRD.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as LayoutDashboard, _ as Menu, b as LogOut, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-nav-BS29GeCV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/find-lawyer",
		label: "Find Lawyer"
	},
	{
		to: "/rights",
		label: "Know Your Rights"
	},
	{
		to: "/ai",
		label: "Haki AI"
	},
	{
		to: "/resources",
		label: "Resources"
	},
	{
		to: "/emergency",
		label: "Emergency"
	},
	{
		to: "/about",
		label: "About"
	}
];
function SiteNav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [userEmail, setUserEmail] = (0, import_react.useState)(null);
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data }) => setUserEmail(data.session?.user.email ?? null));
		const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
			setUserEmail(session?.user.email ?? null);
		});
		return () => sub.subscription.unsubscribe();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 w-full border-b border-border/60 glass-panel",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HakiWordmark, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-1",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:bg-accent/60",
						activeProps: { className: "text-primary bg-accent/60" },
						activeOptions: { exact: l.to === "/" },
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:flex items-center gap-2",
					children: userEmail ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/dashboard",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, { className: "h-4 w-4 mr-1.5" }), "Dashboard"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: async () => {
							await supabase.auth.signOut();
							navigate({ to: "/" });
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4 mr-1.5" }), "Sign out"]
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/auth",
							children: "Log in"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						asChild: true,
						className: "bg-primary hover:bg-primary/90",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/auth",
							search: { mode: "signup" },
							children: "Sign up"
						})
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-accent",
					onClick: () => setOpen((v) => !v),
					"aria-label": "Toggle menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:hidden border-t border-border/60 bg-background/95 backdrop-blur px-4 py-4 space-y-1",
			children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: l.to,
				onClick: () => setOpen(false),
				className: "block rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-accent",
				children: l.label
			}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pt-2 flex flex-col gap-2",
				children: userEmail ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/dashboard",
						onClick: () => setOpen(false),
						children: "Dashboard"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: async () => {
						await supabase.auth.signOut();
						setOpen(false);
						navigate({ to: "/" });
					},
					children: "Sign out"
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/auth",
						onClick: () => setOpen(false),
						children: "Log in"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/auth",
						search: { mode: "signup" },
						onClick: () => setOpen(false),
						children: "Sign up"
					})
				})] })
			})]
		})]
	});
}
//#endregion
export { SiteNav as t };
