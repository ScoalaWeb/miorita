// @ts-ignore
import type * as Monaco from "monaco-editor/monaco";
import Actions from "./Actions";

const actions = Actions.GetActions();

const tokens = {
    keywords: [
        "break", "case", "catch", "continue", "const",
        "default", "else", "false", "finally", "for",
        "function", "if", "in", "let", "null", "return",
        "switch", "throw", "true", "try", "undefined",
        "var", "while", "of",
    ],
    operators: [
        "<=", ">=", "==", "!=", "===", "!==", "=>", "+", "-", "**",
        "*", "/", "%", "++", "--", "|", "^", "!", "&&", "||", "??",
        "?", ":", "=", "+=", "-=",
    ],
    miorita: actions,
    symbols: /[=><!~?:&|+\-*/^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    digits: /\d+(_+\d+)*/,
    tokenizer: {
        root: [
            [/[{}]/, "delimiter.bracket"],
            { include: "common" },
        ],
        common: [
            [/[a-z_$][\w$]*/, {
                cases: {
                    "@keywords": "keyword",
                    "@miorita": "miorita",
                    "@default": "identifier",
                },
            }],
            [/[A-Z][\w$]*/, "type.identifier"],
            { include: "@whitespace" },
            [/[()[\]]/, "@brackets"],
            [/[<>](?!symbols)/, "@brackets"],
            [/!(?=([^=]|$))/, "delimiter"],
            [/symbols/, {
                cases: {
                    operators: "delimiter",
                    default: "",
                },
            }],
            [/(@digits)[eE]([-+]?(@digits))?/, "number.float"],
            [/(@digits)\.(@digits)([eE][-+]?(@digits))?/, "number.float"],
            [/(@digits)n?/, "number"],
            [/[;,.]/, "delimiter"],
            [/"([^"\\]|\\.)*$/, "string.invalid"],
            [/'([^'\\]|\\.)*$/, "string.invalid"],
            [/"/, "string", "@string_double"],
            [/'/, "string", "@string_single"],
            [/`/, "string", "@string_backtick"],
        ],
        whitespace: [
            [/[ \t\r\n]+/, ""],
            [/\/\*\*(?!\/)/, "comment.doc", "@jsdoc"],
            [/\/\*/, "comment", "@comment"],
            [/\/\/.*$/, "comment"],
        ],
        comment: [
            [/[^/*]+/, "comment"],
            [/\*\//, "comment", "@pop"],
            [/[/*]/, "comment"],
        ],
        jsdoc: [
            [/[^/*]+/, "comment.doc"],
            [/\*\//, "comment.doc", "@pop"],
            [/[/*]/, "comment.doc"],
        ],
        string_double: [
            [/[^\\"]+/, "string"],
            [/@escapes/, "string.escape"],
            [/\\./, "string.escape.invalid"],
            [/"/, "string", "@pop"],
        ],
        string_single: [
            [/[^\\']+/, "string"],
            [/@escapes/, "string.escape"],
            [/\\./, "string.escape.invalid"],
            [/'/, "string", "@pop"],
        ],
        string_backtick: [
            [/\$\{/, { token: "delimiter.bracket", next: "@bracketCounting" }],
            [/[^\\`$]+/, "string"],
            [/@escapes/, "string.escape"],
            [/\\./, "string.escape.invalid"],
            [/`/, "string", "@pop"],
        ],
        bracketCounting: [
            [/\{/, "delimiter.bracket", "@bracketCounting"],
            [/\}/, "delimiter.bracket", "@pop"],
            { include: "common" },
        ],
    },
};

export const monacoOptions = {
    wordWrap: true,
    minimap: {
        enabled: false,
    },
    overviewRulerBorder: false,
    automaticLayout: true,
    fontFamily: "var(--font-default)",
};

export function monacoSetup (monaco: Monaco) {
    monaco.editor.defineTheme("miorita-light", {
        base: "vs",
        inherit: true,
        rules: [
            {
                token: "miorita",
                foreground: "000000",
                fontStyle: "bold",
            },
            {
                token: "keyword",
                fontStyle: "bold",
            },
        ],
        colors: {
            "editor.background": "#fff",
        },
    });
    monaco.editor.defineTheme("miorita-dark", {
        base: "vs-dark",
        inherit: true,
        rules: [
            {
                token: "miorita",
                foreground: "ffffff",
                fontStyle: "bold",
            },
            {
                token: "keyword",
                fontStyle: "bold",
            },
        ],
        colors: {
            "editor.background": "#252525",
        },
    });
    monaco.languages.register({ id: "mioritajs" });
    monaco.languages.setMonarchTokensProvider("mioritajs", tokens);
}
