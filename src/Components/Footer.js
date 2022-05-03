import React, { useState, useEffect } from 'react'
import ScrollToTopBtn from './ScrollToTopBtn'

function Footer() {
  const [version, setVersion] = useState('')
  useEffect(() => {
    fetch('/app.json')
      .then((response) => response.json())
      .then((data) => setVersion(data.version))
      .catch((error) => {
        console.log('Footer useEffect', error)
        alert('An error occurred please try again later.')
      })
  }, [])

  return (
    <footer className="flex justify-content-center align-items-center">
      <p style="color:white;">organ donor  july 30  max johnson  max and keira law  joe ball road traffic accident  mum loanna  car crash  keira ball who died inspired by keira  organ donation  keira organ</p>
      <br>
    <p>
        <span className="mr-2">© Kiera Ball 2022</span>
        <span>v{version}</span>
      </p>
      <ScrollToTopBtn />
    </footer>
  )
}

export default Footer
