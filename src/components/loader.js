import React from 'react'

export default function LoaderContainer(props) {
  return props.visible ? (
    <div>
      <div
        className='d-flex align-items-center justify-content-center h-100'
        style={{ position: 'relative' }}
      >
        <div
          style={{
            width: props.width,
            height: props.height,
            backgroundColor: !props.color ? props.color : '#e84546',
          }}
          className='loading-icon spin'
        ></div>
      </div>
    </div>
  ) : (
    <div></div>
  )
}
