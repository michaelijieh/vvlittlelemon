import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Makes test utilities like 'expect' and 'describe' globally available
    environment: 'jsdom', // Simulate browser DOM environment
    setupFiles: './src/setupTests.js', // Path to your test setup file
    css: true, // Handle CSS imports if your components import them
    // You can add more configurations here, e.g., for coverage
    coverage: {
      provider: 'v8', // or 'istanbul'
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'src/main.jsx'], // Exclude files from coverage
    },
  },  
})
