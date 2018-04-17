import React from 'react'
import styled from 'styled-components'

import { Grid, Cell } from '../GridLayout'
import Wrapper from './Wrapper'
import  { skeleton } from '../animations'

const LoadingWrapper = Wrapper.extend`
  overflow: hidden;
  padding-top: 5px;
`

const Skeleton = styled.div`
  width: 100%;
  height: 84px;
`
const SkeletonMudule = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  box-sizing: border-box;
  background: #dadada;
  background-image: linear-gradient(90deg,rgba(255, 255, 255, 0.15) 25%, transparent 25%);
  background-size: 20rem 20rem;
  background-clip: content-box;
  animation: ${skeleton} 1s linear infinite;
`

const SkeletonItem = () =>
  <Skeleton>
    <Grid
      gColumns={'80px 1fr'}
      gRows={'44px 25px'}
      gap='0px'
      gHeight='100%'
      gWidth='100%'
    >
      <Cell
        spanHeight={2}
      >
        <SkeletonMudule />
      </Cell>
      <Cell>
        <SkeletonMudule />
      </Cell>
      <Cell>
        <SkeletonMudule />
      </Cell>
    </Grid>  
  </Skeleton>

const Loading = () =>
  <LoadingWrapper
    layout='columnTop'
  >
  {Array(7).fill(0).map(() => (
    <SkeletonItem />
  ))}
  </LoadingWrapper>

export default Loading
