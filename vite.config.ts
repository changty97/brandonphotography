import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If you plan to host at https://<user>.github.io/<repo>/ set base to '/<repo>/'
const repoName = process.env.GH_PAGES_REPO || "";
export default defineConfig({
  plugins: [react()],
  base: repoName ? `/${repoName}/` : "/"
});
