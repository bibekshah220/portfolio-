import Head from "next/head";
import { useRouter } from "next/router";

export const SITE_URL = "https://bibeksah22.com.np";
export const SITE_NAME = "Bibek Shah";

const DEFAULT_DESCRIPTION =
  "Bibek Shah is a MERN Stack Developer and Software Engineer from Kathmandu, Nepal, specializing in full-stack web development, cloud technologies, and secure, scalable applications.";
const DEFAULT_IMAGE = "/logo-bibek-shah.png";

export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  jsonLd,
  path,
}) {
  const router = useRouter();
  const pathname = path ?? router.asPath.split(/[?#]/)[0];
  const canonical = `${SITE_URL}${pathname}`.replace(/\/+$/, "");
  const absoluteImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <>
          <meta name="robots" content="index, follow, max-image-preview:large" />
          <link rel="canonical" href={canonical} />
        </>
      )}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:alt" content={SITE_NAME} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
}
