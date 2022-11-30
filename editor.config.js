export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: "server",

    serverMiddleware: [
        {
            path: "/api",
            handler: "~/server-middleware/handler",
        },
    ],

    dir: {
        pages: "editor",
        layouts: "editor-layouts",
    },

    server: {
        port: 3001,
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "Miorița Editor",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        "@nuxt/typescript-build",
        // https://go.nuxtjs.dev/eslint
        "@nuxtjs/eslint-module",
        // https://go.nuxtjs.dev/stylelint
        "@nuxtjs/stylelint-module",
        // https://composition-api.nuxtjs.org/
        "@nuxtjs/composition-api/module",
        // https://github.com/nuxt-community/svg-module
        "@nuxtjs/svg",
        // https://pinia.vuejs.org/ssr/nuxt.html#nuxt-2-without-bridge
        ["@pinia/nuxt", { disableVuex: false }],
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/pwa
        "@nuxtjs/pwa",
        // https://go.nuxtjs.dev/content
        "@nuxt/content",
    ],

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: "en",
        },
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {
        liveEdit: false,
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: null,
    },
};
