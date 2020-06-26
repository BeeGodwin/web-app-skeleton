# web-app-skeleton

A basic chassis to fork from in order to create web apps based on the Sounds backend. Created as a 10% time learning project. Early days.

## The Stack
- Babel
- Webpack
- React
- React Router
- Grandstand
- Express
- Redux
- Mocha

### Test Tooling

Mocha is moderately complex to set up for React. See `package.json` for usage- so mocha loops in a Babel transpile and a `setup.js` that makes an Enzyme adapter and a virtual DOM to render into, followed by a pattern match on the path and extensions provided. 

Mocks of 3rd parties etc will need to be provided to contexts of larger tests with `--require`, in the same way that `setup.js` is looped in. Use the `yarn test:unit` script as a basis for creating these test contexts.

### Isomorphism / SSR

The skeleton runs an Express server with a single (example) route, `/programme/:pid`. pid is used to parameterise an RMS query, which is used to create a Redux store. This is serialised and passed to the client via `window.__PRELOADED_STATE__` (set in `app/render.js`), which creates its own, client-side store. Containers and components can map into this in the usual way. 

`react-router` is used to manage the app as a SPA. A mini app is created with examplars for routes. At present data is only fetched server side but client side fetching is simpler (e.g. async actions via axios passing the payloads of resolved promises into Redux actions.)

### Wishlist

- Typescript, and Typescript testing
- Config patterning for passing in setup / dials
- Add Cucumber environment for scenario testing / step defs
- Can deploy a parameterised chassis
- Can integrate to CI and build via Jenkins. Preferably, can create its own Jenkins job.
- Can integrate to CD and deploy via Cosmos. Preferably, can do this programatically.

### Known Stuff

- linter config
- deeper dive possible on routing etc.
