import { a as __toESM } from "../_runtime.mjs";
import { s as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { t as Button } from "./button-Bcc3N_sy.mjs";
import { t as supabase } from "./client-DRlxTRRD.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Heart, E as Funnel, a as Star, c as ShieldCheck, d as Search, n as Video, v as MapPin } from "../_libs/lucide-react.mjs";
import { t as SiteNav } from "./site-nav-BS29GeCV.mjs";
import { t as SiteFooter } from "./site-footer-BkHNQSCw.mjs";
import { t as Input } from "./input-B-7o0D0J.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/find-lawyer-CxHeBEbO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FindLawyer() {
	const [q, setQ] = (0, import_react.useState)("");
	const [county, setCounty] = (0, import_react.useState)("");
	const [area, setArea] = (0, import_react.useState)("");
	const { data: lawyers = [], isLoading } = useQuery({
		queryKey: ["lawyers"],
		queryFn: async () => {
			const { data, error } = await supabase.from("lawyers").select("*").order("rating", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	const counties = (0, import_react.useMemo)(() => Array.from(new Set(lawyers.map((l) => l.county))).sort(), [lawyers]);
	const areas = (0, import_react.useMemo)(() => Array.from(new Set(lawyers.flatMap((l) => l.practice_areas))).sort(), [lawyers]);
	const filtered = lawyers.filter((l) => {
		const matchesQ = !q || l.full_name.toLowerCase().includes(q.toLowerCase()) || l.firm?.toLowerCase().includes(q.toLowerCase());
		const matchesC = !county || l.county === county;
		const matchesA = !area || l.practice_areas.includes(area);
		return matchesQ && matchesC && matchesA;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b bg-muted/30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold text-hope uppercase tracking-wider",
							children: "Find a Lawyer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 text-3xl sm:text-4xl font-bold tracking-tight",
							children: "Verified advocates, ready to help"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground max-w-2xl",
							children: "Every advocate is verified against the Law Society of Kenya. Filter by county, practice area, and language."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid gap-3 sm:grid-cols-[1fr_200px_200px_auto]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										placeholder: "Search by name or firm",
										value: q,
										onChange: (e) => setQ(e.target.value),
										className: "pl-9 h-11"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: county,
									onChange: (e) => setCounty(e.target.value),
									className: "h-11 rounded-md border border-input bg-background px-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "All counties"
									}), counties.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: c,
										children: c
									}, c))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: area,
									onChange: (e) => setArea(e.target.value),
									className: "h-11 rounded-md border border-input bg-background px-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "All practice areas"
									}), areas.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: a,
										children: a
									}, a))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									className: "h-11",
									onClick: () => {
										setQ("");
										setCounty("");
										setArea("");
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-4 w-4 mr-2" }), "Reset"]
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 py-12 flex-1 w-full",
				children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
					children: [...Array(6)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rounded-2xl border bg-card p-6 h-64 animate-pulse" }, i))
				}) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center py-24 text-muted-foreground",
					children: "No lawyers match your filters yet."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 text-sm text-muted-foreground",
					children: [
						filtered.length,
						" verified advocate",
						filtered.length === 1 ? "" : "s"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
					children: filtered.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group rounded-2xl border border-border/70 bg-card p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground flex items-center justify-center font-semibold",
										children: l.full_name.split(" ").map((n) => n[0]).slice(0, 2).join("")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold leading-tight",
										children: l.full_name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: l.firm
									})] })]
								}), l.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									title: "Law Society verified",
									className: "inline-flex items-center gap-1 text-xs text-hope",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center gap-2 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }),
									" ",
									l.county,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mx-1",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 text-gold fill-gold" }),
									" ",
									l.rating.toFixed(1),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs",
										children: [
											"(",
											l.reviews_count,
											")"
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-1.5",
								children: l.practice_areas.slice(0, 3).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs rounded-full bg-accent px-2.5 py-0.5 text-accent-foreground",
									children: a
								}, a))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-muted-foreground line-clamp-2",
								children: l.bio
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: "Consultation"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold",
									children: l.offers_pro_bono && l.consultation_fee_kes === 0 ? "Pro bono" : `KES ${l.consultation_fee_kes.toLocaleString()}`
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [l.offers_video && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										title: "Video consultation",
										className: "text-muted-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "h-4 w-4" })
									}), l.offers_pro_bono && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										title: "Pro bono friendly",
										className: "text-hope",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4" })
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "mt-5 w-full bg-primary hover:bg-primary/90",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/auth",
									children: "Book consultation"
								})
							})
						]
					}, l.id))
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { FindLawyer as component };
