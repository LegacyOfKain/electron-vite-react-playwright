import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./test/setup.ts",
    root: __dirname,
    //include: ['test/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    include: ["test/**/*.spec.ts", "test/**/*.test.tsx"],
    exclude: ["node_modules/", "dist/", "coverage/"],
    testTimeout: 1000 * 29,
    coverage: {
      provider: "v8",
      exclude: [
        "node_modules/",
        "dist/",
        "dist-electron",
        "coverage/",
        "**/*.d.ts",
        "**/*.test.{js,jsx,ts,tsx}",
        "**/*.spec.{js,jsx,ts,tsx}",
        "*.config.ts",
        "*.config.js",
        "*.cjs",
      ],
    },
  },
});
