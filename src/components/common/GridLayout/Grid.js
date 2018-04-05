import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const height = ({ height }) => height && `height: ${height}` 

const flow = ({ flow = 'row' }) => flow



const rows = ({ rows = 1 }) => typeof rows === "number" ? `repeat(${rows}, 1fr)` : rows

const columns = ({ columns = 12 }) => typeof columns === "number" ? `repeat(${columns}, 1fr)` : columns

const formatAreas = areas => areas.map(area => `"${area}"`).join(" ")

const gridTemplateAreas = ({ areas }) => areas && `grid-template-areas: ${formatAreas(areas)}`

const gap = ({ gap = '8px' }) => `${gap} ${gap}`

const justifyItems = ({ justifyItem }) => justifyItem && `justify-items: ${justifyItem}`

const alignItems = ({ alignItem }) => alignItem && `align-items: ${alignItem}`

const justifyContent = ({ justifyContent }) => justifyContent && `justify-content: ${justifyContent}`

const alignContent = ({ alignContent }) => alignContent && `align-content: ${alignContent}`

const autoRows = ({ minRowHeight = '20px' }) => `minmax(${minRowHeight}, auto)`

const autoColums = ({ minColumsWidth = '20px' }) => `minmax(${minColumsWidth}, auto)`

const Grid = styled.div`
  ${height};
  display: grid;
  grid-template-rows: ${rows};
  grid-template-columns: ${columns};
  ${gridTemplateAreas};
  grid-gap: ${gap};
  ${justifyItems};
  ${alignItems};
  ${justifyContent};
  ${alignContent};
  grid-auto-flow: ${flow};
  grid-auto-rows: ${autoRows};
  grid-auto-columns: ${autoColums};
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
