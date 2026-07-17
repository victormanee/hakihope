import { a as __toESM } from "../_runtime.mjs";
import { s as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { t as supabase } from "./client-C6ZaJElq.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Sparkles } from "../_libs/lucide-react.mjs";
import { t as SiteNav } from "./site-nav-598PGVWw.mjs";
import { i as listThreads, o as useServerFn, t as createThread } from "./chat.functions-C3FJuNbH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-C-24ce40.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AiEntry() {
	const navigate = useNavigate();
	const list = useServerFn(listThreads);
	const create = useServerFn(createThread);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		(async () => {
			const { data } = await supabase.auth.getSession();
			if (!data.session) {
				navigate({
					to: "/auth",
					search: { redirect: "/ai" }
				});
				return;
			}
			const threads = await list();
			if (cancelled) return;
			if (threads.length > 0) navigate({
				to: "/ai/$threadId",
				params: { threadId: threads[0].id }
			});
			else {
				const t = await create({ data: {} });
				navigate({
					to: "/ai/$threadId",
					params: { threadId: t.id }
				});
			}
		})().catch(() => {
			navigate({
				to: "/auth",
				search: { redirect: "/ai" }
			});
		});
		return () => {
			cancelled = true;
		};
	}, [
		navigate,
		list,
		create
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 flex items-center justify-center text-muted-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 animate-pulse text-gold" }), " Preparing Haki AI…"]
			})
		})]
	});
}
//#endregion
export { AiEntry as component };
