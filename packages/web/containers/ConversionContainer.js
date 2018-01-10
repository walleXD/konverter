import React, { PureComponent } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { func, number } from "prop-types"

import ConverterUnit from "components/ConverterUnit"
import { setBase, resetBase, setBaseValue } from "actions/converter"

const mapStateToProps = ({ converter: { baseValue } }) => ({
  baseValue
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setBase,
      resetBase,
      setBaseValue
    },
    dispatch
  )

@connect(mapStateToProps, mapDispatchToProps)
class ConversionContainer extends PureComponent {
  static propTypes = {
    setBase: func,
    resetBase: func,
    setBaseValue: func,
    baseValue: number
  }

  state = {
    currencies: {}
  }

  async componentWillMount() {
    this.setState({ currencies: await import("currencies.json") })
  }

  _renderSelectItems = () => {
    const currenyKeys = Object.keys(this.state.currencies)
    return currenyKeys.map(key => (
      <option key={key} value={key}>
        {this.state.currencies[key]}
      </option>
    ))
  }

  _onChangeBaseInput = ({ target: { value } }) => {
    this.props.setBaseValue(Number(value))
  }

  _onChangeBaseSelect = ({ target: { value } }) => {
    if (value === "none") {
      this.props.resetBase()
    } else {
      this.props.setBase(value)
      // this.props.getBaseConversionRates
    }
  }

  _onChangeConversionSelect(event) {}

  _onSubmit = event => {}

  render() {
    return (
      <div>
        <ConverterUnit
          renderSelectItems={this._renderSelectItems}
          onChangeInput={this._onChangeBaseInput}
          onChangeSelect={this._onChangeBaseSelect}
          inputValue={this.props.baseValue}
          name="base"
          placeholder="Enter amount"
        />
        <ConverterUnit
          renderSelectItems={this._renderSelectItems}
          name="converted"
          disabledInput={true}
        />
        <button onClick={this._onSubmit}>Convert</button>
      </div>
    )
  }
}

export default ConversionContainer
