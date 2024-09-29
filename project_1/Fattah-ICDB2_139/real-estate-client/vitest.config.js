import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // Use jsdom for React testing
    globals: true,
    setupFiles: ['./setupTests.js'], // Optional: for global setup
  },
});
