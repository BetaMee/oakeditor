import React from 'react'
import styled from 'styled-components'
import Wrapper from '../../Wrapper'
import SVGIcon from '../../SVGIcon'

const LoadingWrapper = Wrapper.extend`
  width: 100px;
  height: 100px;
  background-color: rgba(17, 17, 17, 0.7);
  border-radius: 5px;
`

const Loading = () =>
  <LoadingWrapper>
    <SVGIcon name='Spinner' size={66}/>
  </LoadingWrapper>

export default Loading
