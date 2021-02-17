import React from 'react'
import {Appear} from 'mdx-deck'
import {RandomlyPlaced} from './randomly-placed'

export const Sob = ({children, style}) => (
  <div style={{position: 'absolute', zIndex: 2, ...style}}>
    <img src="public/sob.png" />
    {children ? (
      <div
        style={{
          borderRadius: 6,
          padding: 4,
          backgroundColor: 'rgba(1,22,39, 0.6)',
        }}
      >
        {children}
      </div>
    ) : null}
  </div>
)

export const Sobbing = () => (
  <div style={{fontSize: 24}}>
    <Appear>
      <div>
        <Sob style={{top: '10%', left: '30%'}}>bundle size/perf 😵</Sob>
      </div>
      <div>
        <Sob style={{top: '40%', left: '20%'}}>maintenance overhead 😖</Sob>
      </div>
      <div>
        <Sob style={{top: '50%', right: '20%'}}>
          implementation complexity 🐛
        </Sob>
      </div>
      <div>
        <Sob style={{bottom: '10%', left: '22%'}}>API complexity 😕</Sob>
      </div>
      <div>
        <Sob style={{top: '20%', right: '25%'}} />
        <Sob style={{bottom: '20%', left: '4%'}} />
      </div>
    </Appear>
  </div>
)
