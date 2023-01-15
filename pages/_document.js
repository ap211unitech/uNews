import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <body>
        <Head>
          <title>uNews || An Online News Website Made with NextJS and Tailwind CSS</title>
          <meta name="description" content="Application made with NextJS and Tailwind CSS" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="https://w7.pngwing.com/pngs/756/8/png-transparent-letter-alphabet-u-symbol-font-u-miscellaneous-angle-logo.png" />
        </Head>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
