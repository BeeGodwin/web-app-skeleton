export default (html, preloadedState) => {
  return `
  <!doctype html>
  <html>
    <head>
      <title>Web App Skeleton</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // https://redux.js.org/recipes/server-rendering/#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
          /</g,
          '\\u003c'
        )}
      </script>
      <script src="/dist/main.js"></script>
    </body>
  </html>
  `;
};