import React, { Component } from 'react'
import styled from 'styled-components'

const height = ({ height = '100%' }) => `height: ${height}`

const width = ({ width = '100%' }) => `width: ${width}`

const backgroundColor = ({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor}`

const color = ({ color }) => color && `color: ${color}`

const padding = ({ padding }) => padding && `padding: ${padding}`

const margin = ({ margin }) => margin && `margin: ${margin}`

const border = ({ border }) => border && `border: ${border}`

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
export default Wrapper
