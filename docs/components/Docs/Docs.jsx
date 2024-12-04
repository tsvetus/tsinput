import React from 'react'
import PropTypes from 'prop-types'

import Props from '../Props'

const Docs = ({ docs, items }) => {
  const examples = items
    .filter(v => v.example)
    .map((v, index) => {
      return (
        <div className="tsi-docs-block" key={index}>
          {v.example}
          {v.code ? (
            <>
              <h3>Code:</h3>
              <pre>{v.code}</pre>
            </>
          ) : null}
          {v.styles ? (
            <>
              <h3>Styles:</h3>
              <pre>{v.styles}</pre>
            </>
          ) : null}
        </div>
      )
    })
  const content = items
    .filter(v => v.content)
    .map((v, index) => {
      return (
        <div key={index}>
          <h2>{v.caption}</h2>
          <div className="tsi-docs-block">{v.content}</div>
        </div>
      )
    })
  const rows = docs.map((doc, index) => {
    const { props, ...caption } = doc
    return (
      <div key={index}>
        <div>
          <h1>{caption.name}</h1>
          <div>{caption.description}</div>
        </div>
        {examples.length ? (
          <>
            <h2>Examples:</h2>
            {examples}
          </>
        ) : null}
        <h2>Properties:</h2>
        <Props data={props} />
        {content}
      </div>
    )
  })
  return <div className="tsi-docs">{rows}</div>
}

Docs.propTypes = {
  docs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      props: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          type: PropTypes.string,
          required: PropTypes.bool,
          defaultValue: PropTypes.string,
          description: PropTypes.string
        })
      )
    })
  ),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.element,
      caption: PropTypes.string,
      example: PropTypes.element,
      code: PropTypes.string
    })
  )
}

export default Docs
