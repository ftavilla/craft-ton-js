import React from 'react'
import {Accordion} from './base'
import {AccordionButton, AccordionItem, AccordionContents} from '../shared'

function combineReducers(...reducers) {
  return (state, action) => {
    for (const reducer of reducers) {
      const result = reducer(state, action)
      if (result) return result
    }
  }
}

const actionTypes = {toggle_index: 'toggle_index'}
function accordionReducer(openIndexes, action) {
  switch (action.type) {
    case actionTypes.toggle_index: {
      const closing = openIndexes.includes(action.index)
      return closing
          ? openIndexes.filter((i) => i !== action.index)
          : [...openIndexes, action.index]
    }
    default: {
      throw new Error(`Unhandled type in accordionReducer: ${action.type}`)
    }
  }
}

function useAccordion({reducer = accordionReducer} = {}) {
  const [openIndexes, dispatch] = React.useReducer(reducer, [0])
  const toggleIndex = (index) =>
      dispatch({type: actionTypes.toggle_index, index})
  return {openIndexes, toggleIndex}
}

function StandardAccordion({items, reducer = () => {}, ...props}) {
  const {openIndexes, toggleIndex} = useAccordion({
    reducer: combineReducers(reducer, accordionReducer),
  })
  return (
      <div>
        {items.map((item, index) => (
            <AccordionItem key={item.title} direction="vertical">
              <AccordionButton
                  isOpen={openIndexes.includes(index)}
                  onClick={() => toggleIndex(index)}
              >
                {item.title}{' '}
                <span>{openIndexes.includes(index) ? '👇' : '👈'}</span>
              </AccordionButton>
              <AccordionContents isOpen={openIndexes.includes(index)}>
                {item.contents}
              </AccordionContents>
            </AccordionItem>
        ))}
      </div>
  )
}

export {StandardAccordion}
