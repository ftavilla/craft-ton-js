import React from 'react'
import Slide from 'mdx-deck/dist/Slide'

export default ({children}) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#011627',
      color: 'd6deeb',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    }}
  >
    <div style={{marginLeft: 70, marginRight: 70}}>{children}</div>
  </div>
)
