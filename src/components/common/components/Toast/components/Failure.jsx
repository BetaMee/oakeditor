export default Failure

import React from 'react'
import styled from 'styled-components'
import Wrapper from '../../Wrapper'
import SVGIcon from '../../SVGIcon'

const FailureWrapper = Wrapper.extend`
  width: 100px;
  height: 100px;
  background-color: rgba(17, 17, 17, 0.7);
  border-radius: 5px;
  fill: #ffffff;  
`

const Failure = () =>
  <FailureWrapper>
    <SVGIcon name='Failure' size={55}/>
  </FailureWrapper>

export default Failure
