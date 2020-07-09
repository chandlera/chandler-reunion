/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import ChandlerCrest from '../../content/assets/chandler-crest.png';

import { rhythm } from "../utils/typography"

const Bio = () => {
  const fluidImageObject = {
    src: ChandlerCrest,
    srcSet: '',
    width: 200,
    height: 269
  }

  return (
    <div
      style={{
        display: `flex`,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: rhythm(2),
      }}
    >
      <Image alt="Chandler family crest" resolutions={fluidImageObject} />
    </div>
  )
}

export default Bio
