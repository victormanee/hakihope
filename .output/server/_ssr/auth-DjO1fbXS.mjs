import { a as __toESM } from "../_runtime.mjs";
import { s as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { n as HakiWordmark, t as Button } from "./button-Bcc3N_sy.mjs";
import { t as supabase } from "./client-DRlxTRRD.mjs";
import { _ as useSearch, g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as Scale, x as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as SiteNav } from "./site-nav-BS29GeCV.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Input } from "./input-B-7o0D0J.mjs";
import { t as Label } from "./label-vFUv3geJ.mjs";
import { t as createLovableAuth } from "../_libs/lovable.dev__cloud-auth-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-DjO1fbXS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var lovableAuth = createLovableAuth();
var lovable = { auth: { signInWithOAuth: async (provider, opts) => {
	const result = await lovableAuth.signInWithOAuth(provider, {
		redirect_uri: opts?.redirect_uri,
		extraParams: { ...opts?.extraParams }
	});
	if (result.redirected) return result;
	if (result.error) return result;
	try {
		await supabase.auth.setSession(result.tokens);
	} catch (e) {
		return { error: e instanceof Error ? e : new Error(String(e)) };
	}
	return result;
} } };
function AuthPage() {
	const search = useSearch({ from: "/auth" });
	const navigate = useNavigate();
	const [mode, setMode] = (0, import_react.useState)(search.mode ?? "login");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data }) => {
			if (data.session) navigate({ to: "/dashboard" });
		});
	}, [navigate]);
	async function handleGoogle() {
		setBusy(true);
		const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
		if (result.error) {
			toast.error("Google sign-in failed", { description: result.error.message });
			setBusy(false);
			return;
		}
		if (result.redirected) return;
		navigate({ to: "/dashboard" });
	}
	async function handleSubmit(e) {
		e.preventDefault();
		setBusy(true);
		try {
			if (mode === "signup") {
				const { error } = await supabase.auth.signUp({
					email,
					password,
					options: {
						emailRedirectTo: `${window.location.origin}/dashboard`,
						data: { full_name: name }
					}
				});
				if (error) throw error;
				toast.success("Welcome to HakiHope!");
				navigate({ to: "/dashboard" });
			} else {
				const { error } = await supabase.auth.signInWithPassword({
					email,
					password
				});
				if (error) throw error;
				toast.success("Welcome back");
				navigate({ to: "/dashboard" });
			}
		} catch (err) {
			toast.error(mode === "signup" ? "Sign up failed" : "Sign in failed", { description: err instanceof Error ? err.message : "Please try again." });
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-muted/30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "flex-1 flex items-center justify-center px-4 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-center mb-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HakiWordmark, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-2xl font-bold tracking-tight",
								children: mode === "signup" ? "Create your account" : "Welcome back"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: mode === "signup" ? "Start with free AI guidance in seconds." : "Sign in to continue your journey."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6 shadow-soft space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								onClick: handleGoogle,
								disabled: busy,
								className: "w-full h-11",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									viewBox: "0 0 24 24",
									className: "h-4 w-4 mr-2",
									"aria-hidden": true,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											fill: "#4285F4",
											d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.75h3.57c2.08-1.92 3.28-4.74 3.28-8.07z"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											fill: "#34A853",
											d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.75c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.28-1.93-6.14-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											fill: "#FBBC05",
											d: "M5.86 14.12A6.98 6.98 0 0 1 5.5 12c0-.74.13-1.46.36-2.12V7.04H2.18A11 11 0 0 0 1 12c0 1.77.43 3.45 1.18 4.96l3.68-2.84z"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											fill: "#EA4335",
											d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.04l3.68 2.84C6.72 7.31 9.14 5.38 12 5.38z"
										})
									]
								}), "Continue with Google"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 flex items-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-full border-t" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative flex justify-center text-xs uppercase",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "bg-card px-2 text-muted-foreground",
										children: "Or with email"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleSubmit,
								className: "space-y-4",
								children: [
									mode === "signup" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "name",
											children: "Full name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "name",
											value: name,
											onChange: (e) => setName(e.target.value),
											required: true,
											maxLength: 100
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "email",
											children: "Email"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "email",
											type: "email",
											value: email,
											onChange: (e) => setEmail(e.target.value),
											required: true,
											maxLength: 255
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "password",
											children: "Password"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "password",
											type: "password",
											value: password,
											onChange: (e) => setPassword(e.target.value),
											required: true,
											minLength: 8,
											maxLength: 72
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										className: "w-full h-11 bg-primary hover:bg-primary/90",
										disabled: busy,
										children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : mode === "signup" ? "Create account" : "Sign in"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-center text-sm text-muted-foreground",
								children: [
									mode === "signup" ? "Already have an account?" : "New to HakiHope?",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "text-primary font-medium hover:underline",
										onClick: () => setMode((m) => m === "signup" ? "login" : "signup"),
										children: mode === "signup" ? "Sign in" : "Create one"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-center text-xs text-muted-foreground flex items-center justify-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, { className: "h-3 w-3" }), " Justice Within Reach."]
					})
				]
			})
		})]
	});
}
//#endregion
export { AuthPage as component };
