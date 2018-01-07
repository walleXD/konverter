import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { number, func } from "prop-types"

import { add, substract, asyncAdd } from "actions/test"

const mapStateToProps = ({ test }) => ({
  score: test.score
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      add,
      asyncAdd,
      substract
    },
    dispatch
  )

@connect(mapStateToProps, mapDispatchToProps)
class TestContainer extends PureComponent {
  static propTypes = {
    score: number,
    add: func,
    asyncAdd: func,
    substract: func
  }

  render() {
    return (
      <div>
        <span>{this.props.score}</span>
        <button onClick={() => this.props.add(1)}>Add</button>
        <button onClick={() => this.props.asyncAdd(1)}>Async Add</button>
        <button onClick={() => this.props.substract(1)}>Substract</button>
      </div>
    )
  }
}

export default TestContainer
