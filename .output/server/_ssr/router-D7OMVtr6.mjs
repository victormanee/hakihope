import { a as __toESM } from "../_runtime.mjs";
import { i as streamText, r as convertToModelMessages, s as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { t as supabase } from "./client-C6ZaJElq.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$13 } from "./ai._threadId-B-jaXVny.mjs";
import { B as objectType, z as enumType } from "../_libs/@ai-sdk/gateway+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as createOpenAICompatible } from "../_libs/ai-sdk__openai-compatible.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D7OMVtr6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-COwkbTuc.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold gradient-text",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "Something didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Please try again — the team has been notified."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$12 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "HakiHope — Justice Within Reach" },
			{
				name: "description",
				content: "HakiHope connects Kenyans with verified lawyers, AI legal guidance, and everything you need to understand and act on your rights."
			},
			{
				name: "author",
				content: "HakiHope"
			},
			{
				property: "og:title",
				content: "HakiHope — Justice Within Reach"
			},
			{
				property: "og:description",
				content: "HakiHope connects Kenyans with verified lawyers, AI legal guidance, and everything you need to understand and act on your rights."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#0B3C5D"
			},
			{
				name: "twitter:title",
				content: "HakiHope — Justice Within Reach"
			},
			{
				name: "twitter:description",
				content: "HakiHope connects Kenyans with verified lawyers, AI legal guidance, and everything you need to understand and act on your rights."
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/Skltm0K8H6cGEeum2OYBPk1gzUc2/social-images/social-1784316470686-WhatsApp_Image_2026-07-17_at_22.27.16.webp"
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/Skltm0K8H6cGEeum2OYBPk1gzUc2/social-images/social-1784316470686-WhatsApp_Image_2026-07-17_at_22.27.16.webp"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		const { data: sub } = supabase.auth.onAuthStateChange((event) => {
			if (event !== "SIGNED_IN" && event !== "SIGNED_OUT" && event !== "USER_UPDATED") return;
			router.invalidate();
			if (event !== "SIGNED_OUT") queryClient.invalidateQueries();
		});
		return () => sub.subscription.unsubscribe();
	}, [queryClient, router]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
			richColors: true,
			position: "top-right"
		})]
	});
}
var BASE_URL = "";
var entries = [
	{
		path: "/",
		priority: "1.0",
		changefreq: "weekly"
	},
	{
		path: "/find-lawyer",
		priority: "0.9",
		changefreq: "weekly"
	},
	{
		path: "/rights",
		priority: "0.9",
		changefreq: "weekly"
	},
	{
		path: "/resources",
		priority: "0.7",
		changefreq: "monthly"
	},
	{
		path: "/emergency",
		priority: "0.8",
		changefreq: "monthly"
	},
	{
		path: "/about",
		priority: "0.6",
		changefreq: "monthly"
	},
	{
		path: "/contact",
		priority: "0.5",
		changefreq: "monthly"
	}
];
var Route$11 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...entries.map((e) => `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$9 = () => import("./rights-DFFCXbBp.mjs");
var Route$10 = createFileRoute("/rights")({
	head: () => ({ meta: [
		{ title: "Know Your Rights — HakiHope" },
		{
			name: "description",
			content: "Kenyan law in plain language: your rights, what to do, and when to call a lawyer."
		},
		{
			property: "og:title",
			content: "Know Your Rights — HakiHope"
		},
		{
			property: "og:description",
			content: "A searchable legal rights library, written for real people."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./resources-CRZhx_R7.mjs");
var Route$9 = createFileRoute("/resources")({
	head: () => ({ meta: [
		{ title: "Resources — HakiHope" },
		{
			name: "description",
			content: "Guides, templates, videos, and downloadable resources to help you navigate Kenyan law."
		},
		{
			property: "og:title",
			content: "Resources — HakiHope"
		},
		{
			property: "og:description",
			content: "Free legal templates, guides, and civic education."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./find-lawyer-B64iZKFT.mjs");
var Route$8 = createFileRoute("/find-lawyer")({
	head: () => ({ meta: [
		{ title: "Find a Lawyer — HakiHope" },
		{
			name: "description",
			content: "Browse Law Society verified advocates across Kenya by county, practice area, and budget."
		},
		{
			property: "og:title",
			content: "Find a Lawyer — HakiHope"
		},
		{
			property: "og:description",
			content: "Verified Kenyan advocates you can trust."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./emergency-DtqUr3wM.mjs");
var Route$7 = createFileRoute("/emergency")({
	head: () => ({ meta: [
		{ title: "Emergency Legal Help — HakiHope" },
		{
			name: "description",
			content: "Immediate legal help for wrongful arrest, domestic violence, harassment, and human rights emergencies in Kenya."
		},
		{
			property: "og:title",
			content: "Emergency Legal Help — HakiHope"
		},
		{
			property: "og:description",
			content: "Free, immediate help when it matters most."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./dashboard-BxKNKQ3i.mjs");
var Route$6 = createFileRoute("/dashboard")({
	head: () => ({ meta: [
		{ title: "Dashboard — HakiHope" },
		{
			name: "description",
			content: "Your cases, conversations, and documents on HakiHope."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-KTheaeUc.mjs");
var Route$5 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — HakiHope" },
		{
			name: "description",
			content: "Reach the HakiHope team for support, partnerships, or media inquiries."
		},
		{
			property: "og:title",
			content: "Contact HakiHope"
		},
		{
			property: "og:description",
			content: "We'd love to hear from you."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./auth-FiRhfxgo.mjs");
var searchSchema = objectType({ mode: enumType(["login", "signup"]).optional() });
var Route$4 = createFileRoute("/auth")({
	validateSearch: searchSchema,
	head: () => ({ meta: [{ title: "Sign in — HakiHope" }, {
		name: "description",
		content: "Sign in or create your HakiHope account."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./ai-C-24ce40.mjs");
var Route$3 = createFileRoute("/ai")({
	head: () => ({ meta: [
		{ title: "Haki AI — Your Legal Assistant | HakiHope" },
		{
			name: "description",
			content: "Ask Haki AI anything about Kenyan law. Get clear, plain-language answers instantly."
		},
		{
			property: "og:title",
			content: "Haki AI — Your Legal Assistant"
		},
		{
			property: "og:description",
			content: "Chat with an AI trained on Kenyan law."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-BKBU5zsA.mjs");
var Route$2 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — HakiHope" },
		{
			name: "description",
			content: "Our mission is to make justice accessible to every Kenyan — regardless of income, county, or background."
		},
		{
			property: "og:title",
			content: "About HakiHope"
		},
		{
			property: "og:description",
			content: "Making justice accessible to everyone."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./roots-JxmRbcLP.mjs");
var Route$1 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
function createLovableAiGatewayProvider(apiKey) {
	return createOpenAICompatible({
		name: "lovable",
		baseURL: "https://ai.gateway.lovable.dev/v1",
		headers: { "Lovable-API-Key": apiKey }
	});
}
var SYSTEM_PROMPT = `You are Haki AI, a friendly and knowledgeable legal assistant for Kenya, built by HakiHope.

Your job is to help ordinary Kenyans understand their legal rights and situations in plain, warm language.

Guidelines:
- Always cite the relevant Kenyan law where possible (e.g. Employment Act 2007, Constitution of Kenya 2010, Land Act 2012).
- Break answers into: (1) What the law says, (2) What this means for you, (3) What to do next.
- Use bold for key legal terms. Use markdown lists for steps.
- If the situation involves violence, arrest, or immediate danger, direct the user to the /emergency page and hotlines (999, 1195, 116).
- If it needs professional advice, recommend "Find a Lawyer" on HakiHope.
- Be empathetic. Never judge. Never give false certainty — say when a lawyer's judgment is required.
- Respond in the same language the user writes in (English or Kiswahili).
- Never provide instructions for illegal activity.

You are not a substitute for a lawyer. Add a brief reminder at the end of complex answers.`;
var Route = createFileRoute("/api/chat")({ server: { handlers: { POST: async ({ request }) => {
	const { messages } = await request.json();
	if (!Array.isArray(messages)) return new Response("messages required", { status: 400 });
	const key = processModule.env.LOVABLE_API_KEY;
	if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });
	return streamText({
		model: createLovableAiGatewayProvider(key)("google/gemini-3-flash-preview"),
		system: SYSTEM_PROMPT,
		messages: await convertToModelMessages(messages)
	}).toUIMessageStreamResponse({ originalMessages: messages });
} } } });
var SitemapDotxmlRoute = Route$11.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$12
});
var RightsRoute = Route$10.update({
	id: "/rights",
	path: "/rights",
	getParentRoute: () => Route$12
});
var ResourcesRoute = Route$9.update({
	id: "/resources",
	path: "/resources",
	getParentRoute: () => Route$12
});
var FindLawyerRoute = Route$8.update({
	id: "/find-lawyer",
	path: "/find-lawyer",
	getParentRoute: () => Route$12
});
var EmergencyRoute = Route$7.update({
	id: "/emergency",
	path: "/emergency",
	getParentRoute: () => Route$12
});
var DashboardRoute = Route$6.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$12
});
var ContactRoute = Route$5.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$12
});
var AuthRoute = Route$4.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$12
});
var AiRoute = Route$3.update({
	id: "/ai",
	path: "/ai",
	getParentRoute: () => Route$12
});
var AboutRoute = Route$2.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$12
});
var IndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var ApiChatRoute = Route.update({
	id: "/api/chat",
	path: "/api/chat",
	getParentRoute: () => Route$12
});
var AiRouteChildren = { AiThreadIdRoute: Route$13.update({
	id: "/$threadId",
	path: "/$threadId",
	getParentRoute: () => AiRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AiRoute: AiRoute._addFileChildren(AiRouteChildren),
	AuthRoute,
	ContactRoute,
	DashboardRoute,
	EmergencyRoute,
	FindLawyerRoute,
	ResourcesRoute,
	RightsRoute,
	SitemapDotxmlRoute,
	ApiChatRoute
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
