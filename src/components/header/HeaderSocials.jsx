import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'
import './header.css'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/abdul-saboor-sohaib/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/SaboorSohaib" target='_blank'><BsGithub /></a>
        <a href="https://medium.com/@abdulsaboorsohaib" target='_blank'><BsMedium /></a>
    </div>
  )
}

export default HeaderSocials