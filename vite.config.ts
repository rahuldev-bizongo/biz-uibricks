import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src/lib/components/index.js"),
        Button: path.resolve(__dirname, "src/lib/components/Button.jsx"),
        Card: path.resolve(__dirname, "src/lib/components/Card.jsx"),
        Container: path.resolve(__dirname, "src/lib/components/Container.jsx"),
        ContainerRow: path.resolve(
          __dirname,
          "src/lib/components/ContainerRow.jsx"
        ),
        Div: path.resolve(__dirname, "src/lib/components/Div.jsx"),
        Dropdown: path.resolve(__dirname, "src/lib/components/Dropdown.jsx"),
        Form: path.resolve(__dirname, "src/lib/components/Form.jsx"),
        Header: path.resolve(__dirname, "src/lib/components/Header.jsx"),
        Image: path.resolve(__dirname, "src/lib/components/Image.jsx"),
        Input: path.resolve(__dirname, "src/lib/components/Input.jsx"),
        List: path.resolve(__dirname, "src/lib/components/List.jsx"),
        ListItem: path.resolve(__dirname, "src/lib/components/ListItem.jsx"),
        SpecialCard: path.resolve(
          __dirname,
          "src/lib/components/SpecialCard.jsx"
        ),
        Stepper: path.resolve(__dirname, "src/lib/components/Stepper.jsx"),
        Text: path.resolve(__dirname, "src/lib/components/Text.jsx"),
        Heading: path.resolve(__dirname, "src/lib/components/Heading.jsx"),
        ComponentRegistry: path.resolve(
          __dirname,
          "src/lib/registry/ComponentRegistry.ts"
        ),
      },
      output: {
        entryFileNames: "components/[name].js",
        chunkFileNames: "chunks/[name]-[hash].js",
        format: "es",
        dir: "dist",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "index.css") {
            return "styles/tailwind.css";
          }
          return "assets/[name][extname]";
        },
      },
    },
    lib: {
      entry: path.resolve(__dirname, "src/lib/components/index.js"),
      formats: ["es"],
      fileName: (format) => `biz-ui.${format}.js`,
    },
    outDir: "dist",
    sourcemap: true,
    minify: "esbuild",
    cssMinify: true,
    cssCodeSplit: false,
    modulePreload: {
      polyfill: false,
    },
    commonjsOptions: {
      include: [/node_modules/],
      extensions: [".js", ".cjs", ".jsx", ".tsx", ".ts"],
      strictRequires: true,
    },
    target: ["es2020", "edge88", "firefox78", "chrome87", "safari14"],
  },
  define: {
    "process.env.NODE_ENV": '"production"',
    global: "window",
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
    esbuildOptions: {
      target: "es2020",
      supported: {
        "dynamic-import": true,
      },
      define: {
        global: "window",
      },
    },
  },
});
