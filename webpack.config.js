// used only for depcruise
const path = require('path');

module.exports = {
  resolve: {
    extensions: [".ts", ".vue"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
}