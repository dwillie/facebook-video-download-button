var self = require("sdk/self");
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: ["https://www.facebook.com", "https://www.facebook.com/*"],
  contentScriptFile: "./add-download-buttons.js",
  attachTo : ["top"],
  contentScriptOptions: {
    downloadIconUrl: self.data.url("download-icon.png")
  }
});
