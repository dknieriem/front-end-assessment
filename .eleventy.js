const svgContents = require("eleventy-plugin-svg-contents");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const CleanCSS = require("clean-css");

const EleventyPlugin = require("@11ty/eleventy/src/Plugins/RenderPlugin");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(svgContents);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });


  eleventyConfig.setBrowserSyncConfig({
		files: './_site/css/*.css'
	});

  eleventyConfig.addPassthroughCopy("_includes/js");
  eleventyConfig.addPassthroughCopy("_includes/img");
// Create collection from _data/pricing.js
//module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("pricing", (collection) => {
    const allItems = collection.getAll()[0].data.pricing;

    return allItems;
  });
//};

}