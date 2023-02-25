import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="www.thumbs-up.me"></meta>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta property="og:title" content="IT 직무 관련자들을 위한 투표 커뮤니티 웹 플랫폼 | 텀즈업"></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:description" content="www.thumbs-up.me"></meta>
          <meta property="og:image" content="https://www.thumbs-up.me/og.png"></meta>
          <link rel="icon" href="/favicon.ico" />
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
