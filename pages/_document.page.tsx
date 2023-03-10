import { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

import { ServerStyleSheet } from 'styled-components'

export default function Document(props: any) {
  const { emotionStyleTag } = props

  return (
    <Html lang='ko'>
      <Head>
        {emotionStyleTag}
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export const getInitialProps = async (ctx: DocumentContext): Promise<any> => {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
      })

    const initialProps = await getInitialProps(ctx)
    return {
      ...initialProps,
      styles: [initialProps.styles, sheet.getStyleElement()]
    }
  } finally {
    sheet.seal()
  }
}
