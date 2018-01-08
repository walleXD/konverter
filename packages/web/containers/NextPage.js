import React from "react"
import { node } from "prop-types"
import { ThemeProvider } from "styled-components"

const NextPage = ({ children }) => (
  <ThemeProvider theme={{}}>
    <div>{children}</div>
  </ThemeProvider>
)

NextPage.propTypes = {
  children: node
}

export default NextPage
