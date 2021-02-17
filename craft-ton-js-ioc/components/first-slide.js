import React from 'react'
import styled from 'styled-components'
import Particles from "react-particles-js"

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const IconImage = styled.img`
  max-height: 70px;
  max-width: 70px;
`

function LinkedIconImage({link, name}) {
  return (
    <a href={link} target="_blank">
      <IconImage src={`public/standard/${name}`} />
    </a>
  )
}

const IconImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Family = styled.div`
  display: flex;
`

const LogoRow = styled(Container)`
  margin-top: 30px;
  margin-bottom: 30px;
`

function FirstSlide({title, subtitle}) {
  return (<div>
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: '1em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <h1 style={{margin: 5, fontSize: '3em'}}>{title}</h1>
      <h2 style={{margin: 5}}>{subtitle}</h2>
      <strong style={{fontSize: '1em', marginBottom: 10}}>Fabrice TAVILLA</strong>
      <AboutMe/>
    </div>
    <Particles id="particles-js"
               params={{
                   particles: {
                       number: {
                           value: 400,
                           density: {
                               enable: true,
                               value_area: 800
                           }
                       },
                       color: {
                           "value": ["#d6deeb", "#0A3355", "#C0C0C0"]
                       },
                       opacity: {
                           value: 0.5,
                           anim: {
                               enable: true
                           }
                       },
                       size: {
                           value: 7,
                           random: true,
                           anim: {
                               enable: true,
                               speed: 3
                           }
                       },
                       line_linked: {
                           enable: false
                       },
                       move: {
                           speed: 0.2
                       }
                   }
               }}
    />
  </div>)
}

class AboutMe extends React.Component {
  render() {
    return (
        <div>
            <img style={{width: 70, margin: -20}} src="public/standard/twitter.svg"/> <a
            href="https://twitter.com/fabricetavilla">
            @fabricetavilla
        </a>
        </div>
    )
  }
}

export {FirstSlide}
