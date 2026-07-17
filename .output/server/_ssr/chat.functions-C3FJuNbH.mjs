import { a as __toESM } from "../_runtime.mjs";
import { s as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { O as isRedirect, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-BFFE07zL.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-CzIAmluD.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-BwdutfJC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chat.functions-C3FJuNbH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var listThreads = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("81f8d6ada944895e886fc9c1b3ea8c0e3fdfbdbcd7073b5a3e588f55517524dd"));
var createThread = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => input ?? {}).handler(createSsrRpc("0e7b69b1d91bc88e34354aa34e93348913ee48b5657a1700135375a79d4eb416"));
var deleteThread = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => input).handler(createSsrRpc("e1c7e871a6ff3195deaf3eaa0b7cef206138273224933ee87c94a4e4f020e775"));
var getThreadMessages = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).inputValidator((input) => input).handler(createSsrRpc("bc77fc2e18eb996fb643a2019ea9e4d22e813583b9affd0db1f7ed2849c1e317"));
var saveMessages = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => input).handler(createSsrRpc("82a8855a8fa42e739a706c6766ac47e4c37b691d9aae31617d218e529807a2b2"));
//#endregion
export { saveMessages as a, listThreads as i, deleteThread as n, useServerFn as o, getThreadMessages as r, createThread as t };
