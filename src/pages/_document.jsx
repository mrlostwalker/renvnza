import Document, {Html, Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <title>Renvnza'24</title>
          <link rel="icon" href="/icon512.png" />
          <meta name="description" content="Renvnza'24" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" href="/icon512.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}