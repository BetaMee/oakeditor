import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

const flow = ({ flow = 'row' }) => flow

const autoRows = ({ minRowHeight = '20px' }) => `minmax(${minRowHeight}, auto)`

const rows = ({ rows = 1 }) => typeof rows === "number" ? `repeat(${rows}, 1fr)` : rows

const columns = ({ columns = 12 }) => typeof columns === "number" ? `repeat(${columns}, 1fr)` : columns

const gap = ({ gap = '8px' }) => `${gap} ${gap}`

const formatAreas = areas => areas.map(area => `"${area}"`).join(" ")

const gridTemplateAreas = ({ areas }) => areas && `grid-template-areas: ${formatAreas(areas)}`

const justifyContent = ({ justifyContent }) => justifyContent && `justify-content: ${justifyContent}`

const alignContent = ({ alignContent }) => alignContent && `align-content: ${alignContent}`

const Grid = Styled.div`
  display: grid;
  grid-auto-flow: ${flow};
  grid-auto-rows: ${autoRows};
  grid-template-rows: ${rows};
  grid-template-columns: ${columns};
  grid-gap: ${gap};
  ${gridTemplateAreas};
  ${justifyContent};
  ${alignContent};
`

Grid.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gap: PropTypes.string,
  minRowHeight: PropTypes.string,
  flow: PropTypes.string,
  rows: PropTypes.string,
  areas: PropTypes.arrayOf(PropTypes.string),
  justifyContent: PropTypes.string,
  alignContent: PropTypes.string
}

export default Grid
