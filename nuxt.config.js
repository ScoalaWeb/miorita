import en from "./locales/en.json";
import ro from "./locales/ro.json";

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: "static",

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "Miorița by Școala Web",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                hid: "description",
                name: "description",
                content: "Miorița is a little sheep that can be controlled by coding. A cute introduction to the world of programming.",
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
        "@nuxtjs/i18n",
    ],
    i18n: {
        locales: ["en", "ro"],
        defaultLocale: "en",
        vueI18n: {
            fallbackLocale: "ro",
            messages: { ro, en },
        },
    },

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
