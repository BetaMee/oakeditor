import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const height = ({ gHeight }) => gHeight && `height: ${gHeight}`

const width = ({ gWidth }) => gWidth && `width: ${gWidth}`

const rows = ({ gRows = 1 }) => typeof gRows === "number" ? `repeat(${gRows}, 1fr)` : gRows

const columns = ({ gColumns = 12 }) => typeof gColumns === "number" ? `repeat(${gColumns}, 1fr)` : gColumns

const formatAreas = areas => areas.map(area => `"${area}"`).join(" ")

const gridTemplateAreas = ({ gAreas }) => gAreas && `grid-template-areas: ${formatAreas(gAreas)}`

const gap = ({ gap = '8px' }) => `${gap} ${gap}`

const justifyItems = ({ justifyItems }) => justifyItems && `justify-items: ${justifyItems}`

const alignItems = ({ alignItems }) => alignItems && `align-items: ${alignItems}`

const justifyContent = ({ justifyContent }) => justifyContent && `justify-content: ${justifyContent}`

const alignContent = ({ alignContent }) => alignContent && `align-content: ${alignContent}`

const flow = ({ gFlow = 'row' }) => gFlow

const autoRows = ({ minRowHeight = '20px' }) => `minmax(${minRowHeight}, auto)`

const autoColums = ({ minColumsWidth = '20px' }) => `minmax(${minColumsWidth}, auto)`

const Grid = styled.div`
  ${height};
  ${width};
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
  gHeight: PropTypes.string,
  gWidth: PropTypes.string,
  gRows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gColumns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gAreas: PropTypes.arrayOf(PropTypes.string),
  gap: PropTypes.string,
  justifyItems: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  alignContent: PropTypes.string,
  gFlow: PropTypes.string,
  minRowHeight: PropTypes.string,
  minColumsWidth: PropTypes.string,
}

export default Grid
