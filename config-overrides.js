const reactAppRewirePostcss = require("react-app-rewire-postcss")
const postcssImport = require("postcss-import")
const postcssNested = require("postcss-nested")
const postcssCustomMedia = require("postcss-custom-media")

module.exports = (config) =>
  reactAppRewirePostcss(config, {
    plugins: () => [postcssImport(), postcssNested(), postcssCustomMedia()],
  })
