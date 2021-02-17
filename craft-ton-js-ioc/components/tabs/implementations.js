import React from 'react'
import {StandardTabs} from './standard'
import {AboveTabs} from './above'

const items = [
    {
        title: '🇫🇷 PSG',
        contents: (
            <div>
                Le Paris Saint-Germain est le meilleur club du championnat Français.
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
        width: 500,
        fontSize: 24,
        textAlign: 'left',
        margin: 'auto',
      }}
    >
      <Comp items={items} />
    </div>
  )
}

export const Standard = asImpl(StandardTabs)
export const Above = asImpl(AboveTabs)
