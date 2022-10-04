const svgContents = require("eleventy-plugin-svg-contents");
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(svgContents);



// Create collection from _data/pricing.js
//module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("pricing", (collection) => {
    const allItems = collection.getAll()[0].data.pricing;

    return allItems;
  });
//};

//add popover shortcode
//module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode("popover", 
  function(content) {
    return `<span class="popover">${ "{{ '/_includes/img/tool-tip.svg' | svgContents | safe }}" }
      <span class="popover-content">
       {{ content }}
      </span>
     </span>`;
  });
//}

//add card shortcode
//module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode("card", 
  function(color,image,title,description,button,button_link,button_style, disclaimer) {
    return `<div class="card">
      <div class="card-header {% if color %}color-${color}{% endif %}">
        <img src="${image}">
      </div>
      <div class="card-body">
        <h3 class="card-title">${title}</h3>
        ${description}
      </div>
    </div>`;
  });
}