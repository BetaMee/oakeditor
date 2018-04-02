import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

const gridColumnStart = ({ left }) => left && `grid-column-start: ${left}`

const gridRowStart = ({ top }) => top && `grid-row-start: ${top}`

const textAlign = ({ center }) => center && `text-align: center`

const gridArea = ({ area }) => area && `grid-area: ${area}`

const middle = ({ middle }) => middle && `
  display: inline-flex;
  flex-flow: column wrap;
  justify-content: center;
  justify-self: stretch;
`

const Cell = Styled.section`
  height: 100%;
  min-width: 0;
  align-content: space-around;
  grid-column-end: ${({ width = 1 }) => `span ${width}`};
  grid-row-end: ${({ height = 1 }) => `span ${height}`};
  ${gridColumnStart};
  ${gridRowStart};
  ${textAlign};
  ${gridArea};
  ${middle};
`;

Cell.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  middle: PropTypes.bool,
  center: PropTypes.bool,
  area: PropTypes.string
};

export default Cell
