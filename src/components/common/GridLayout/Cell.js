import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const height = ({ height }) => height && `height: ${height}`

const width = ({ width }) => width && `width: ${width}`

const gridColumnStart = ({ left }) => left && `grid-column-start: ${left}`

const gridRowStart = ({ top }) => top && `grid-row-start: ${top}`

const gridArea = ({ area }) => area && `grid-area: ${area}`

const justifySelf = ({ justifySelf }) => justifySelf && `justify-self: ${justifySelf}`

const alignSelf = ({ alignSelf }) => alignSelf && `align-self: ${alignSelf}`

const Cell = styled.section`
  ${height};
  ${width};
  ${gridColumnStart};
  ${gridRowStart};
  grid-column-end: ${({ spanWidth = 1 }) => `span ${spanWidth}`};
  grid-row-end: ${({ spanHeight = 1 }) => `span ${spanHeight}`};
  ${gridArea};
  ${justifySelf};
  ${alignSelf}
`

Cell.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  spanHeight: PropTypes.number,
  spanWidth: PropTypes.number,
  area: PropTypes.string,
  justifySelf: PropTypes.string,
  alignSelf: PropTypes.string,  
}

export default Cell
