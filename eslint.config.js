import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import react from "eslint-plugin-react";

export default defineConfig([
  globalIgnores(["dist"]),

  // 1. Masukkan config dasar JS sebagai item terpisah di array
  // Ini akan mengaktifkan aturan 'no-undef' (garis merah jika variabel tidak ada)
  js.configs.recommended,

  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    // 2. Definisikan plugin secara manual
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      react: react,
    },
    // 3. Masukkan aturan (rules)
    rules: {
      // Load aturan dari plugin react-hooks secara manual
      ...reactHooks.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,

      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],

      // Pastikan no-undef aktif (sebenarnya sudah aktif dari js.configs.recommended)
      "no-undef": "error",
      "react/jsx-no-undef": "error",
    },
  },
]);
