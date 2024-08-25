import { useMemo } from 'react'

import { PageProps } from './types'

const Page = ({ options = [], value }: PageProps) => {
  const activeIndex = useMemo(
    () => (options ? options.findIndex(v => value === (v?.key || v?.id || v?.value || null)) : -1),
    [options, value]
  )
  const activeOption = useMemo(() => (activeIndex >= 0 ? options[activeIndex] : null), [activeIndex, options])
  return activeOption?.render ? activeOption.render() : null
}

export default Page
