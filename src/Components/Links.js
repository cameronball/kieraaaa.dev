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
          kiera ball,
kiera ballinger,
kiera ballet flat cole haan,
keira ball,
kiera page,
kiera ball and chain,
kiera ball answers,
kiera ball adidas,
kiera ball amusement park,
kiera ball alley oop,
kiera ball archery,
kiera ball alley,
kiera ball baby,
kiera ball bearings,
kiera ball brothers,
kiera ball bowling,
kiera ball chair,
kiera ball court,
kiera ball caps,
kiera ball cyclone,
kiera ball cheerleading,
kira dragon ball,
kiera ball exercises,
kiera ball eyelashes,
kiera ball enderman,
kiera ball fighterz,
kiera ball from tee to green,
kiera ball for me lyrics,
kiera ball fishing,
kiera ball football,
kiera ball farms,
kiera ball game,
kiera ball gowns,
kiera ball golf,
kiera ball grips,
kiera ball heroes,
kiera ball heroes episode 3,
kiera ball height,
kiera ball hermitcraft,
kiera ball hockey,
kiera ball highlights,
kiera ball hermitcraft 7,
kiera ball in the family,
kiera ball instagram,
kiera ball injury,
kiera ball impractical jokers,
kiera ball incident,
kiera ball joint,
kiera ball joint replacement,
kiera ball jacuzzi,
kiera ball jacket,
kiera ball jungle,
kiera ball legends,
kiera ball lyrics,
kiera ball lightning,
kiera ball lsu,
kiera ball lacrosse,
kiera ball machine,
kiera ball movie,
kiera ball motocross,
kiera ball mtg,
kiera ball mumbo jumbo,
kiera ball numbers,
kiera ball net worth,
kiera ball near me,
kiera ball nationals,
kiera ball ninjago,
kiera ball nationals 2020,
kiera ball nationals 2021,
kiera ball nationals 2019,
kiera ball of foot,
kiera ball of foot pain,
kiera ball of coke,
kiera ball outdoors,
kiera ball omelet,
kiera ball overtime,
kiera ball outback,
kiera ball python,
kiera ball pool,
kiera ball pit,
kiera ball quilt,
kiera ball quartet,
kiera ball quilt pattern,
kiera ball rules,
kiera ball recipe,
kiera ball review,
kiera ball rigs,
kiera ball rugby,
kiera ball raft,
kiera ball rafter,
kiera ball super,
kiera ball state,
kiera ball state university,
kiera ball skating,
kiera ball surfing,
kiera ball to induce labor,
kiera ball tennis,
kiera ball trout,
kiera ball tubing,
kiera ball tango,
kiera ball ucla,
kiera ball ucla highlights,
kiera ball upgrades,
keira bell vegan,
keira bell vegan menu,
keira bell vegan options,
kiera ball volleyball,
kiera ball vlogs,
kiera ball winner numbers,
kiera ball wiki,
kiera ball workouts,
kiera ball wwf,
kiera ball wrestling,
kiera ball wizards,
kiera ball xenoverse 2,
kiera ball xenoverse 3,
kiera ball xylophone,
kiera ball xavie,
kiera ball ymca,
kiera ball youtube,
kiera ball yosemite,
kiera ball yacht,
kiera ball zoo,
kiera ball zip,
kiera ball zipper,
kiera ball 05,
kiera ball 09,
kiera ball 01,
kiera ball 03,
kiera ball 2018,
kiera ball 2019,
kiera ball 2018 lineup,
kiera ball 2021,
kiera ball 2020,
kieran ball 3 minute spanish,
kieran ball 3 minute italian,
kieran ball 3 minute french,
kiera ball 4 volume 3,
kiera ball 4 volume 2,
kiera ball 40,
kiera ball 40 yard dash,
kiera ball 45,
kiera ball 50,
kiera ball 500,
kiera ball 64,
kiera ball 7v7,
kiera ball 70,
kiera ball 80s,
kiera ball 97,
kiera ball 90,
kiera ball 95
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
