import React, { PureComponent } from "react"
import withRedux from "next-redux-wrapper"

import initStore from "lib/initStore"
import NextPage from "containers/NextPage"
import ConversionContainer from "containers/ConversionContainer"

@withRedux(initStore)
class IndexPage extends PureComponent {
  render() {
    return (
      <NextPage>
        <ConversionContainer />
      </NextPage>
    )
  }
}

export default IndexPage
