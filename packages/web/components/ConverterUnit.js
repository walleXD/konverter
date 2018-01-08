import React from "react"
import { func, string, bool, number } from "prop-types"

const ConverterUnit = ({
  renderSelectItems,
  name,
  placeholder,
  inputValue,
  onChangeInput,
  onChangeSelect,
  selectValue,
  disabledInput
}) => (
  <div>
    <input
      type="number"
      value={inputValue}
      name={`${name}-input`}
      placeholder={placeholder}
      disabled={disabledInput}
      onChange={onChangeInput}
    />
    <select
      onChange={onChangeSelect}
      value={selectValue}
      name={`${name}-select`}
      id={`${name}-select`}
    >
      {renderSelectItems()}
    </select>
  </div>
)

ConverterUnit.propTypes = {
  renderSelectItems: func.isRequired,
  name: string,
  placeholder: string,
  inputValue: number,
  selectValue: string,
  onChangeInput: func,
  onChangeSelect: func,
  disabledInput: bool
}

export default ConverterUnit
