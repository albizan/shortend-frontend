import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Navbar from '../../components/Navbar'

const LandingBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  user-select: none;
  background: #8e2de2; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #4a00e0, #8e2de2); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #4a00e0,
    #8e2de2
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const Landing = (props) => {
  return (
    <Fragment>
      <LandingBackground>
        <Navbar position="absolute" theme="white" />
        <div className="h-full w-full flex items-center justify-center">
          <div className="text-center px-4 mt-20">
            <h2 className="text-5xl sm:text-6xl text-gray-100 font-bold tracking-widest">
              Shortify
            </h2>
            <h4 className="text-base sm:text-xl text-gray-100 mb-10">
              Shorten and manage your links with ease
            </h4>
            <Link
              className="bg-gray-200 text-gray-800 rounded-full px-5 py-4 mt-10 text-sm sm:text-base font-bold uppercase tracking-wide"
              to="/signup"
            >
              Register Now
            </Link>
          </div>
        </div>
      </LandingBackground>
    </Fragment>
  )
}

export default Landing
