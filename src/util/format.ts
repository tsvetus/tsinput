import { TsiValue, TsiFormat, TsiFormatter, TsiFormatterState } from './types'

const getFormatter = (format?: TsiFormat): TsiFormatter => {
  const hasEmptyValue = format && 'emptyValue' in format
  const hasInvalidValue = format && 'invalidValue' in format
  const hasRegexp = format && 'regexp' in format
  const state = {
    text: '',
    value: hasEmptyValue ? format?.emptyValue : '',
    invalid: false,
    changed: false,
    offline: false
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
    const newValue = !text && hasEmptyValue ? format.emptyValue : text
    state.text = text || ''
    state.invalid = textInvalid(state.text)
    if (hasInvalidValue && state.invalid) {
      state.changed = state.value !== format.invalidValue
      state.value = format.invalidValue
      state.offline = true
    } else {
      state.changed = state.value !== newValue
      state.value = newValue
      state.offline = false
    }
    return state
  }
  const processValue = (value?: TsiValue): TsiFormatterState => {
    if (hasInvalidValue && value === format.invalidValue) {
      return state
    } else {
      state.text = hasEmptyValue && format.emptyValue === value ? '' : value?.toString() || ''
      state.value = value
      state.invalid = textInvalid(state.text)
      return state
    }
  }
  return {
    processText,
    processValue,
    state
  }
}

export { getFormatter }
