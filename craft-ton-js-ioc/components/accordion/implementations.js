import React from 'react'
import {StandardAccordion} from './standard'
import {AboveAccordion} from './above'
import {RightAccordion} from './right'
import {LeftAccordion} from './left'
import {SingleAccordion} from './single'
import {PreventCloseAccordion} from './prevent-close'
import {SinglePreventCloseAccordion} from './single-prevent-close'

const items = [
  {
    title: '🇫🇷 PSG',
    contents: (
      <div>
        Le Paris Saint-Germain est le meilleur club du championnat français.
        Cette équipe à la particularité d'arriver en 8 ième de finale de ligue des champions
        sans ses meilleurs joueurs, souvent bléssés lors de matchs en coupe de France sans intérêt.
      </div>
    ),
  },
  {
    title: '🇮🇹 JUV',
    contents: (
      <div>
        La Juventus de Turin est un des meilleurs clubs du championnat italien.
        Elle arrive souvent en finale de ligue des champions pour la perdre ensuite.
      </div>
    ),
  },
  {
    title: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 LIV',
    contents: (
      <div>
        C'est l'équipe de mon manager préféré.
        Elle a la particularité d'avoir manqué de remporter le championat d'Angleterre sur une glissade de son
        emblématique capitaine Steven Gerard.
      </div>
    ),
  },
  {
    title: '🇫🇷 OM',
    contents: (
      <div>
        Error 404: Team Not found. Please contact your administrator Bernard Tapie 😉
      </div>
    ),
  },
]

function asImpl(Comp) {
  return () => (
    <div
      style={{
        width: 400,
        fontSize: 16,
        textAlign: 'left',
        margin: 'auto',
      }}
    >
      <Comp items={items} />
    </div>
  )
}

export const Standard = asImpl(StandardAccordion)
export const Above = asImpl(AboveAccordion)
export const Right = asImpl(RightAccordion)
export const Left = asImpl(LeftAccordion)
export const Single = asImpl(SingleAccordion)
export const PreventClose = asImpl(PreventCloseAccordion)
export const SinglePreventClose = asImpl(SinglePreventCloseAccordion)
