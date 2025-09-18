import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteSitemapPlugin } from "vite-plugin-sitemap";


// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


export default defineConfig({
  plugins: [
    react(),
    ViteSitemapPlugin({
      hostname: "https://www.shinkawelfaresociety.com", // apni domain
      urls: [
        "/",
        "/home",
        "/about",
        "/service",
        "/contact",
        "/donate",
        "/abulance",   // spelling correct
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
