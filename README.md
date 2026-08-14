# quiet gears

Marketing website for quiet gears Ltd, a London-based AI and software consultancy serving UK SMEs.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

The website works without environment variables, but contact form delivery requires a Resend API key and a verified sending domain. See `.env.example`.

## Deploying to Vercel

This repository is configured as a Next.js project through `vercel.json`. The
site itself does **not** require environment variables to build; the Resend
variables are only required when someone submits the contact form.

1. Push the branch to a Git provider and import that repository in Vercel.
2. In **Project Settings → Build and Deployment**, set **Framework Preset** to
   **Next.js** and leave **Root Directory** as `.` (the repository root).
3. Do not set an Output Directory. Vercel's Next.js integration manages it.
4. Deploy the latest commit. Open the URL shown on that deployment's page,
   rather than reusing an older preview URL.
5. For working contact emails, add `RESEND_API_KEY` and
   `CONTACT_FROM_EMAIL` in **Project Settings → Environment Variables**, verify
   the sending domain in Resend, then redeploy.

### If Vercel shows `404: NOT_FOUND`

That Vercel-branded page is produced before this application's own 404 page.
It normally means the URL does not point to a current deployment, the project
was imported from the wrong repository/root directory, or a custom domain is
attached to another project. It is not the result of a missing `/` route—this
project defines one in `app/page.tsx`.

Check the following in order:

1. Open **Deployments**, confirm the latest commit has status **Ready**, and use
   its **Visit** button. If the build failed, open its build log instead.
2. Confirm the deployment source is this repository and the production branch
   contains `app/page.tsx`, `package.json`, and `vercel.json` at its root.
3. Confirm **Root Directory** is `.` and **Framework Preset** is **Next.js**.
4. Remove any manually configured Output Directory and redeploy without the
   build cache.
5. If only the custom domain fails, remove it from any old Vercel project, add
   it to this project, and apply the DNS records Vercel displays.
6. If an old preview URL fails, do not reuse it; preview deployments can be
   deleted or replaced. Use the current deployment URL.

The checked-in `vercel.json` makes the install and build commands explicit, so
an imported project does not depend on stale framework-detection settings.

### Reproducible builds

The application pins Next.js, React, TypeScript and the remaining build
dependencies to exact versions. Do not replace these versions with `latest`:
doing so allows Vercel to select a new compiler or framework release between
deployments. The repository also selects Node.js 20 through both `package.json`
and `.nvmrc`, matching the runtime expected by the pinned framework version.
