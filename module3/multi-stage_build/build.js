const fs = require("fs");
const { minify } = require("html-minifier");

const src = fs.readFileSync("src/index.html", "utf-8");

const date = new Date().toISOString();
const patched = src.replace("<!-- BUILD_DATE -->", `<p>Собрано: ${date}</p>`);

const output = minify(patched, {
  collapseWhitespace: true,
  removeComments: true,
});

fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/index.html", output);

console.log(`dist/index.html (${Buffer.byteLength(output)} bytes)`);
