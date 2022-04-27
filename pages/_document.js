import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html className="scroll-smooth">
        <Head>
          <link
            rel="stylesheet"
            href="https://unpkg.com/prism-themes/themes/prism-shades-of-purple.css"
            // href="https://unpkg.com/prismjs/themes/prism-tomorrow.css"
            // href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
