module.exports = {
  "extends": "@snowpack/app-scripts-react",
  // "devOptions":{
  //   "bundle":false,
  //   "fallback": "./index.html",
  // }
  "proxy": {
    "/api": "https://www.v2ex.com/api",
  }
}
