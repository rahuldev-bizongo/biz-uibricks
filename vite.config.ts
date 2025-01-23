import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  build: {
    rollupOptions: {
      input: {
        Button: path.resolve(__dirname, 'src/lib/components/Button.jsx'),
        Card: path.resolve(__dirname, 'src/lib/components/Card.jsx'),
        Dropdown: path.resolve(__dirname, 'src/lib/components/Dropdown.jsx'),
        Input: path.resolve(__dirname, 'src/lib/components/Input.jsx'),
        Text: path.resolve(__dirname, 'src/lib/components/Text.jsx'),
      },
      output: {
        entryFileNames: '[name].js', // File names based on entry points
        format: 'es', // Use ES modules for code-splitting
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    lib: {
      entry: path.resolve(__dirname, 'lib/components/index.js'),
      name: 'UIComponents',
      formats: ['es'], // Use 'es' format only
    },
    outDir: 'dist',
  },
});
