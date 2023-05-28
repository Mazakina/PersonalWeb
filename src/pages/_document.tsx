import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link 
          href="https://fonts.googleapis.com/css2?family=Anton&family=Fascinate&family=My+Soul&family=Noto+Sans&display=swap" 
          rel="stylesheet"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Plaster&display=swap"
          rel="stylesheet"/>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}