const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const codeClipboard = require("eleventy-plugin-code-clipboard");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
// const markdownIt = require('markdown-it');

module.exports = function (eleventyConfig) {
  let wikilinks = require('markdown-it-wikilinks')({
    relativeBaseURL: '../',
    uriSuffix: ''
  })
  let markdownIt = require("markdown-it");

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(codeClipboard);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addFilter("randomItem", (arr) => {
    arr.sort(() => {
      return 0.5 - Math.random();
    });
    return arr.slice(0, 1);
  });

  let options = {
    html: true,
    breaks: true,
  };


  /* Markdown Overrides */
  const markdownLibrary = markdownIt(options)
    .use(codeClipboard.markdownItCopyButton)
    .use(wikilinks);

  eleventyConfig.setLibrary('md', markdownLibrary);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};