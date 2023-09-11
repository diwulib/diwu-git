import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import diwu from 'vite-plugin-diwu';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), diwu()],
});
