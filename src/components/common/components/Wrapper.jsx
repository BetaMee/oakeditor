import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const height = ({ wHeight = '100%' }) => `height: ${wHeight}`

const width = ({ wWidth = '100%' }) => `width: ${wWidth}`

const backgroundColor = ({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor}`

const color = ({ wColor }) => wColor && `color: ${wColor}`

const padding = ({wPadding }) => wPadding && `padding: ${wPadding}`

const margin = ({ wMargin }) => wMargin && `margin: ${wMargin}`

const border = ({ wBorder }) => wBorder && `border: ${wBorder}`

const center = ({ center }) => center && `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  box-sizing: border-box;
  ${height};
  ${width};
  ${backgroundColor};
  ${color};
  ${padding};
  ${margin};
  ${border};
  ${center};
`

Grid.propTypes = {
  className: PropTypes.string,
  wHeight: PropTypes.string,
  wWidth: PropTypes.string,
  backgroundColor: PropTypes.string,
  wColor: PropTypes.string,
  wPadding: PropTypes.string,
  wMargin: PropTypes.string,
  wBorder: PropTypes.string,
  center: PropTypes.bool
}

export default Wrapper
