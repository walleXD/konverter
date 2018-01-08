import React from "react"
import Document, { Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"
import { TypographyStyle, GoogleFont } from "react-typography"

import injectGlobalStyles from "lib/globalStyles"
import typography from "lib/typography"

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    injectGlobalStyles()
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
