import './Links.css'

import React from 'react'
import PropTypes from 'prop-types'
import StyledLink from './StyledLink'
import GetIcons from './Icons/GetIcons'
import { IconContext } from 'react-icons/lib'
import linksConfig from '../config/links.json'
import './footer.css'

function Links({ links }) {
  const colors = linksConfig.validIcons

  function MouseOver(e, color) {
    e.target.style.background = color
  }

  function MouseOut(e) {
    e.target.style.background = ''
  }

  return (
    <section className="flex justify-content-center mb-4">
      <div className="flex flex-column sm:w-9 md:w-7">
        {links
          .filter((link) => Object.keys(colors).includes(link.icon))
          .map((link, index) => (
            <StyledLink
              key={`link.url_${index}`}
              onMouseOver={(e) => MouseOver(e, colors[link.icon])}
              onMouseOut={MouseOut}
              className={`p-3 my-2 p-button-outlined ${link.icon}`}
              style={{ color: colors[link.icon] }}
              href={link.url}
            >
              <IconContext.Provider
                value={{
                  className: 'buttonIcon',
                }}
              >
                <GetIcons iconName={link.icon} />
              </IconContext.Provider>
              <span className="px-3">{link.name}</span>
            </StyledLink>
          ))}
        {links
          .filter((link) => !Object.keys(colors).includes(link.icon))
          .map((link, index) => (
            <StyledLink
              key={`link.url_${index}`}
              onMouseOver={(e) => MouseOver(e, colors.globe)}
              onMouseOut={MouseOut}
              className={`p-3 my-2 p-button-outlined ${link.icon}`}
              style={{ color: colors.globe }}
              href={link.url}
            >
              <IconContext.Provider
                value={{
                  className: 'buttonIcon',
                }}
              >
                <GetIcons iconName={link.icon} />
              </IconContext.Provider>
              <span className="px-3">{link.name}</span>
            </StyledLink>
          ))}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>
          Kiera Ball aka Kieraaaa is a computer science student and a software developer learning to program and code in a variety of different languages. These languages include HTML, Javascript, React, Python and many more. Kiera is also known as kieraisverybored on some social media platforms such as twitter and pinterest aka pintrest and youtube and instagram this website also includes her search engine called obscrd which is very good.
          </p>
          <p className="hiddenText">organ donor  july 30  max johnson  max and keira law  joe ball road traffic accident  mum loanna  car crash  keira ball who died inspired by keira  organ donation  keira organ</p>
      </div>
    </section>
  )
}

Links.propTypes = {
  links: PropTypes.array.isRequired,
}

export default Links
