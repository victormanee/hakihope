import { a as __toESM } from "../_runtime.mjs";
import { n as DefaultChatTransport, s as require_react, t as useChat } from "../_libs/@ai-sdk/react+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { n as HakiWordmark, r as cn, t as Button } from "./button-Bcc3N_sy.mjs";
import { t as supabase } from "./client-C6ZaJElq.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { P as ArrowLeft, h as MessageSquare, i as Trash2, o as Sparkles, p as Plus, u as Send } from "../_libs/lucide-react.mjs";
import { a as saveMessages, i as listThreads, n as deleteThread, o as useServerFn, r as getThreadMessages, t as createThread } from "./chat.functions-C3FJuNbH.mjs";
import { t as Route } from "./ai._threadId-B-jaXVny.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Markdown } from "../_libs/react-markdown+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai._threadId-mDTOx372.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SUGGESTIONS = [
	"I was fired without notice — what are my rights?",
	"How do I register a small business in Kenya?",
	"My landlord won't return my deposit. What can I do?",
	"What should I do if I'm arrested?"
];
function AiChat() {
	const { threadId } = Route.useParams();
	const navigate = useNavigate();
	const [threads, setThreads] = (0, import_react.useState)([]);
	const [initialMessages, setInitialMessages] = (0, import_react.useState)(null);
	const [authed, setAuthed] = (0, import_react.useState)(null);
	const [input, setInput] = (0, import_react.useState)("");
	const list = useServerFn(listThreads);
	const create = useServerFn(createThread);
	const del = useServerFn(deleteThread);
	const getMsgs = useServerFn(getThreadMessages);
	const save = useServerFn(saveMessages);
	const saveRef = (0, import_react.useRef)(save);
	saveRef.current = save;
	(0, import_react.useEffect)(() => {
		(async () => {
			const { data } = await supabase.auth.getSession();
			if (!data.session) {
				setAuthed(false);
				navigate({
					to: "/auth",
					search: { redirect: `/ai/${threadId}` }
				});
				return;
			}
			setAuthed(true);
			const t = await list();
			setThreads(t);
		})();
	}, [
		threadId,
		navigate,
		list
	]);
	(0, import_react.useEffect)(() => {
		if (!authed) return;
		setInitialMessages(null);
		(async () => {
			const msgs = await getMsgs({ data: { threadId } });
			setInitialMessages(msgs ?? []);
		})();
	}, [
		threadId,
		authed,
		getMsgs
	]);
	if (!authed || !initialMessages) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex items-center justify-center text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 mr-2 animate-pulse text-gold" }), " Loading Haki AI…"]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiChatInner, {
		threadId,
		threads,
		setThreads,
		initialMessages,
		input,
		setInput,
		onNew: async () => {
			const t = await create({ data: {} });
			setThreads((prev) => [t, ...prev]);
			navigate({
				to: "/ai/$threadId",
				params: { threadId: t.id }
			});
		},
		onDelete: async (id) => {
			await del({ data: { id } });
			const remaining = threads.filter((x) => x.id !== id);
			setThreads(remaining);
			if (id === threadId) if (remaining[0]) navigate({
				to: "/ai/$threadId",
				params: { threadId: remaining[0].id }
			});
			else navigate({ to: "/ai" });
		},
		saveRef
	});
}
function AiChatInner({ threadId, threads, setThreads, initialMessages, input, setInput, onNew, onDelete, saveRef }) {
	const { messages, sendMessage, status } = useChat({
		id: threadId,
		messages: initialMessages,
		transport: new DefaultChatTransport({ api: "/api/chat" }),
		onError: (err) => toast.error(err.message || "Something went wrong"),
		onFinish: ({ messages: final }) => {
			saveRef.current({ data: {
				threadId,
				messages: final
			} }).then(() => {
				const text = final.find((m) => m.role === "user")?.parts.map((p) => p.type === "text" ? p.text : "").join(" ").trim();
				const title = text ? text.slice(0, 60) : "New conversation";
				setThreads((prev) => prev.map((t) => t.id === threadId ? {
					...t,
					title,
					updated_at: (/* @__PURE__ */ new Date()).toISOString()
				} : t));
			}).catch(() => {});
		}
	});
	const inputRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		inputRef.current?.focus();
	}, [threadId, status]);
	const scrollRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		scrollRef.current?.scrollTo({
			top: scrollRef.current.scrollHeight,
			behavior: "smooth"
		});
	}, [messages, status]);
	const isBusy = status === "submitted" || status === "streaming";
	const submit = () => {
		const text = input.trim();
		if (!text || isBusy) return;
		setInput("");
		sendMessage({ text });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-screen flex bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "hidden md:flex w-72 flex-col border-r bg-muted/30",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-4 border-b flex items-center justify-between",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HakiWordmark, {})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: onNew,
						className: "w-full bg-primary hover:bg-primary/90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 mr-2" }), " New conversation"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-y-auto px-2 pb-4 space-y-1",
					children: threads.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("group flex items-center gap-2 rounded-lg px-2 py-2 text-sm hover:bg-accent/70 transition-colors", t.id === threadId && "bg-accent text-accent-foreground"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/ai/$threadId",
							params: { threadId: t.id },
							className: "flex-1 flex items-center gap-2 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-4 w-4 shrink-0 opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: t.title
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onDelete(t.id),
							className: "opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive",
							"aria-label": "Delete",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
						})]
					}, t.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-3 border-t",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "text-xs text-muted-foreground hover:text-foreground flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3 w-3" }), " Back to HakiHope"]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "flex-1 flex flex-col min-w-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "border-b px-4 md:px-8 py-4 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-9 w-9 rounded-full gradient-hero flex items-center justify-center text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold",
							children: "Haki AI"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "Your Kenyan legal assistant"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/find-lawyer",
							children: "Talk to a lawyer"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: scrollRef,
					className: "flex-1 overflow-y-auto px-4 md:px-8 py-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl space-y-6",
						children: [
							messages.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center py-16",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mx-auto h-16 w-16 rounded-2xl gradient-hero flex items-center justify-center text-primary-foreground mb-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-7 w-7" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "text-2xl font-bold",
										children: "How can I help with your legal question?"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-muted-foreground",
										children: "Describe your situation in your own words. I'll explain the law and next steps."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-8 grid gap-3 sm:grid-cols-2 max-w-xl mx-auto",
										children: SUGGESTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => sendMessage({ text: s }),
											className: "text-left rounded-xl border bg-card p-4 text-sm hover:border-primary/40 hover:shadow-soft transition-all",
											children: s
										}, s))
									})
								]
							}),
							messages.map((m) => {
								const text = m.parts.map((p) => p.type === "text" ? p.text : "").join("");
								if (m.role === "user") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex justify-end",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "max-w-[85%] rounded-2xl bg-primary text-primary-foreground px-4 py-3 text-sm shadow-soft",
										children: text
									})
								}, m.id);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-8 w-8 shrink-0 rounded-full gradient-hero flex items-center justify-center text-primary-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "prose prose-sm dark:prose-invert max-w-none flex-1 pt-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, { children: text })
									})]
								}, m.id);
							}),
							status === "submitted" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-8 w-8 shrink-0 rounded-full gradient-hero flex items-center justify-center text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-muted-foreground pt-2 animate-pulse",
									children: "Haki AI is thinking…"
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t bg-background/80 backdrop-blur p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-end gap-2 rounded-2xl border bg-card p-2 shadow-soft focus-within:border-primary/50 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								ref: inputRef,
								value: input,
								onChange: (e) => setInput(e.target.value),
								onKeyDown: (e) => {
									if (e.key === "Enter" && !e.shiftKey) {
										e.preventDefault();
										submit();
									}
								},
								rows: 1,
								placeholder: "Ask about your rights, a legal situation, or Kenyan law…",
								className: "flex-1 resize-none bg-transparent px-3 py-2 text-sm outline-none max-h-40",
								disabled: isBusy
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								onClick: submit,
								disabled: !input.trim() || isBusy,
								className: "bg-primary hover:bg-primary/90 shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-center text-xs text-muted-foreground",
							children: "Haki AI provides general legal information. For advice on your specific situation, consult a lawyer."
						})]
					})
				})
			]
		})]
	});
}
//#endregion
export { AiChat as component };
