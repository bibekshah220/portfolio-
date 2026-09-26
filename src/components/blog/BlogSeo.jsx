import blogs from "@/data/blogs.json";
import Seo, { SITE_URL } from "@/components/common/Seo";

// Post metadata lives in data/blogs.json so the card, the sitemap and the
// meta tags can never drift apart.
export default function BlogSeo({ slug }) {
  const post = blogs.find((b) => b.url === `/blog/${slug}`);

  if (!post) {
    if (process.env.NODE_ENV !== "production") {
      throw new Error(`BlogSeo: no entry in data/blogs.json for "/blog/${slug}"`);
    }
    return null;
  }

  return (
    <Seo
      title={`${post.title} - Bibek Shah`}
      description={post.excerpt}
      path={post.url}
      type="article"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        articleSection: post.category,
        inLanguage: "en",
        mainEntityOfPage: `${SITE_URL}${post.url}`,
        image: `${SITE_URL}/logo-bibek-shah.png`,
        author: {
          "@type": "Person",
          name: "Bibek Shah",
          url: SITE_URL,
        },
        publisher: {
          "@type": "Person",
          name: "Bibek Shah",
          url: SITE_URL,
        },
      }}
    />
  );
}
