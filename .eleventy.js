const fs = require("fs");
const path = require("path");

function loadJsonDir(dir) {
  const full = path.join(__dirname, "src", dir);
  const files = fs.readdirSync(full).filter(f => f.endsWith(".json"));
  return files.map(f => {
    const raw = fs.readFileSync(path.join(full, f), "utf-8");
    const obj = JSON.parse(raw);
    if (!obj.slug) obj.slug = f.replace(/\.json$/, "");
    return obj;
  }).sort((a,b) => (a.title||"").localeCompare(b.title||""));
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });

  eleventyConfig.addCollection("projects", () => {
    const items = loadJsonDir("content/projects");
    return items.map(i => ({ ...i, url: `/projects/${i.slug}/` }));
  });

  eleventyConfig.addCollection("tools", () => {
    const items = loadJsonDir("content/tools");
    return items.map(i => ({ ...i, url: `/tools/${i.slug}/` }));
  });

  eleventyConfig.addCollection("datasets", () => {
    const items = loadJsonDir("content/datasets");
    return items.map(i => ({ ...i, url: `/datasets/${i.slug}/` }));
  });

  return {
    dir: { input: "src", output: "dist" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "html", "md"]
  };
};
