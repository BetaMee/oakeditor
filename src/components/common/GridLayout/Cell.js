import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const height = ({ gHeight }) => gHeight && `height: ${gHeight}`

const width = ({ gWidth }) => gWidth && `width: ${gWidth}`

const gridColumnStart = ({ gLeft }) => gLeft && `grid-column-start: ${gLeft}`

const gridRowStart = ({ gTop }) => gTop && `grid-row-start: ${gTop}`

const gridArea = ({ gArea }) => gArea && `grid-area: ${gArea}`

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
  gHeight: PropTypes.number,
  gWidth: PropTypes.number,
  gLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  gTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  gArea: PropTypes.string,
  justifySelf: PropTypes.string,
  alignSelf: PropTypes.string,  
  spanHeight: PropTypes.number,
  spanWidth: PropTypes.number,
}

export default Cell
