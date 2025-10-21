// eslint.config.mjs
import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
  // Базовые рекомендованные правила
  js.configs.recommended,

  // Настройки для Node.js
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        // Node.js глобальные переменные
        console: "readonly",
        process: "readonly",
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        Buffer: "readonly",
        setImmediate: "readonly",
        clearImmediate: "readonly",
        setInterval: "readonly",
        setTimeout: "readonly",
        clearInterval: "readonly",
        clearTimeout: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      "prefer-const": "error",
      "no-var": "error",
      eqeqeq: "error",
      curly: "error",
      semi: "error",
      quotes: ["error", "single"],
      indent: ["error", 2],
    },
  },
]);
