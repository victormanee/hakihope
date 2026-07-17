import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { t as Button } from "./button-Bcc3N_sy.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as CircleCheck, D as FolderLock, M as BookOpen, N as ArrowRight, c as ShieldCheck, f as Scale, g as MessageSquareHeart, j as CalendarClock, o as Sparkles, r as Users, s as Siren, v as MapPin } from "../_libs/lucide-react.mjs";
import { t as SiteNav } from "./site-nav-BS29GeCV.mjs";
import { t as SiteFooter } from "./site-footer-BkHNQSCw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/roots-BcFviFAP.js
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero-Bk5gPWXA.jpg";
var stats = [
	{
		value: "20,000+",
		label: "Citizens helped"
	},
	{
		value: "3,000+",
		label: "Verified lawyers"
	},
	{
		value: "47",
		label: "Counties covered"
	},
	{
		value: "96%",
		label: "Client satisfaction"
	}
];
var features = [
	{
		icon: Sparkles,
		title: "Haki AI Assistant",
		desc: "Describe your issue in plain English or Kiswahili. Get instant guidance on your rights, evidence, and next steps."
	},
	{
		icon: Scale,
		title: "Smart Lawyer Matching",
		desc: "A 60-second questionnaire finds the right verified advocate by county, budget, urgency, and language."
	},
	{
		icon: BookOpen,
		title: "Know Your Rights",
		desc: "A searchable library that turns Kenyan law into clear, actionable advice."
	},
	{
		icon: FolderLock,
		title: "Secure Document Vault",
		desc: "Encrypted uploads for evidence, contracts, IDs, and case files. Only you and your lawyer see them."
	},
	{
		icon: CalendarClock,
		title: "Consultation Booking",
		desc: "Book physical, phone, or video consultations with real-time availability."
	},
	{
		icon: Siren,
		title: "Emergency Legal Help",
		desc: "One tap connects you to legal aid, hotlines, and trusted contacts when it matters most."
	},
	{
		icon: ShieldCheck,
		title: "Law Society Verified",
		desc: "Every advocate on HakiHope is vetted against the Law Society of Kenya register."
	},
	{
		icon: MessageSquareHeart,
		title: "Human-Centered",
		desc: "No jargon. No bias. Just clarity and hope through the process."
	}
];
var categories = [
	"Employment",
	"Land",
	"Family",
	"Criminal",
	"Human Rights",
	"Business",
	"Consumer",
	"Police Procedures",
	"Cybercrime",
	"Traffic",
	"Constitution"
];
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 gradient-hero opacity-95" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,white_0%,transparent_60%)] opacity-20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-primary-foreground animate-fade-up",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-gold" }), "AI-powered legal guidance for every Kenyan"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight",
									children: [
										"Justice Should Never",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Depend on Your Income."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-lg text-white/85 max-w-xl",
									children: "Access verified lawyers, understand your rights, receive AI-powered guidance, and find hope through justice — all in one place."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "lg",
										className: "bg-gold text-gold-foreground hover:bg-gold/90 shadow-glow",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/find-lawyer",
											children: ["Find a Lawyer ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "lg",
										variant: "outline",
										className: "bg-white/10 text-primary-foreground border-white/30 hover:bg-white/20 backdrop-blur",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/ai",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mr-2 h-4 w-4" }), " Talk to Haki AI"]
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap gap-6 text-sm text-white/75",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-gold" }), " Law Society verified"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-gold" }), " Free AI guidance"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-gold" }), " English & Kiswahili"]
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative animate-fade-up",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-8 bg-gold/20 blur-3xl rounded-full animate-float-slow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_default,
								alt: "Diverse Kenyans standing together beneath a glowing scale of justice",
								width: 1600,
								height: 1200,
								className: "relative rounded-3xl shadow-elegant border border-white/10"
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border/60 bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6",
					children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-3xl md:text-4xl font-bold gradient-text",
							children: s.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs md:text-sm text-muted-foreground uppercase tracking-wide",
							children: s.label
						})]
					}, s.label))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold text-hope uppercase tracking-wider",
							children: "Everything you need"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl sm:text-4xl font-bold tracking-tight",
							children: "A complete justice platform, built for Kenya"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "From your first question to your day in court — HakiHope is with you."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant hover:border-primary/30",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-gold/15 group-hover:text-gold transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-semibold",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: f.desc
							})
						]
					}, f.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 pb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-border/70 bg-gradient-to-br from-card to-muted/40 p-8 sm:p-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold text-hope uppercase tracking-wider",
								children: "Know your rights"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-3xl font-bold tracking-tight",
								children: "Legal knowledge, in plain language"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground",
								children: "Browse Kenyan law by area. Each topic explains what the law says, what to do, and when to call a lawyer."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap gap-2",
						children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/rights",
							className: "rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground/80 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors",
							children: c
						}, c))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-3xl gradient-hero p-10 sm:p-16 text-primary-foreground shadow-elegant",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-10 -top-10 h-64 w-64 rounded-full bg-gold/30 blur-3xl animate-float-slow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl sm:text-4xl font-bold tracking-tight",
								children: "Ready to take the first step?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-white/85",
								children: "Talk to Haki AI now — free, private, and available in English and Kiswahili. Or browse verified advocates in your county."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "bg-gold text-gold-foreground hover:bg-gold/90",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/ai",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mr-2 h-4 w-4" }), "Start with Haki AI"]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									className: "bg-white/10 text-primary-foreground border-white/30 hover:bg-white/20 backdrop-blur",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/find-lawyer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mr-2 h-4 w-4" }), "Browse lawyers"]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 flex items-center gap-6 text-sm text-white/75",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" }), " Trusted by 20,000+ Kenyans"]
								})
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Landing as component };
