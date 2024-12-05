import React from 'react'

import { Label } from 'tsinput'

import './Label.example.css'

const IconExample = () => {
  return (
    <>
      <h4>Label stylization example:</h4>
      <Label className="tsi-docs-label" text="Label caption:">
        <div className="tsi-docs-label-content">Class name will be applied to the root element</div>
      </Label>
      <Label
        className={{ _: 'tsi-docs-label tsi-docs-label-green', text: 'tsi-docs-label-blue' }}
        text="Label caption:"
      >
        <div className="tsi-docs-label-content">
          To use class for text, use text &quot;key&quot; in the style label text and &quot;_&quot; for the root element
        </div>
      </Label>
      <Label className="tsi-docs-label" style={{ color: 'red', text: { color: 'green' } }} text="Label caption:">
        <div className="tsi-docs-label-content">Using &quot;style&quot; property is also available</div>
      </Label>

      <h4>Label invalid/wait states example:</h4>
      <Label className="tsi-docs-label" text="Label caption:" invalid={true}>
        <div className="tsi-docs-label-content">Label in ivalid state</div>
      </Label>
      <Label className="tsi-docs-label" text="Label caption:" wait={true}>
        <div className="tsi-docs-label-content">Label in wait state</div>
      </Label>

      <h4>Label with icon example:</h4>
      <Label className="tsi-docs-label" text="Label caption:" icon="refresh">
        <div className="tsi-docs-label-content">Label with icon</div>
      </Label>

      <h4>Label layout example:</h4>
      <Label className="tsi-docs-label" text="label caption" layout="right" icon="angle-right">
        <div className="tsi-docs-label-content">Inline label with icon and &quot;right&quot; layout</div>
      </Label>
      <Label className="tsi-docs-label" text="Label caption:" layout="top">
        <div className="tsi-docs-label-content">Label with &quot;top&quot; layout</div>
      </Label>
      <Label className="tsi-docs-label" text="Label caption" layout="top right">
        <div className="tsi-docs-label-content">label with &quot;top right&quot; layout</div>
      </Label>
      <Label className="tsi-docs-label" text="Label caption" icon="refresh" layout="border">
        <div className="tsi-docs-label-content">Label with icon and &quot;border&quot; layout and icon</div>
      </Label>
    </>
  )
}

export default IconExample
