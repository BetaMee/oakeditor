import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'

const BarWrapper = Wrapper.extend`
  background-color: ${({ bgColor }) => bgColor};
  position: relative;
  border-radius: 0 0 4px 4px;
`

const ProcessCount = styled.span`
  font-size:  14px;
  color:  ${({ textColor }) => textColor};
  position: absolute;
  left: 20px;
`

const ProcessStatus = styled.div`
  height: 100%;
  width: ${({ ratio }) => `${ratio}%`};;
  background-color: ${({ processColor }) => processColor};
  border-radius: 0 0 2px 2px;
`

const ProcessBar = ({ ratio, bgColor, processColor, textColor }) =>
  <BarWrapper
    layout='rowLeft'
    bgColor={bgColor}
  >
    <ProcessCount
      textColor={textColor}
    >{ratio}%</ProcessCount>
    <ProcessStatus
      ratio={ratio}
      processColor={processColor}
    />
  </BarWrapper>

ProcessBar.defaultProps = {
  ratio: 0,
  bgColor: '#212121',
  processColor: '#43A047',
  textColor: '#ffffff'
}

ProcessBar.propTypes = {
  ratio: PropTypes.number.isRequierd,
  bgColor: PropTypes.string.isRequierd,
  processColor: PropTypes.string.isRequierd,
  textColor: PropTypes.string.isRequierd,
}

export default ProcessBar
