# vue3-typescript-app-starter

This is a starter setup for your next Vue3 / Typescript app.

It uses Vue3 beta, typescript and webpack and supports some neat features:

* router
* lightweight global state (not Vuex)
* typescript
* code splitting and tree shaking
* inserts base64 URLs for small assets (<=8kb)
* splits large scripts into chunks to be loaded in parallel
* prefetches async components (if browser supports prefetch hint)
* automatically generates favicons and app icons out of your logo
* SRI (adds integrity hashes to script tags, see [SRI on MDN](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity))

## Performance

![lighthouse score](./lighthouse-score.jpg)

See for your self [on lighthouse](https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fvue3-app-starter.netlify.app%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo)

## Contributing

This happened over night after setting up a new Vue3 application. It might have lots of strange quirks and misconfigurations.

Please help to make this starter setup even better by writing an issue or pull request.
