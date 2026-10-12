import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    // In Base44 preview mode, allow the preview proxy host
    ...(process.env.BASE44_PREVIEW_MODE === "1" && {
      allowedHosts: true,
    }),
  },
});
