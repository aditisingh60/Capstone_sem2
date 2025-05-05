module.exports = {

"[project]/data/cryptoData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cryptoAssets": (()=>cryptoAssets),
    "marketData": (()=>marketData),
    "socialSentiment": (()=>socialSentiment)
});
const cryptoAssets = [
    {
        id: 1,
        name: 'Bitcoin',
        symbol: 'BTC',
        icon: 'fab fa-bitcoin',
        price: '$29,850.24',
        priceChange: '+1.24%',
        holdings: '0.58',
        holdingsValue: '$17,313.14',
        allocation: 70
    },
    {
        id: 2,
        name: 'Ethereum',
        symbol: 'ETH',
        icon: 'fab fa-ethereum',
        price: '$1,824.56',
        priceChange: '-0.87%',
        holdings: '3.2',
        holdingsValue: '$5,838.59',
        allocation: 20
    },
    {
        id: 3,
        name: 'USD Coin',
        symbol: 'USDC',
        icon: 'fas fa-dollar-sign',
        price: '$1.00',
        priceChange: '0.00%',
        holdings: '1,484.16',
        holdingsValue: '$1,484.16',
        allocation: 10
    }
];
const marketData = [
    {
        month: 'Apr',
        volume: 30
    },
    {
        month: 'May',
        volume: 45
    },
    {
        month: 'Jun',
        volume: 70
    },
    {
        month: 'Jul',
        volume: 55
    },
    {
        month: 'Aug',
        volume: 25
    },
    {
        month: 'Sep',
        volume: 40
    },
    {
        month: 'Oct',
        volume: 65
    },
    {
        month: 'Nov',
        volume: 80
    },
    {
        month: 'Dec',
        volume: 60
    },
    {
        month: 'Jan',
        volume: 50
    }
];
const socialSentiment = [
    {
        name: 'Twitter',
        mentions: '12.4K mentions',
        icon: 'fab fa-twitter',
        color: '#1DA1F2'
    },
    {
        name: 'Reddit',
        mentions: '8.2K discussions',
        icon: 'fab fa-reddit-alien',
        color: '#FF4500'
    },
    {
        name: 'Discord',
        mentions: '5.7K messages',
        icon: 'fab fa-discord',
        color: '#7289DA'
    },
    {
        name: 'Telegram',
        mentions: '3.9K posts',
        icon: 'fab fa-telegram-plane',
        color: '#25D366'
    }
];
}}),
"[project]/app/page.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "page-actions": "page-module__E0kJGG__page-actions",
  "page-header": "page-module__E0kJGG__page-header",
  "page-subtitle": "page-module__E0kJGG__page-subtitle",
  "page-title": "page-module__E0kJGG__page-title",
});
}}),
"[project]/app/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Dashboard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$cryptoData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/cryptoData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/page.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
function Dashboard() {
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeChartPeriod, setActiveChartPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("1W");
    const stats = [
        {
            label: 'Portfolio Value',
            value: '$24,635.89',
            change: '+2.45%',
            changeType: 'positive',
            period: 'vs yesterday',
            icon: 'fa-wallet',
            iconColor: 'primary'
        },
        {
            label: '24h Trading Volume',
            value: '$5,934.61',
            change: '-1.2%',
            changeType: 'negative',
            period: 'vs yesterday',
            icon: 'fa-chart-line',
            iconColor: 'secondary'
        },
        {
            label: 'Assets',
            value: '12',
            change: '+1',
            changeType: 'positive',
            period: 'since last week',
            icon: 'fa-coins',
            iconColor: 'purple'
        },
        {
            label: 'Total Profit/Loss',
            value: '+$1,258.32',
            change: '+4.8%',
            changeType: 'positive',
            period: 'all time',
            icon: 'fa-percentage',
            iconColor: 'warning'
        }
    ];
    const chartPeriods = [
        '1D',
        '1W',
        '1M',
        '3M',
        '1Y'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "page-header",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "page-title",
                            children: "Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 53,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "page-subtitle",
                            children: "Overview of your cryptocurrency portfolio"
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 54,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 52,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "page-actions",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "search-bar",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search for assets...",
                                className: "search-input",
                                value: searchTerm,
                                onChange: (e)=>setSearchTerm(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 57,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "action-button"
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 56,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.js",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.js",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=_41823fdd._.js.map