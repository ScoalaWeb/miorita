module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        "@nuxtjs/eslint-config-typescript",
        "eslint:recommended",
        "airbnb-base",
        "plugin:vue/recommended",
        "plugin:editorconfig/all",
        "@nuxtjs",
        "plugin:nuxt/recommended",
    ],
    plugins: [
        "editorconfig",
    ],
    // add your custom rules here
    rules: {
        "@typescript-eslint/member-delimiter-style": ["error", {
            multiline: {
                delimiter: "none",
                requireLast: true,
            },
            singleline: {
                delimiter: "semi",
                requireLast: true,
            },
        }],
        "@typescript-eslint/semi": ["warn", "always"], // Handled by editorconfig/indent
        "comma-dangle": ["error", "always-multiline"], // Handled by @typescript-eslint/semi
        "import/extensions": "off",
        "import/no-cycle": "off",
        "import/no-extraneous-dependencies": "off",
        "import/order": ["error", {
            alphabetize: {
                order: "asc",
                caseInsensitive: false,
            },
        }],
        indent: "off",
        "max-len": ["error", {
            code: 120,
            ignoreComments: true,
            ignoreStrings: true,
            ignorePattern: "^import .*",
        }],
        quotes: ["error", "double"],
        semi: "off",
        "vue/html-indent": ["error", 4],
        "vue/html-self-closing": "off",
        "vue/multi-word-component-names": "off",
        "vue/script-indent": ["error", 4],
        "vue/singleline-html-element-content-newline": "off",
    },

    overrides: [
        {
            files: [
                "**/*.cy.{j,t}s",
                "cypress/support/**.*",
            ],
            env: {
                jest: true,
            },
            globals: {
                Cypress: true,
                cy: true,
            },
        },
    ],
};
