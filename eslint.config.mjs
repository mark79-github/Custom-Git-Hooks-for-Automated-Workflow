import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

const { node } = globals;

export default defineConfig([
  {
    files: ["**/*.{js}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
  },
  {
    files: ["**/*.{js}"],
    languageOptions: { globals: node },
  },
]);
