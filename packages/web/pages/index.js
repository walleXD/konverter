import React, { PureComponent } from "react"
import styled from "styled-components"
import withRedux from "next-redux-wrapper"

import initStore from "lib/initStore"
import NextPage from "containers/NextPage"
import TestContainer from "containers/TestContainer"
import ConversionContainer from "containers/ConversionContainer"

const Test = styled.h1`
  color: blue;
`

@withRedux(initStore)
class IndexPage extends PureComponent {
  render() {
    return (
      <NextPage>
        <Test>Hello Konverter</Test>
        <TestContainer />
        <ConversionContainer />
      </NextPage>
    )
  }
}

export default IndexPage
