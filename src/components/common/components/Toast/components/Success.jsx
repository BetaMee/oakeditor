import React from 'react'
import Wrapper from '../../Wrapper'
import SVGIcon from '../../SVGIcon'

const SuccessWrapper = Wrapper.extend`
  width: 100px;
  height: 100px;
  background-color: rgba(17, 17, 17, 0.7);
  border-radius: 5px;
  fill: #ffffff;
`

const Success = () =>
  <SuccessWrapper>
    <SVGIcon name='Success' size={55}/>
  </SuccessWrapper>

export default Success
