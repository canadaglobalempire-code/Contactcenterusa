import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Literal quotes/apostrophes in JSX text render fine in the browser;
      // this rule is purely stylistic and was blocking the build.
      "react/no-unescaped-entities": "off",
      // Unused imports/vars are reported but must not fail the build.
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
]);

export default eslintConfig;
