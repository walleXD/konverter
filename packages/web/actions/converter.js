import { converter } from "lib/types"

export const setBase = baseSymbl => ({
  type: converter.setBase,
  payload: baseSymbl
})

export const resetBase = () => ({
  type: converter.resetBase,
  payload: ""
})

export const setBaseValue = i => ({
  type: converter.setBaseValue,
  payload: i
})

export const getBaseConversionRates = () => ({
  type: converter.getBaseConversionRates,
  payload: ""
})

export const getBaseConversionRatesSuccess = () => ({
  type: converter.getBaseConversionRatesSuccess,
  payload: ""
})

export const getBaseConversionRatesFail = () => ({
  type: converter.getBaseConversionRatesFail,
  payload: ""
})

export const setConversionRates = rates => ({
  type: converter.getBaseConversionRatesSuccess,
  payload: rates
})

export const setConversionRateRequestError = error => ({
  type: converter.setConversionRateRequestError,
  payload: error.message
})
