module.exports = {

"[externals]/stream [external] (stream, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[project]/app/cart/page.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>Cartpage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$lib$2f$dev$2d$bundler$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/lib/dev-bundler-service.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Cartpage() {
    const [Product, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const get_product = localStorage.getItem("Added-Product");
        setProduct(get_product);
    }, []);
    if (!Product) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$lib$2f$dev$2d$bundler$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DevBundlerService"];
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[80%] grid grid-cols-12 gap-2 m-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-9 bg-white",
                    children: Product.title
                }, void 0, false, {
                    fileName: "[project]/app/cart/page.jsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-3 bg-white",
                    children: Product.price
                }, void 0, false, {
                    fileName: "[project]/app/cart/page.jsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/cart/page.jsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[project]/node_modules/next/dist/server/lib/lru-cache.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LRUCache", {
    enumerable: true,
    get: function() {
        return LRUCache;
    }
});
class LRUCache {
    constructor(maxSize, calculateSize){
        this.cache = new Map();
        this.sizes = new Map();
        this.totalSize = 0;
        this.maxSize = maxSize;
        this.calculateSize = calculateSize || (()=>1);
    }
    set(key, value) {
        if (!key || !value) return;
        const size = this.calculateSize(value);
        if (size > this.maxSize) {
            console.warn('Single item size exceeds maxSize');
            return;
        }
        if (this.cache.has(key)) {
            this.totalSize -= this.sizes.get(key) || 0;
        }
        this.cache.set(key, value);
        this.sizes.set(key, size);
        this.totalSize += size;
        this.touch(key);
    }
    has(key) {
        if (!key) return false;
        this.touch(key);
        return Boolean(this.cache.get(key));
    }
    get(key) {
        if (!key) return;
        const value = this.cache.get(key);
        if (value === undefined) {
            return undefined;
        }
        this.touch(key);
        return value;
    }
    touch(key) {
        const value = this.cache.get(key);
        if (value !== undefined) {
            this.cache.delete(key);
            this.cache.set(key, value);
            this.evictIfNecessary();
        }
    }
    evictIfNecessary() {
        while(this.totalSize > this.maxSize && this.cache.size > 0){
            this.evictLeastRecentlyUsed();
        }
    }
    evictLeastRecentlyUsed() {
        const lruKey = this.cache.keys().next().value;
        if (lruKey !== undefined) {
            const lruSize = this.sizes.get(lruKey) || 0;
            this.totalSize -= lruSize;
            this.cache.delete(lruKey);
            this.sizes.delete(lruKey);
        }
    }
    reset() {
        this.cache.clear();
        this.sizes.clear();
        this.totalSize = 0;
    }
    keys() {
        return [
            ...this.cache.keys()
        ];
    }
    remove(key) {
        if (this.cache.has(key)) {
            this.totalSize -= this.sizes.get(key) || 0;
            this.cache.delete(key);
            this.sizes.delete(key);
        }
    }
    clear() {
        this.cache.clear();
        this.sizes.clear();
        this.totalSize = 0;
    }
    get size() {
        return this.cache.size;
    }
    get currentSize() {
        return this.totalSize;
    }
} //# sourceMappingURL=lru-cache.js.map
}}),
"[project]/node_modules/next/dist/lib/constants.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_SUFFIX: null,
    APP_DIR_ALIAS: null,
    CACHE_ONE_YEAR: null,
    DOT_NEXT_ALIAS: null,
    ESLINT_DEFAULT_DIRS: null,
    GSP_NO_RETURNED_VALUE: null,
    GSSP_COMPONENT_MEMBER_ERROR: null,
    GSSP_NO_RETURNED_VALUE: null,
    INFINITE_CACHE: null,
    INSTRUMENTATION_HOOK_FILENAME: null,
    MATCHED_PATH_HEADER: null,
    MIDDLEWARE_FILENAME: null,
    MIDDLEWARE_LOCATION_REGEXP: null,
    NEXT_BODY_SUFFIX: null,
    NEXT_CACHE_IMPLICIT_TAG_ID: null,
    NEXT_CACHE_REVALIDATED_TAGS_HEADER: null,
    NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: null,
    NEXT_CACHE_SOFT_TAG_MAX_LENGTH: null,
    NEXT_CACHE_TAGS_HEADER: null,
    NEXT_CACHE_TAG_MAX_ITEMS: null,
    NEXT_CACHE_TAG_MAX_LENGTH: null,
    NEXT_DATA_SUFFIX: null,
    NEXT_INTERCEPTION_MARKER_PREFIX: null,
    NEXT_META_SUFFIX: null,
    NEXT_QUERY_PARAM_PREFIX: null,
    NEXT_RESUME_HEADER: null,
    NON_STANDARD_NODE_ENV: null,
    PAGES_DIR_ALIAS: null,
    PRERENDER_REVALIDATE_HEADER: null,
    PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: null,
    PUBLIC_DIR_MIDDLEWARE_CONFLICT: null,
    ROOT_DIR_ALIAS: null,
    RSC_ACTION_CLIENT_WRAPPER_ALIAS: null,
    RSC_ACTION_ENCRYPTION_ALIAS: null,
    RSC_ACTION_PROXY_ALIAS: null,
    RSC_ACTION_VALIDATE_ALIAS: null,
    RSC_CACHE_WRAPPER_ALIAS: null,
    RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS: null,
    RSC_MOD_REF_PROXY_ALIAS: null,
    RSC_PREFETCH_SUFFIX: null,
    RSC_SEGMENTS_DIR_SUFFIX: null,
    RSC_SEGMENT_SUFFIX: null,
    RSC_SUFFIX: null,
    SERVER_PROPS_EXPORT_ERROR: null,
    SERVER_PROPS_GET_INIT_PROPS_CONFLICT: null,
    SERVER_PROPS_SSG_CONFLICT: null,
    SERVER_RUNTIME: null,
    SSG_FALLBACK_EXPORT_ERROR: null,
    SSG_GET_INITIAL_PROPS_CONFLICT: null,
    STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: null,
    UNSTABLE_REVALIDATE_RENAME_ERROR: null,
    WEBPACK_LAYERS: null,
    WEBPACK_RESOURCE_QUERIES: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_SUFFIX: function() {
        return ACTION_SUFFIX;
    },
    APP_DIR_ALIAS: function() {
        return APP_DIR_ALIAS;
    },
    CACHE_ONE_YEAR: function() {
        return CACHE_ONE_YEAR;
    },
    DOT_NEXT_ALIAS: function() {
        return DOT_NEXT_ALIAS;
    },
    ESLINT_DEFAULT_DIRS: function() {
        return ESLINT_DEFAULT_DIRS;
    },
    GSP_NO_RETURNED_VALUE: function() {
        return GSP_NO_RETURNED_VALUE;
    },
    GSSP_COMPONENT_MEMBER_ERROR: function() {
        return GSSP_COMPONENT_MEMBER_ERROR;
    },
    GSSP_NO_RETURNED_VALUE: function() {
        return GSSP_NO_RETURNED_VALUE;
    },
    INFINITE_CACHE: function() {
        return INFINITE_CACHE;
    },
    INSTRUMENTATION_HOOK_FILENAME: function() {
        return INSTRUMENTATION_HOOK_FILENAME;
    },
    MATCHED_PATH_HEADER: function() {
        return MATCHED_PATH_HEADER;
    },
    MIDDLEWARE_FILENAME: function() {
        return MIDDLEWARE_FILENAME;
    },
    MIDDLEWARE_LOCATION_REGEXP: function() {
        return MIDDLEWARE_LOCATION_REGEXP;
    },
    NEXT_BODY_SUFFIX: function() {
        return NEXT_BODY_SUFFIX;
    },
    NEXT_CACHE_IMPLICIT_TAG_ID: function() {
        return NEXT_CACHE_IMPLICIT_TAG_ID;
    },
    NEXT_CACHE_REVALIDATED_TAGS_HEADER: function() {
        return NEXT_CACHE_REVALIDATED_TAGS_HEADER;
    },
    NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function() {
        return NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER;
    },
    NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_SOFT_TAG_MAX_LENGTH;
    },
    NEXT_CACHE_TAGS_HEADER: function() {
        return NEXT_CACHE_TAGS_HEADER;
    },
    NEXT_CACHE_TAG_MAX_ITEMS: function() {
        return NEXT_CACHE_TAG_MAX_ITEMS;
    },
    NEXT_CACHE_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_TAG_MAX_LENGTH;
    },
    NEXT_DATA_SUFFIX: function() {
        return NEXT_DATA_SUFFIX;
    },
    NEXT_INTERCEPTION_MARKER_PREFIX: function() {
        return NEXT_INTERCEPTION_MARKER_PREFIX;
    },
    NEXT_META_SUFFIX: function() {
        return NEXT_META_SUFFIX;
    },
    NEXT_QUERY_PARAM_PREFIX: function() {
        return NEXT_QUERY_PARAM_PREFIX;
    },
    NEXT_RESUME_HEADER: function() {
        return NEXT_RESUME_HEADER;
    },
    NON_STANDARD_NODE_ENV: function() {
        return NON_STANDARD_NODE_ENV;
    },
    PAGES_DIR_ALIAS: function() {
        return PAGES_DIR_ALIAS;
    },
    PRERENDER_REVALIDATE_HEADER: function() {
        return PRERENDER_REVALIDATE_HEADER;
    },
    PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function() {
        return PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER;
    },
    PUBLIC_DIR_MIDDLEWARE_CONFLICT: function() {
        return PUBLIC_DIR_MIDDLEWARE_CONFLICT;
    },
    ROOT_DIR_ALIAS: function() {
        return ROOT_DIR_ALIAS;
    },
    RSC_ACTION_CLIENT_WRAPPER_ALIAS: function() {
        return RSC_ACTION_CLIENT_WRAPPER_ALIAS;
    },
    RSC_ACTION_ENCRYPTION_ALIAS: function() {
        return RSC_ACTION_ENCRYPTION_ALIAS;
    },
    RSC_ACTION_PROXY_ALIAS: function() {
        return RSC_ACTION_PROXY_ALIAS;
    },
    RSC_ACTION_VALIDATE_ALIAS: function() {
        return RSC_ACTION_VALIDATE_ALIAS;
    },
    RSC_CACHE_WRAPPER_ALIAS: function() {
        return RSC_CACHE_WRAPPER_ALIAS;
    },
    RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS: function() {
        return RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS;
    },
    RSC_MOD_REF_PROXY_ALIAS: function() {
        return RSC_MOD_REF_PROXY_ALIAS;
    },
    RSC_PREFETCH_SUFFIX: function() {
        return RSC_PREFETCH_SUFFIX;
    },
    RSC_SEGMENTS_DIR_SUFFIX: function() {
        return RSC_SEGMENTS_DIR_SUFFIX;
    },
    RSC_SEGMENT_SUFFIX: function() {
        return RSC_SEGMENT_SUFFIX;
    },
    RSC_SUFFIX: function() {
        return RSC_SUFFIX;
    },
    SERVER_PROPS_EXPORT_ERROR: function() {
        return SERVER_PROPS_EXPORT_ERROR;
    },
    SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function() {
        return SERVER_PROPS_GET_INIT_PROPS_CONFLICT;
    },
    SERVER_PROPS_SSG_CONFLICT: function() {
        return SERVER_PROPS_SSG_CONFLICT;
    },
    SERVER_RUNTIME: function() {
        return SERVER_RUNTIME;
    },
    SSG_FALLBACK_EXPORT_ERROR: function() {
        return SSG_FALLBACK_EXPORT_ERROR;
    },
    SSG_GET_INITIAL_PROPS_CONFLICT: function() {
        return SSG_GET_INITIAL_PROPS_CONFLICT;
    },
    STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function() {
        return STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR;
    },
    UNSTABLE_REVALIDATE_RENAME_ERROR: function() {
        return UNSTABLE_REVALIDATE_RENAME_ERROR;
    },
    WEBPACK_LAYERS: function() {
        return WEBPACK_LAYERS;
    },
    WEBPACK_RESOURCE_QUERIES: function() {
        return WEBPACK_RESOURCE_QUERIES;
    }
});
const NEXT_QUERY_PARAM_PREFIX = 'nxtP';
const NEXT_INTERCEPTION_MARKER_PREFIX = 'nxtI';
const MATCHED_PATH_HEADER = 'x-matched-path';
const PRERENDER_REVALIDATE_HEADER = 'x-prerender-revalidate';
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = 'x-prerender-revalidate-if-generated';
const RSC_PREFETCH_SUFFIX = '.prefetch.rsc';
const RSC_SEGMENTS_DIR_SUFFIX = '.segments';
const RSC_SEGMENT_SUFFIX = '.segment.rsc';
const RSC_SUFFIX = '.rsc';
const ACTION_SUFFIX = '.action';
const NEXT_DATA_SUFFIX = '.json';
const NEXT_META_SUFFIX = '.meta';
const NEXT_BODY_SUFFIX = '.body';
const NEXT_CACHE_TAGS_HEADER = 'x-next-cache-tags';
const NEXT_CACHE_REVALIDATED_TAGS_HEADER = 'x-next-revalidated-tags';
const NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = 'x-next-revalidate-tag-token';
const NEXT_RESUME_HEADER = 'next-resume';
const NEXT_CACHE_TAG_MAX_ITEMS = 128;
const NEXT_CACHE_TAG_MAX_LENGTH = 256;
const NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
const NEXT_CACHE_IMPLICIT_TAG_ID = '_N_T_';
const CACHE_ONE_YEAR = 31536000;
const INFINITE_CACHE = 0xfffffffe;
const MIDDLEWARE_FILENAME = 'middleware';
const MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
const INSTRUMENTATION_HOOK_FILENAME = 'instrumentation';
const PAGES_DIR_ALIAS = 'private-next-pages';
const DOT_NEXT_ALIAS = 'private-dot-next';
const ROOT_DIR_ALIAS = 'private-next-root-dir';
const APP_DIR_ALIAS = 'private-next-app-dir';
const RSC_MOD_REF_PROXY_ALIAS = 'private-next-rsc-mod-ref-proxy';
const RSC_ACTION_VALIDATE_ALIAS = 'private-next-rsc-action-validate';
const RSC_ACTION_PROXY_ALIAS = 'private-next-rsc-server-reference';
const RSC_CACHE_WRAPPER_ALIAS = 'private-next-rsc-cache-wrapper';
const RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS = 'private-next-rsc-track-dynamic-import';
const RSC_ACTION_ENCRYPTION_ALIAS = 'private-next-rsc-action-encryption';
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = 'private-next-rsc-action-client-wrapper';
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
const SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
const SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
const SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
const GSP_NO_RETURNED_VALUE = 'Your `getStaticProps` function did not return an object. Did you forget to add a `return`?';
const GSSP_NO_RETURNED_VALUE = 'Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?';
const UNSTABLE_REVALIDATE_RENAME_ERROR = 'The `unstable_revalidate` property is available for general use.\n' + 'Please use `revalidate` instead.';
const GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
const NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
const SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
const ESLINT_DEFAULT_DIRS = [
    'app',
    'pages',
    'components',
    'lib',
    'src'
];
const SERVER_RUNTIME = {
    edge: 'edge',
    experimentalEdge: 'experimental-edge',
    nodejs: 'nodejs'
};
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ const WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: 'shared',
    /**
   * The layer for server-only runtime and picking up `react-server` export conditions.
   * Including app router RSC pages and app router custom routes and metadata routes.
   */ reactServerComponents: 'rsc',
    /**
   * Server Side Rendering layer for app (ssr).
   */ serverSideRendering: 'ssr',
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: 'action-browser',
    /**
   * The Node.js bundle layer for the API routes.
   */ apiNode: 'api-node',
    /**
   * The Edge Lite bundle layer for the API routes.
   */ apiEdge: 'api-edge',
    /**
   * The layer for the middleware code.
   */ middleware: 'middleware',
    /**
   * The layer for the instrumentation hooks.
   */ instrument: 'instrument',
    /**
   * The layer for assets on the edge.
   */ edgeAsset: 'edge-asset',
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: 'app-pages-browser',
    /**
   * The browser client bundle layer for Pages directory.
   */ pagesDirBrowser: 'pages-dir-browser',
    /**
   * The Edge Lite bundle layer for Pages directory.
   */ pagesDirEdge: 'pages-dir-edge',
    /**
   * The Node.js bundle layer for Pages directory.
   */ pagesDirNode: 'pages-dir-node'
};
const WEBPACK_LAYERS = {
    ...WEBPACK_LAYERS_NAMES,
    GROUP: {
        builtinReact: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ],
        serverOnly: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        neutralTarget: [
            // pages api
            WEBPACK_LAYERS_NAMES.apiNode,
            WEBPACK_LAYERS_NAMES.apiEdge
        ],
        clientOnly: [
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser
        ],
        bundled: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.shared,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        appPages: [
            // app router pages and layouts
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ]
    }
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: '__next_edge_ssr_entry__',
    metadata: '__next_metadata__',
    metadataRoute: '__next_metadata_route__',
    metadataImageMeta: '__next_metadata_image_meta__'
}; //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/next/dist/server/web/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    fromNodeOutgoingHttpHeaders: null,
    normalizeNextQueryParam: null,
    splitCookiesString: null,
    toNodeOutgoingHttpHeaders: null,
    validateURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    fromNodeOutgoingHttpHeaders: function() {
        return fromNodeOutgoingHttpHeaders;
    },
    normalizeNextQueryParam: function() {
        return normalizeNextQueryParam;
    },
    splitCookiesString: function() {
        return splitCookiesString;
    },
    toNodeOutgoingHttpHeaders: function() {
        return toNodeOutgoingHttpHeaders;
    },
    validateURL: function() {
        return validateURL;
    }
});
const _constants = __turbopack_context__.r("[project]/node_modules/next/dist/lib/constants.js [app-ssr] (ecmascript)");
function fromNodeOutgoingHttpHeaders(nodeHeaders) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(nodeHeaders)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (typeof v === 'undefined') continue;
            if (typeof v === 'number') {
                v = v.toString();
            }
            headers.append(key, v);
        }
    }
    return headers;
}
function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== '=' && ch !== ';' && ch !== ',';
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ',') {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === '=') {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
function toNodeOutgoingHttpHeaders(headers) {
    const nodeHeaders = {};
    const cookies = [];
    if (headers) {
        for (const [key, value] of headers.entries()){
            if (key.toLowerCase() === 'set-cookie') {
                // We may have gotten a comma joined string of cookies, or multiple
                // set-cookie headers. We need to merge them into one header array
                // to represent all the cookies.
                cookies.push(...splitCookiesString(value));
                nodeHeaders[key] = cookies.length === 1 ? cookies[0] : cookies;
            } else {
                nodeHeaders[key] = value;
            }
        }
    }
    return nodeHeaders;
}
function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw Object.defineProperty(new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        }), "__NEXT_ERROR_CODE", {
            value: "E61",
            enumerable: false,
            configurable: true
        });
    }
}
function normalizeNextQueryParam(key) {
    const prefixes = [
        _constants.NEXT_QUERY_PARAM_PREFIX,
        _constants.NEXT_INTERCEPTION_MARKER_PREFIX
    ];
    for (const prefix of prefixes){
        if (key !== prefix && key.startsWith(prefix)) {
            return key.substring(prefix.length);
        }
    }
    return null;
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/next/dist/server/lib/mock-request.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    MockedRequest: null,
    MockedResponse: null,
    createRequestResponseMocks: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    MockedRequest: function() {
        return MockedRequest;
    },
    MockedResponse: function() {
        return MockedResponse;
    },
    createRequestResponseMocks: function() {
        return createRequestResponseMocks;
    }
});
const _stream = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[externals]/stream [external] (stream, cjs)"));
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/server/web/utils.js [app-ssr] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class MockedRequest extends _stream.default.Readable {
    constructor({ url, headers, method, socket = null, readable }){
        super(), this.httpVersion = '1.0', this.httpVersionMajor = 1, this.httpVersionMinor = 0, // always returns false for the `encrypted` property and undefined for the
        // `remoteAddress` property.
        this.socket = new Proxy({}, {
            get: (_target, prop)=>{
                if (prop !== 'encrypted' && prop !== 'remoteAddress') {
                    throw Object.defineProperty(new Error('Method not implemented'), "__NEXT_ERROR_CODE", {
                        value: "E52",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (prop === 'remoteAddress') return undefined;
                // For this mock request, always ensure we just respond with the encrypted
                // set to false to ensure there's no odd leakages.
                return false;
            }
        });
        this.url = url;
        this.headers = headers;
        this.method = method;
        if (readable) {
            this.bodyReadable = readable;
            this.bodyReadable.on('end', ()=>this.emit('end'));
            this.bodyReadable.on('close', ()=>this.emit('close'));
        }
        if (socket) {
            this.socket = socket;
        }
    }
    get headersDistinct() {
        const headers = {};
        for (const [key, value] of Object.entries(this.headers)){
            if (!value) continue;
            headers[key] = Array.isArray(value) ? value : [
                value
            ];
        }
        return headers;
    }
    _read(size) {
        if (this.bodyReadable) {
            return this.bodyReadable._read(size);
        } else {
            this.emit('end');
            this.emit('close');
        }
    }
    /**
   * The `connection` property is just an alias for the `socket` property.
   *
   * @deprecated — since v13.0.0 - Use socket instead.
   */ get connection() {
        return this.socket;
    }
    // The following methods are not implemented as they are not used in the
    // Next.js codebase.
    get aborted() {
        throw Object.defineProperty(new Error('Method not implemented'), "__NEXT_ERROR_CODE", {
            value: "E52",
            enumerable: false,
            configurable: true
        });
    }
    get complete() {
        throw Object.defineProperty(new Error('Method not implemented'), "__NEXT_ERROR_CODE", {
            value: "E52",
            enumerable: false,
            configurable: true
        });
    }
    get trailers() {
        throw Object.defineProperty(new Error('Method not implemented'), "__NEXT_ERROR_CODE", {
            value: "E52",
            enumerable: false,
            configurable: true
        });
    }
    get trailersDistinct() {
        throw Object.defineProperty(new Error('Method not implemented'), "__NEXT_ERROR_CODE", {
            value: "E52",
            enumerable: false,
            configurable: true
        });
    }
    get rawTrailers() {
        throw Object.defineProperty(new Error('Method not implemented'), "__NEXT_ERROR_CODE", {
            value: "E52",
            enumerable: false,
            configurable: true
        });
    }
    get rawHeaders() {
        throw Object.defineProperty(new Error('Method not implemented.'), "__NEXT_ERROR_CODE", {
            value: "E41",
            enumerable: false,
            configurable: true
        });
    }
    setTimeout() {
        throw Object.defineProperty(new Error('Method not implemented.'), "__NEXT_ERROR_CODE", {
            value: "E41",
            enumerable: false,
            configurable: true
        });
    }
}
class MockedResponse extends _stream.default.Writable {
    constructor(res = {}){
        super(), this.statusMessage = '', this.finished = false, this.headersSent = false, /**
   * A list of buffers that have been written to the response.
   *
   * @internal - used internally by Next.js
   */ this.buffers = [];
        this.statusCode = res.statusCode ?? 200;
        this.socket = res.socket ?? null;
        this.headers = res.headers ? (0, _utils.fromNodeOutgoingHttpHeaders)(res.headers) : new Headers();
        this.headPromise = new Promise((resolve)=>{
            this.headPromiseResolve = resolve;
        });
        // Attach listeners for the `finish`, `end`, and `error` events to the
        // `MockedResponse` instance.
        this.hasStreamed = new Promise((resolve, reject)=>{
            this.on('finish', ()=>resolve(true));
            this.on('end', ()=>resolve(true));
            this.on('error', (err)=>reject(err));
        }).then((val)=>{
            this.headPromiseResolve == null ? void 0 : this.headPromiseResolve.call(this);
            return val;
        });
        if (res.resWriter) {
            this.resWriter = res.resWriter;
        }
    }
    appendHeader(name, value) {
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (const v of values){
            this.headers.append(name, v);
        }
        return this;
    }
    /**
   * Returns true if the response has been sent, false otherwise.
   *
   * @internal - used internally by Next.js
   */ get isSent() {
        return this.finished || this.headersSent;
    }
    /**
   * The `connection` property is just an alias for the `socket` property.
   *
   * @deprecated — since v13.0.0 - Use socket instead.
   */ get connection() {
        return this.socket;
    }
    write(chunk) {
        if (this.resWriter) {
            return this.resWriter(chunk);
        }
        this.buffers.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
        return true;
    }
    end() {
        this.finished = true;
        return super.end(...arguments);
    }
    /**
   * This method is a no-op because the `MockedResponse` instance is not
   * actually connected to a socket. This method is not specified on the
   * interface type for `ServerResponse` but is called by Node.js.
   *
   * @see https://github.com/nodejs/node/pull/7949
   */ _implicitHeader() {}
    _write(chunk, _encoding, callback) {
        this.write(chunk);
        // According to Node.js documentation, the callback MUST be invoked to
        // signal that the write completed successfully. If this callback is not
        // invoked, the 'finish' event will not be emitted.
        //
        // https://nodejs.org/docs/latest-v16.x/api/stream.html#writable_writechunk-encoding-callback
        callback();
    }
    writeHead(statusCode, statusMessage, headers) {
        if (!headers && typeof statusMessage !== 'string') {
            headers = statusMessage;
        } else if (typeof statusMessage === 'string' && statusMessage.length > 0) {
            this.statusMessage = statusMessage;
        }
        if (headers) {
            // When headers have been set with response.setHeader(), they will be
            // merged with any headers passed to response.writeHead(), with the
            // headers passed to response.writeHead() given precedence.
            //
            // https://nodejs.org/api/http.html#responsewriteheadstatuscode-statusmessage-headers
            //
            // For this reason, we need to only call `set` to ensure that this will
            // overwrite any existing headers.
            if (Array.isArray(headers)) {
                // headers may be an Array where the keys and values are in the same list.
                // It is not a list of tuples. So, the even-numbered offsets are key
                // values, and the odd-numbered offsets are the associated values. The
                // array is in the same format as request.rawHeaders.
                for(let i = 0; i < headers.length; i += 2){
                    // The header key is always a string according to the spec.
                    this.setHeader(headers[i], headers[i + 1]);
                }
            } else {
                for (const [key, value] of Object.entries(headers)){
                    // Skip undefined values
                    if (typeof value === 'undefined') continue;
                    this.setHeader(key, value);
                }
            }
        }
        this.statusCode = statusCode;
        this.headersSent = true;
        this.headPromiseResolve == null ? void 0 : this.headPromiseResolve.call(this);
        return this;
    }
    hasHeader(name) {
        return this.headers.has(name);
    }
    getHeader(name) {
        return this.headers.get(name) ?? undefined;
    }
    getHeaders() {
        return (0, _utils.toNodeOutgoingHttpHeaders)(this.headers);
    }
    getHeaderNames() {
        return Array.from(this.headers.keys());
    }
    setHeader(name, value) {
        if (Array.isArray(value)) {
            // Because `set` here should override any existing values, we need to
            // delete the existing values before setting the new ones via `append`.
            this.headers.delete(name);
            for (const v of value){
                this.headers.append(name, v);
            }
        } else if (typeof value === 'number') {
            this.headers.set(name, value.toString());
        } else {
            this.headers.set(name, value);
        }
        return this;
    }
    removeHeader(name) {
        this.headers.delete(name);
    }
    flushHeaders() {
    // This is a no-op because we don't actually have a socket to flush the
    // headers to.
    }
    // The following methods are not implemented as they are not used in the
    // Next.js codebase.
    get strictContentLength() {
        throw Object.defineProperty(new Error('Method not implemented.'), "__NEXT_ERROR_CODE", {
            value: "E41",
            enumerable: false,
            configurable: true
        });
    }
    writeEarlyHints() {
        throw Object.defineProperty(new Error('Method not implemented.'), "__NEXT_ERROR_CODE", {
            value: "E41",
            enumerable: false,
            configurable: true
        });
    }
    get req() {
        throw Object.defineProperty(new Error('Method not implemented.'), "__NEXT_ERROR_CODE", {
            value: "E41",
            enumerable: false,
            configurable: true
        });
    }
    assignSocket() {
        throw Object.defineProperty(new Error('Method not implemented.'), "__NEXT_ERROR_CODE", {
            value: "E41",
            enumerable: false,
            configurable: true
        });
    }
    detachSocket() {
        throw Object.defineProperty(new Error('Method not implemented.'), "__NEXT_ERROR_CODE", {
            value: "E41",
            enumerable: false,
            configurable: true
        });
    }
    writeContinue() {
        throw Object.defineProperty(new Error('Method not implemented.'), "__NEXT_ERROR_CODE", {
            value: "E41",
            enumerable: false,
            configurable: true
        });
    }
    writeProcessing() {
        throw Object.defineProperty(new Error('Method not implemented.'), "__NEXT_ERROR_CODE", {
            value: "E41",
            enumerable: false,
            configurable: true
        });
    }
    get upgrading() {
        throw Object.defineProperty(new Error('Method not implemented.'), "__NEXT_ERROR_CODE", {
            value: "E41",
            enumerable: false,
            configurable: true
        });
    }
    get chunkedEncoding() {
        throw Object.defineProperty(new Error('Method not implemented.'), "__NEXT_ERROR_CODE", {
            value: "E41",
            enumerable: false,
            configurable: true
        });
    }
    get shouldKeepAlive() {
        throw Object.defineProperty(new Error('Method not implemented.'), "__NEXT_ERROR_CODE", {
            value: "E41",
            enumerable: false,
            configurable: true
        });
    }
    get useChunkedEncodingByDefault() {
        throw Object.defineProperty(new Error('Method not implemented.'), "__NEXT_ERROR_CODE", {
            value: "E41",
            enumerable: false,
            configurable: true
        });
    }
    get sendDate() {
        throw Object.defineProperty(new Error('Method not implemented.'), "__NEXT_ERROR_CODE", {
            value: "E41",
            enumerable: false,
            configurable: true
        });
    }
    setTimeout() {
        throw Object.defineProperty(new Error('Method not implemented.'), "__NEXT_ERROR_CODE", {
            value: "E41",
            enumerable: false,
            configurable: true
        });
    }
    addTrailers() {
        throw Object.defineProperty(new Error('Method not implemented.'), "__NEXT_ERROR_CODE", {
            value: "E41",
            enumerable: false,
            configurable: true
        });
    }
    setHeaders() {
        throw Object.defineProperty(new Error('Method not implemented.'), "__NEXT_ERROR_CODE", {
            value: "E41",
            enumerable: false,
            configurable: true
        });
    }
}
function createRequestResponseMocks({ url, headers = {}, method = 'GET', bodyReadable, resWriter, socket = null }) {
    return {
        req: new MockedRequest({
            url,
            headers,
            method,
            socket,
            readable: bodyReadable
        }),
        res: new MockedResponse({
            socket,
            resWriter
        })
    };
} //# sourceMappingURL=mock-request.js.map
}}),
"[project]/node_modules/next/dist/server/lib/dev-bundler-service.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DevBundlerService", {
    enumerable: true,
    get: function() {
        return DevBundlerService;
    }
});
const _lrucache = __turbopack_context__.r("[project]/node_modules/next/dist/server/lib/lru-cache.js [app-ssr] (ecmascript)");
const _mockrequest = __turbopack_context__.r("[project]/node_modules/next/dist/server/lib/mock-request.js [app-ssr] (ecmascript)");
const _hotreloadertypes = __turbopack_context__.r("[project]/node_modules/next/dist/server/dev/hot-reloader-types.js [app-ssr] (ecmascript)");
class DevBundlerService {
    constructor(bundler, handler){
        this.bundler = bundler;
        this.handler = handler;
        this.ensurePage = async (definition)=>{
            // TODO: remove after ensure is pulled out of server
            return await this.bundler.hotReloader.ensurePage(definition);
        };
        this.logErrorWithOriginalStack = this.bundler.logErrorWithOriginalStack.bind(this.bundler);
        this.appIsrManifestInner = new _lrucache.LRUCache(8000, function length() {
            return 16;
        });
    }
    async getFallbackErrorComponents(url) {
        await this.bundler.hotReloader.buildFallbackError();
        // Build the error page to ensure the fallback is built too.
        // TODO: See if this can be moved into hotReloader or removed.
        await this.bundler.hotReloader.ensurePage({
            page: '/_error',
            clientOnly: false,
            definition: undefined,
            url
        });
    }
    async getCompilationError(page) {
        const errors = await this.bundler.hotReloader.getCompilationErrors(page);
        if (!errors) return;
        // Return the very first error we found.
        return errors[0];
    }
    async revalidate({ urlPath, revalidateHeaders, opts: revalidateOpts }) {
        const mocked = (0, _mockrequest.createRequestResponseMocks)({
            url: urlPath,
            headers: revalidateHeaders
        });
        await this.handler(mocked.req, mocked.res);
        await mocked.res.hasStreamed;
        if (mocked.res.getHeader('x-nextjs-cache') !== 'REVALIDATED' && mocked.res.statusCode !== 200 && !(mocked.res.statusCode === 404 && revalidateOpts.unstable_onlyGenerated)) {
            throw Object.defineProperty(new Error(`Invalid response ${mocked.res.statusCode}`), "__NEXT_ERROR_CODE", {
                value: "E175",
                enumerable: false,
                configurable: true
            });
        }
        return {};
    }
    get appIsrManifest() {
        const serializableManifest = {};
        for (const key of this.appIsrManifestInner.keys()){
            serializableManifest[key] = this.appIsrManifestInner.get(key);
        }
        return serializableManifest;
    }
    setIsrStatus(key, value) {
        var _this_bundler_hotReloader, _this_bundler;
        if (value === null) {
            this.appIsrManifestInner.remove(key);
        } else {
            this.appIsrManifestInner.set(key, value);
        }
        (_this_bundler = this.bundler) == null ? void 0 : (_this_bundler_hotReloader = _this_bundler.hotReloader) == null ? void 0 : _this_bundler_hotReloader.send({
            action: _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.ISR_MANIFEST,
            data: this.appIsrManifest
        });
    }
    close() {
        this.bundler.hotReloader.close();
    }
} //# sourceMappingURL=dev-bundler-service.js.map
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__d1488893._.js.map