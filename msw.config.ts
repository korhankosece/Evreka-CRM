export default {
  // Using 'dist' for production builds on Vercel
  outDir: 'dist',
  // Place the worker file in the public directory that gets served at the root
  workerDirectory: 'public',
  // Generate the service worker with a specific name and ensure it's served from the root
  serviceWorker: {
    url: '/mockServiceWorker.js',
  },
}; 