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
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"4b-mjbs3t86lDE4xCaXZrmkIsdt+R0\"",
		"mtime": "2026-07-17T19:31:42.731Z",
		"size": 75,
		"path": "../public/robots.txt"
	},
	"/assets/about-BX8to7fH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"773-omlbPmJx7mOQoZ+7qacnYsdnDao\"",
		"mtime": "2026-07-17T21:05:59.302Z",
		"size": 1907,
		"path": "../public/assets/about-BX8to7fH.js"
	},
	"/favicon (1).ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"10c59-Vppp+qgLAvQsrMcXSdCz5O6rX0s\"",
		"mtime": "2026-07-17T19:31:38.491Z",
		"size": 68697,
		"path": "../public/favicon (1).ico"
	},
	"/assets/ai-DIDnfmav.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"401-hfeBxxMHrVs04pwnj26JbwvFAvU\"",
		"mtime": "2026-07-17T21:05:59.305Z",
		"size": 1025,
		"path": "../public/assets/ai-DIDnfmav.js"
	},
	"/assets/arrow-right-D7h5_SNx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-3VnlnquiPxnZLZVGEVUfKf76zsU\"",
		"mtime": "2026-07-17T21:05:59.311Z",
		"size": 155,
		"path": "../public/assets/arrow-right-D7h5_SNx.js"
	},
	"/assets/auth-DPWXROnj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2275-cy/DcIMck0MISy7OAeveJtjKcBk\"",
		"mtime": "2026-07-17T21:05:59.312Z",
		"size": 8821,
		"path": "../public/assets/auth-DPWXROnj.js"
	},
	"/assets/book-open-R3On5ZWF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10d-p9UDqjhTxr7Mule6DC9C2BDQXJc\"",
		"mtime": "2026-07-17T21:05:59.315Z",
		"size": 269,
		"path": "../public/assets/book-open-R3On5ZWF.js"
	},
	"/assets/chat.functions-C-W_FZos.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14e5-JdvxerTGrqaXXWwC+6t7/FsF6+g\"",
		"mtime": "2026-07-17T21:05:59.321Z",
		"size": 5349,
		"path": "../public/assets/chat.functions-C-W_FZos.js"
	},
	"/assets/button-D_C70t2e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8131-uigTO4KJKEmUJOaft5VUDmwxgjk\"",
		"mtime": "2026-07-17T21:05:59.318Z",
		"size": 33073,
		"path": "../public/assets/button-D_C70t2e.js"
	},
	"/assets/ai._threadId-fA5Y7Ld6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3a8dd-HvFDJASVH5Bmx43UUWQB/4/7YFk\"",
		"mtime": "2026-07-17T21:05:59.309Z",
		"size": 239837,
		"path": "../public/assets/ai._threadId-fA5Y7Ld6.js"
	},
	"/assets/contact-B6tHK9OT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bbe-Nouy80j6sQYhf1hB7Grb+j601gs\"",
		"mtime": "2026-07-17T21:05:59.326Z",
		"size": 3006,
		"path": "../public/assets/contact-B6tHK9OT.js"
	},
	"/assets/dashboard-BUdZlAmv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9c0-ctVcW2ijEGSdKNN2405Uy1EeTN8\"",
		"mtime": "2026-07-17T21:05:59.329Z",
		"size": 2496,
		"path": "../public/assets/dashboard-BUdZlAmv.js"
	},
	"/assets/emergency-D6Ifm3HO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14e7-dcN7L9Se0sSqD/ZZGrnGsObC73g\"",
		"mtime": "2026-07-17T21:05:59.333Z",
		"size": 5351,
		"path": "../public/assets/emergency-D6Ifm3HO.js"
	},
	"/assets/find-lawyer-CMo9NeT8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3b6f-sCLzRjVN0fu9sSp+OKhgTK8gyFs\"",
		"mtime": "2026-07-17T21:05:59.335Z",
		"size": 15215,
		"path": "../public/assets/find-lawyer-CMo9NeT8.js"
	},
	"/assets/heart-CHuWz3l_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f8-qII90AMXcev5V9oz3H44daD07HA\"",
		"mtime": "2026-07-17T21:05:59.337Z",
		"size": 248,
		"path": "../public/assets/heart-CHuWz3l_.js"
	},
	"/assets/client-bSZlrwNu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3b1c2-lI1ZgP/fBNVqjx5UiAdM209T/1A\"",
		"mtime": "2026-07-17T21:05:59.324Z",
		"size": 242114,
		"path": "../public/assets/client-bSZlrwNu.js"
	},
	"/assets/label-De59f88z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3b4-3o79HSLnS9FGbXMBAHdGSOMAIPw\"",
		"mtime": "2026-07-17T21:05:59.342Z",
		"size": 948,
		"path": "../public/assets/label-De59f88z.js"
	},
	"/assets/input-DTmAdqTd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"269-1222uZCC/ErZ54UrlBGwIl76V7g\"",
		"mtime": "2026-07-17T21:05:59.339Z",
		"size": 617,
		"path": "../public/assets/input-DTmAdqTd.js"
	},
	"/assets/hero-Bk5gPWXA.jpg": {
		"type": "image/jpeg",
		"etag": "\"13a1e-kjM6xTN7q8RoeRBz0x2o5MWNU2M\"",
		"mtime": "2026-07-17T21:05:59.378Z",
		"size": 80414,
		"path": "../public/assets/hero-Bk5gPWXA.jpg"
	},
	"/assets/message-square-BDjnUc_L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"df-iGfw/e3KDOaR2+VLHZABkQzvPos\"",
		"mtime": "2026-07-17T21:05:59.347Z",
		"size": 223,
		"path": "../public/assets/message-square-BDjnUc_L.js"
	},
	"/assets/map-pin-B46E7ha3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f9-vgU/1qENGPORvZMwaaK0CvCMgao\"",
		"mtime": "2026-07-17T21:05:59.345Z",
		"size": 249,
		"path": "../public/assets/map-pin-B46E7ha3.js"
	},
	"/assets/logo-C5ATg2ZX.png": {
		"type": "image/png",
		"etag": "\"1329a-zdQw5my5YyJ3vWQ4z4zkhq+sGrU\"",
		"mtime": "2026-07-17T21:05:59.380Z",
		"size": 78490,
		"path": "../public/assets/logo-C5ATg2ZX.png"
	},
	"/assets/phone-3RzuTtwn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"138-wyxgGu1kAv7/fXjxSoZpo4jDUHk\"",
		"mtime": "2026-07-17T21:05:59.349Z",
		"size": 312,
		"path": "../public/assets/phone-3RzuTtwn.js"
	},
	"/assets/resources-CTmY5Uf2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96f-f+QKiXGf+HnoxM+SllJPFZsO4Is\"",
		"mtime": "2026-07-17T21:05:59.353Z",
		"size": 2415,
		"path": "../public/assets/resources-CTmY5Uf2.js"
	},
	"/assets/index-7je_yQqh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"63113-O2QeM52Lvv4sD65zLkeRmuamFQY\"",
		"mtime": "2026-07-17T21:05:59.296Z",
		"size": 405779,
		"path": "../public/assets/index-7je_yQqh.js"
	},
	"/assets/rights-DLSoOKl8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13bc-GhcXMfZVSgCvKvNXz1pZjbH6PqE\"",
		"mtime": "2026-07-17T21:05:59.356Z",
		"size": 5052,
		"path": "../public/assets/rights-DLSoOKl8.js"
	},
	"/assets/roots-CNoPiSiG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2754-TEk+e86+c58uWGVBITPczcRsR6o\"",
		"mtime": "2026-07-17T21:05:59.358Z",
		"size": 10068,
		"path": "../public/assets/roots-CNoPiSiG.js"
	},
	"/assets/scale-Cl5xQoDy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"142-6bFV+vDA4YAmq6HxTqaV9ibHXbg\"",
		"mtime": "2026-07-17T21:05:59.360Z",
		"size": 322,
		"path": "../public/assets/scale-Cl5xQoDy.js"
	},
	"/assets/search-BI_trVR4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a4-2eshmNU6d2juFuKSLdO7sJnpRW8\"",
		"mtime": "2026-07-17T21:05:59.362Z",
		"size": 164,
		"path": "../public/assets/search-BI_trVR4.js"
	},
	"/assets/shield-check-C9C8wr12.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"136-OwDOhmqhNO5DidqlVRMHGqq7hI0\"",
		"mtime": "2026-07-17T21:05:59.364Z",
		"size": 310,
		"path": "../public/assets/shield-check-C9C8wr12.js"
	},
	"/assets/siren-DUJizLW0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cd-aeY1XxFAHny4Jqg0ARwTpCJW2+M\"",
		"mtime": "2026-07-17T21:05:59.367Z",
		"size": 461,
		"path": "../public/assets/siren-DUJizLW0.js"
	},
	"/assets/site-nav-CHM4iFU-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f23-IsiPO7aMrek/sq3/r5ArYD9i73E\"",
		"mtime": "2026-07-17T21:05:59.372Z",
		"size": 3875,
		"path": "../public/assets/site-nav-CHM4iFU-.js"
	},
	"/assets/sparkles-BDORosgw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e4-LTydUprmADZtw1f7i1jdZmYoCtQ\"",
		"mtime": "2026-07-17T21:05:59.374Z",
		"size": 484,
		"path": "../public/assets/sparkles-BDORosgw.js"
	},
	"/assets/site-footer-DZ0f6nlX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a2-ZmhcEYRCoa83cA2iv+hk+6Sbhfc\"",
		"mtime": "2026-07-17T21:05:59.370Z",
		"size": 2466,
		"path": "../public/assets/site-footer-DZ0f6nlX.js"
	},
	"/assets/styles-COwkbTuc.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"18971-b5UjiVZS47ucPgfq2zB7vcaMVaU\"",
		"mtime": "2026-07-17T21:05:59.383Z",
		"size": 100721,
		"path": "../public/assets/styles-COwkbTuc.css"
	},
	"/assets/video-CQkAJVH-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ee-O8dFVbNiy9udKO3onetq/qIFrhM\"",
		"mtime": "2026-07-17T21:05:59.375Z",
		"size": 238,
		"path": "../public/assets/video-CQkAJVH-.js"
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
