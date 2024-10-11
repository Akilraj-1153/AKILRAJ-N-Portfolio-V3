import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/AKILRAJ-N-Portfolio-V3",
  plugins: [react()],
})
