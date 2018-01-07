import React, { PureComponent } from "react"
import styled from "styled-components"
import withRedux from "next-redux-wrapper"

import initStore from "lib/initStore"
import TestContainer from "containers/TestContainer"

const Test = styled.h1`
  color: blue;
`

@withRedux(initStore)
class IndexPage extends PureComponent {
  render() {
    return (
      <div>
        <Test>Hello Konverter</Test>
        <TestContainer />
      </div>
    )
  }
}

export default IndexPage
