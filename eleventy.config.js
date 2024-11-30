export default async function (eleventyConfig) {
  const ec = eleventyConfig;

  ec.setInputDirectory("src");
  ec.setIncludesDirectory("templates/partial");
  ec.setLayoutsDirectory("templates/layouts");
}
