# Photography Sample (Vite + React + TypeScript)

## Setup
1. Replace `src/config.ts` `FORM_ENDPOINT` with your Formspree endpoint or your form processing API.
2. `npm install`
3. `npm run dev` to run locally
4. `npm run build` to produce `dist/`

## Deploy
Push to `main` branch — GitHub Actions will build and push `dist/` to `gh-pages` for Pages.

## Notes
- This is a demo static site. For a custom backend to store inquiries, replace the `FORM_ENDPOINT` with your API (serverless function, Node service, etc).
- For production: host image assets on S3 + CDN; keep metadata in DynamoDB (as we discussed) and let the website fetch gallery metadata from your API.
