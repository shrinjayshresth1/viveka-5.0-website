"use client";

import { useEffect } from "react";

/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  LiveChat.com Chat Widget Integration                      ║
 * ║                                                            ║
 * ║  Self-contained component — just render <LiveChatWidget /> ║
 * ║  to inject the widget. Hides automatically on unmount.     ║
 * ║                                                            ║
 * ║  License: 19500455                                         ║
 * ║  Dashboard: https://my.livechatinc.com/                    ║
 * ╚══════════════════════════════════════════════════════════════╝
 */
export default function LiveChatWidget() {
    useEffect(() => {
        const w = window as any;

        // Initialize LiveChat configuration
        w.__lc = w.__lc || {};
        w.__lc.license = 19500455;
        w.__lc.integration_name = "manual_onboarding";
        w.__lc.product_name = "livechat";

        // LiveChat bootstrap script (official embed code)
        (function (n: any, t: any, c: any) {
            function i(n: any) {
                return e._h ? e._h.apply(null, n) : e._q.push(n);
            }
            var e: any = {
                _q: [],
                _h: null,
                _v: "2.0",
                on: function () {
                    i(["on", c.call(arguments)]);
                },
                once: function () {
                    i(["once", c.call(arguments)]);
                },
                off: function () {
                    i(["off", c.call(arguments)]);
                },
                get: function () {
                    if (!e._h)
                        throw new Error(
                            "[LiveChatWidget] You can't use getters before load."
                        );
                    return i(["get", c.call(arguments)]);
                },
                call: function () {
                    i(["call", c.call(arguments)]);
                },
                init: function () {
                    var n: any = t.createElement("script");
                    n.async = !0;
                    n.type = "text/javascript";
                    n.src = "https://cdn.livechatinc.com/tracking.js";
                    t.head.appendChild(n);
                },
            };
            !n.__lc.asyncInit && e.init();
            n.LiveChatWidget = n.LiveChatWidget || e;
        })(window, document, [].slice);

        // Ensure the widget bubble is visible after loading
        const showWidget = setInterval(() => {
            if (w.LiveChatWidget && typeof w.LiveChatWidget.call === "function") {
                w.LiveChatWidget.call("minimize");
                clearInterval(showWidget);
            }
        }, 500);

        console.log("[LiveChat] ✅ Widget loaded");

        // Cleanup on unmount (e.g., navigating away from homepage)
        return () => {
            clearInterval(showWidget);

            // Hide the widget (LiveChat persists in memory, so we hide it)
            if (w.LiveChatWidget && typeof w.LiveChatWidget.call === "function") {
                w.LiveChatWidget.call("hide");
            }

            console.log("[LiveChat] ❌ Widget hidden");
        };
    }, []);

    // Fallback for users with JavaScript disabled
    return (
        <noscript>
            <a
                href="https://www.livechat.com/chat-with/19500455/"
                rel="nofollow"
            >
                Chat with us
            </a>
            , powered by{" "}
            <a
                href="https://www.livechat.com/?welcome"
                rel="noopener nofollow"
                target="_blank"
            >
                LiveChat
            </a>
        </noscript>
    );
}
