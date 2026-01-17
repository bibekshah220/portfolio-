import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          as="script"
          href="https://www.googletagmanager.com/gtag/js?id=G-Y20ZWK8XJK"
        />
        <link rel="canonical" href="https://www.bibeksah.com.np" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700&family=Prompt:wght@100;200;300;400;500;600;700&family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-Y20ZWK8XJK"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Y20ZWK8XJK');
          `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
