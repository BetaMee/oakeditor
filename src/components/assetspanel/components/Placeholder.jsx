import React from 'react'
import styled from 'styled-components'

import Wrapper from '../../common/components/Wrapper'
import { Grid, Cell } from '../../common/GridLayout'
import  { skeleton } from '../../common/animations'

const PlaceholderWrapper = Wrapper.extend`
  width: 33.333%;
	height: 180px;
	padding: 4px;
`

const ContentWrapper = Wrapper.extend`
	margin-bottom: 2px;
	border-radius: 4px;
	background-color: #FFFFFF;
  box-shadow: 0 4px 6px rgba(0,0,0,0.02), 0 2px 6px 1px rgba(0,0,0,0.09);
	cursor: move;
	position: relative;
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

const Placeholder = () =>
  <PlaceholderWrapper>
    <ContentWrapper>
      <Grid
        gColumns={'80px 1fr'}
        gRows={'100px 24px 22px 20px'}
        gap='0px'
        gHeight='100%'
        gWidth='100%'
      >
        <Cell
          spanWidth={2}
        >
          <SkeletonMudule />
        </Cell>
        <Cell>
          <SkeletonMudule />
        </Cell>
        <Cell>
          <SkeletonMudule />
        </Cell>
        <Cell
          spanWidth={2}
        >
          <SkeletonMudule />
        </Cell>
        <Cell
          gLeft={2}
        >
          <SkeletonMudule />
        </Cell>
      </Grid>
    </ContentWrapper>
  </PlaceholderWrapper>

export default Placeholder

const PlaceholderFakeData = {
  isFake: true, // 是否是假数据
  assetKey: 'UniquePlaceholder'
}

export {
  PlaceholderFakeData
}
