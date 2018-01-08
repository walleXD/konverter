import React, { PureComponent } from "react"

import ConverterUnit from "components/ConverterUnit"

class ConversionContainer extends PureComponent {
  state = {
    currencies: {}
  }

  async componentWillMount() {
    const currencies = await import("currencies.json")
    this.setState({ currencies })
  }

  _renderSelectItems = () => {
    const currenyKeys = Object.keys(this.state.currencies)
    return currenyKeys.map(key => (
      <option key={key} value={key}>
        {this.state.currencies[key]}
      </option>
    ))
  }

  render() {
    return (
      <div>
        <ConverterUnit
          renderSelectItems={this._renderSelectItems}
          name="base"
          placeholder="Enter amount"
        />
        <ConverterUnit
          renderSelectItems={this._renderSelectItems}
          name="converted"
          disabledInput={true}
        />
      </div>
    )
  }
}

export default ConversionContainer
