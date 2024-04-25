# Error repro: Cannot find module 'undici' 🤌

To recreate the error, deploy this app to Vercel, and visit the home page. Nothing special will happen here, as the page was built successfully during deployment.

But head to the deployment's logs, and you should see errors that look something like:

```
⨯ Error: Cannot find module 'undici'
Require stack:
- /var/task/.next/server/app/page.js
- /var/task/node_modules/.pnpm/next@14.2.2_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/server.runtime.prod.js
- /var/task/___next_launcher.cjs
- /opt/rust/nodejs.js
at Module._resolveFilename (node:internal/modules/cjs/loader:1143:15)
at /var/task/node_modules/.pnpm/next@14.2.2_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/server.runtime.prod.js:11:28979
at Module._load (node:internal/modules/cjs/loader:984:27)
at /opt/rust/nodejs.js:1:11597
at Function.Qt (/opt/rust/nodejs.js:1:11967)
at Q.e.<computed>.K._load (/opt/rust/nodejs.js:1:11567)
at Module.require (node:internal/modules/cjs/loader:1231:19)
at u.require (/var/task/node_modules/.pnpm/next@14.2.2_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/server.runtime.prod.js:11:29195)
at require (node:internal/modules/helpers:179:18)
at 3122 (/var/task/.next/server/app/page.js:1:824) {
code: 'MODULE_NOT_FOUND',
requireStack: [
'/var/task/.next/server/app/page.js',
'/var/task/node_modules/.pnpm/next@14.2.2_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/server.runtime.prod.js',
'/var/task/___next_launcher.cjs',
'/opt/rust/nodejs.js'
],
digest: '889919740',
page: '/'
}
```

## Notes

* The error does not occur on Next.js versions prior to 14.2
* It occurs on the latest canary version too (tested `v14.3.0-canary.21`)
* I couldn't recreate the error when building/running locally
* I couldn't recreate this issue without using PNPM
* The error doesn't seem to occur on pages using `export const runtime = 'edge'`
* A couple of "workarounds" I found while investigating
  * Installing `undici` in the app
  * Using `await import('@firebase/auth')` etc to prevent server-level import of these modules