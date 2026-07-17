globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon (1).ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"10c59-Vppp+qgLAvQsrMcXSdCz5O6rX0s\"",
		"mtime": "2026-07-17T19:31:38.491Z",
		"size": 68697,
		"path": "../public/favicon (1).ico"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"4b-mjbs3t86lDE4xCaXZrmkIsdt+R0\"",
		"mtime": "2026-07-17T19:31:42.731Z",
		"size": 75,
		"path": "../public/robots.txt"
	},
	"/assets/about-A7yjuZYz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"773-ANW+PwG9QevS9yCnJ5bE0fvqwlM\"",
		"mtime": "2026-07-17T20:21:24.312Z",
		"size": 1907,
		"path": "../public/assets/about-A7yjuZYz.js"
	},
	"/assets/arrow-right-BGdAj0ph.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-Sgg8mt2xlNrlURi27ilxVQ1sKxc\"",
		"mtime": "2026-07-17T20:21:24.322Z",
		"size": 155,
		"path": "../public/assets/arrow-right-BGdAj0ph.js"
	},
	"/assets/ai-DzGoQ0L1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"401-5TQfQB0wdtOnGJ0Xzkh+auPTANE\"",
		"mtime": "2026-07-17T20:21:24.314Z",
		"size": 1025,
		"path": "../public/assets/ai-DzGoQ0L1.js"
	},
	"/assets/auth-CBoqCZDx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2275-MDUd6AMW6ykyJyFe4PP+hDGaeaY\"",
		"mtime": "2026-07-17T20:21:24.337Z",
		"size": 8821,
		"path": "../public/assets/auth-CBoqCZDx.js"
	},
	"/assets/book-open-5dOuQM6b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10d-eIOsKF9HOrtkZR/ikka6zCVOcug\"",
		"mtime": "2026-07-17T20:21:24.339Z",
		"size": 269,
		"path": "../public/assets/book-open-5dOuQM6b.js"
	},
	"/assets/button-gKhK5LZd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8131-y0EikN8lK50H/kkb4vw1cJkIuao\"",
		"mtime": "2026-07-17T20:21:24.343Z",
		"size": 33073,
		"path": "../public/assets/button-gKhK5LZd.js"
	},
	"/assets/chat.functions-BCfGDsd8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14e5-t9AwwU9nQa37Py7V55zHyzRkCCg\"",
		"mtime": "2026-07-17T20:21:24.346Z",
		"size": 5349,
		"path": "../public/assets/chat.functions-BCfGDsd8.js"
	},
	"/assets/contact-C6G3KoxF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bbe-8m1bqZrgp1gbInEc3YbiG6cyE/U\"",
		"mtime": "2026-07-17T20:21:24.353Z",
		"size": 3006,
		"path": "../public/assets/contact-C6G3KoxF.js"
	},
	"/assets/dashboard-D6MB3Yto.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9c0-NASjlUS2dpi/c/PAopa7O0NNdAA\"",
		"mtime": "2026-07-17T20:21:24.354Z",
		"size": 2496,
		"path": "../public/assets/dashboard-D6MB3Yto.js"
	},
	"/assets/emergency-Dm4Bus-y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14e7-ABC63R8GcrehaO7+Q1PWcs4z/YA\"",
		"mtime": "2026-07-17T20:21:24.357Z",
		"size": 5351,
		"path": "../public/assets/emergency-Dm4Bus-y.js"
	},
	"/assets/client-BnMQyWJs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3b1b9-sRCEwD+JY2ImVDuAaHERcbjU18Q\"",
		"mtime": "2026-07-17T20:21:24.350Z",
		"size": 242105,
		"path": "../public/assets/client-BnMQyWJs.js"
	},
	"/assets/find-lawyer-Cb6yWDm2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3b6f-9JqY/Uk461v1X/tQWZ9UCyA0LNs\"",
		"mtime": "2026-07-17T20:21:24.360Z",
		"size": 15215,
		"path": "../public/assets/find-lawyer-Cb6yWDm2.js"
	},
	"/assets/heart-BSBtdl-X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f8-8pD7Xc2G5k1yNiWTm86V2Gml+Ss\"",
		"mtime": "2026-07-17T20:21:24.364Z",
		"size": 248,
		"path": "../public/assets/heart-BSBtdl-X.js"
	},
	"/assets/input-C0lfCqE0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"269-sUUCdc7g8Wkm3d142en6b5k5Ia4\"",
		"mtime": "2026-07-17T20:21:24.366Z",
		"size": 617,
		"path": "../public/assets/input-C0lfCqE0.js"
	},
	"/assets/hero-Bk5gPWXA.jpg": {
		"type": "image/jpeg",
		"etag": "\"13a1e-kjM6xTN7q8RoeRBz0x2o5MWNU2M\"",
		"mtime": "2026-07-17T20:21:24.405Z",
		"size": 80414,
		"path": "../public/assets/hero-Bk5gPWXA.jpg"
	},
	"/assets/message-square-DbRXfd1j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"df-V2RhkFmuQXlvCvEoICdkJfMiHAM\"",
		"mtime": "2026-07-17T20:21:24.374Z",
		"size": 223,
		"path": "../public/assets/message-square-DbRXfd1j.js"
	},
	"/assets/ai._threadId-DDFLJ_X7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3a8dd-O/WeErMFrdr5SOoirbVXpGfWWNg\"",
		"mtime": "2026-07-17T20:21:24.315Z",
		"size": 239837,
		"path": "../public/assets/ai._threadId-DDFLJ_X7.js"
	},
	"/assets/map-pin-D4wxLoGq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f9-P+dOfABucrQhT2ZoAv7N6sX5OLY\"",
		"mtime": "2026-07-17T20:21:24.371Z",
		"size": 249,
		"path": "../public/assets/map-pin-D4wxLoGq.js"
	},
	"/assets/phone-DhaB_eqh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"138-4JR+TQTJ7Ud+6Zj//CcMvfkuVL0\"",
		"mtime": "2026-07-17T20:21:24.375Z",
		"size": 312,
		"path": "../public/assets/phone-DhaB_eqh.js"
	},
	"/assets/label-Bgc06BSa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3b4-YGoGYei4zduGLRuiBSbFN4JRJ9k\"",
		"mtime": "2026-07-17T20:21:24.367Z",
		"size": 948,
		"path": "../public/assets/label-Bgc06BSa.js"
	},
	"/assets/logo-C5ATg2ZX.png": {
		"type": "image/png",
		"etag": "\"1329a-zdQw5my5YyJ3vWQ4z4zkhq+sGrU\"",
		"mtime": "2026-07-17T20:21:24.408Z",
		"size": 78490,
		"path": "../public/assets/logo-C5ATg2ZX.png"
	},
	"/assets/index-R2MChOcf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"63113-lNTiGUaNHg8pAFG4TEOdAnj+/YA\"",
		"mtime": "2026-07-17T20:21:24.312Z",
		"size": 405779,
		"path": "../public/assets/index-R2MChOcf.js"
	},
	"/assets/resources-CSfSYoZw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96f-1Q3+H1rV2BZcqwp+npwkI/cr5pI\"",
		"mtime": "2026-07-17T20:21:24.377Z",
		"size": 2415,
		"path": "../public/assets/resources-CSfSYoZw.js"
	},
	"/assets/rights-C1YNKpKL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13bc-Wx/bb1YyzEVEHS+WuapbXnB0jf8\"",
		"mtime": "2026-07-17T20:21:24.379Z",
		"size": 5052,
		"path": "../public/assets/rights-C1YNKpKL.js"
	},
	"/assets/scale-BzIae-ld.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"142-Zdz9dDrvNY4nWFVT+a01LXxmPWU\"",
		"mtime": "2026-07-17T20:21:24.382Z",
		"size": 322,
		"path": "../public/assets/scale-BzIae-ld.js"
	},
	"/assets/roots-DyplJH5x.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2754-dln10eoXX01YE92KgVQ9fQ1i500\"",
		"mtime": "2026-07-17T20:21:24.380Z",
		"size": 10068,
		"path": "../public/assets/roots-DyplJH5x.js"
	},
	"/assets/search-ClC_TUFI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a4-bCUpXVZQ7q521regIwJByzlvngY\"",
		"mtime": "2026-07-17T20:21:24.386Z",
		"size": 164,
		"path": "../public/assets/search-ClC_TUFI.js"
	},
	"/assets/shield-check-DT7ensXp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"136-StYKx8m0sf/z0bBZL611Gib7XwA\"",
		"mtime": "2026-07-17T20:21:24.389Z",
		"size": 310,
		"path": "../public/assets/shield-check-DT7ensXp.js"
	},
	"/assets/siren-B-8-fTEn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cd-cJEioifTGsif2XLBWUR4vfm7Y/0\"",
		"mtime": "2026-07-17T20:21:24.392Z",
		"size": 461,
		"path": "../public/assets/siren-B-8-fTEn.js"
	},
	"/assets/site-footer-8sLjtGwj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a2-pq2oT0UPJq5i+qC4LSDac5dLxkE\"",
		"mtime": "2026-07-17T20:21:24.395Z",
		"size": 2466,
		"path": "../public/assets/site-footer-8sLjtGwj.js"
	},
	"/assets/sparkles-Bv1kYgBg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e4-TFcku0Whb5SJ1lgnupqRP+pD350\"",
		"mtime": "2026-07-17T20:21:24.399Z",
		"size": 484,
		"path": "../public/assets/sparkles-Bv1kYgBg.js"
	},
	"/assets/site-nav-Cn2cpCu_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f23-O6yRc5qp7d8IQD9R1cCrRb8mPP8\"",
		"mtime": "2026-07-17T20:21:24.397Z",
		"size": 3875,
		"path": "../public/assets/site-nav-Cn2cpCu_.js"
	},
	"/assets/video-2KpJTZhC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ee-sI3MowHXNvAEfLBaSX45qEJDo9E\"",
		"mtime": "2026-07-17T20:21:24.401Z",
		"size": 238,
		"path": "../public/assets/video-2KpJTZhC.js"
	},
	"/assets/styles-COwkbTuc.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"18971-b5UjiVZS47ucPgfq2zB7vcaMVaU\"",
		"mtime": "2026-07-17T20:21:24.409Z",
		"size": 100721,
		"path": "../public/assets/styles-COwkbTuc.css"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_ECQ65m = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_ECQ65m
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
