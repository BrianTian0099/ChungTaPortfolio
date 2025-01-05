import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ChungTaPortfolio/', // 子目錄名稱，與 GitHub Pages 的存儲庫名稱一致
});
