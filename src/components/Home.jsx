import React from 'react'
import Main from './Main/Main'
import Skills from './Skills/Skills'
/* import Projects from './Projects/Projects'
import Services from './Services/Services'
import Contact from './Contact/Contact' */

export default function Home () {
  const skills = [
    {
      title: 'React',
      imageUrl: 'https://i.imgur.com/Fcy2bUd.png'
    },
    {
      title: 'JavaScript',
      imageUrl: 'https://i.imgur.com/lcR1maL.png'
    },
    {
      title: 'HTML',
      imageUrl: 'url_de_la_imagen_html.jpg'
    }
  ]
  return (
    <>

      <Main />
      <Skills tecnologias={skills}/>

    </>
  )
}
