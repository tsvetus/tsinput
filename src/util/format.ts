import { TsiValue, TsiFormat, TsiFormatter, TsiFormatterState } from './types'

const getFormatter = (format?: TsiFormat): TsiFormatter => {
  const hasEmptyValue = format && 'emptyValue' in format
  const hasRegexp = format && 'regexp' in format
  const state = {
    text: '',
    value: hasEmptyValue ? format?.emptyValue : '',
    invalid: false
  }
  const textInvalid = (text?: string): boolean => {
    if (format) {
      if (format.required) {
        if (!text || text.trim() === '') {
          state.invalid = true
          return state.invalid
        }
      }
      if (hasRegexp && !format.regexp?.test(text || '')) {
        state.invalid = true
        return state.invalid
      }
    }
    state.invalid = false
    return state.invalid
  }
  const processText = (text?: string): TsiFormatterState => {
    state.text = text || ''
    state.value = !text && hasEmptyValue ? format.emptyValue : text
    state.invalid = textInvalid(state.text)
    return state
  }
  const processValue = (value?: TsiValue): TsiFormatterState => {
    state.text = hasEmptyValue && format.emptyValue === value ? '' : value?.toString() || ''
    state.value = value
    state.invalid = textInvalid(state.text)
    return state
  }
  return {
    processText,
    processValue,
    state
  }
}

export { getFormatter }
