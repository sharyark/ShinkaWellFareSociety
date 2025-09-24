import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteSitemapPlugin from "vite-plugin-sitemap";


// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


export default defineConfig({
  plugins: [
    react(),
    viteSitemapPlugin({
      hostname: "https://www.shinkawelfaresociety.com",
      urls: [
        "/",
        "/home",
        "/about",
        "/service",
        "/contact",
        "/donate",
        "/abulance",
        "/cleanliness",
        "/water",
        "/food",
        "/educational",
        "/burial",
        "/team",
        "/financial",
      ],
      changefreq: "daily",
      priority: 0.7,
    }),
  ],
});
