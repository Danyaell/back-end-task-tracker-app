import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["dist", "node_modules"],
  },
  {
    files: ["**/*.{js,mjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": "warn",
      "no-console": "warn",
      eqeqeq: "warn",
      curly: "warn",
      semi: ["warn", "always"],
      "no-undef": "error",
      "no-empty": "warn",
    },
  },
];
