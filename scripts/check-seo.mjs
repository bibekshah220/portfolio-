// Run after `npm run build`: node scripts/check-seo.mjs
// Fails if any built page lost its title/description/canonical, or if any
// JSON-LD block stops parsing.
import { readFileSync } from "node:fs";
import { globSync } from "node:fs";
import assert from "node:assert/strict";

// 500.html is Next's built-in error page and renders no Head of ours.
const pages = globSync(".next/server/pages/**/*.html").filter((f) => !f.endsWith("500.html"));
assert.ok(pages.length >= 8, `expected the built pages, found ${pages.length}`);

for (const page of pages) {
  const html = readFileSync(page, "utf8");
  const noindex = html.includes('content="noindex, nofollow"');

  assert.ok(/<title>[^<]{10,}<\/title>/.test(html), `${page}: missing title`);
  assert.ok(/<meta name="description" content="[^"]{30,}"/.test(html), `${page}: missing description`);
  if (!noindex) {
    assert.ok(/<link rel="canonical" href="https:\/\/bibeksah22\.com\.np/.test(html), `${page}: missing/wrong canonical`);
  }
  assert.ok(!html.includes("bibekshah.com.np"), `${page}: stale domain`);

  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    JSON.parse(json.replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&#x27;/g, "'"));
  }
}

// Every blog page must have an entry in blogs.json, or BlogSeo renders nothing.
const blogs = JSON.parse(readFileSync("src/data/blogs.json", "utf8"));
for (const slug of globSync("src/pages/blog/*.jsx").map((f) => f.split("/").pop().replace(".jsx", ""))) {
  if (slug === "index") continue;
  assert.ok(blogs.some((b) => b.url === `/blog/${slug}`), `blogs.json has no entry for /blog/${slug}`);
}

console.log(`SEO check passed on ${pages.length} pages`);
