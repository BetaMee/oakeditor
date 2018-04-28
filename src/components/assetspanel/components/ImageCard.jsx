import React, { Component } from 'react'
import styled from 'styled-components'

import Wrapper from '../../common/components/Wrapper'
import alt from '../../../assets/images/alt.svg'
import Image from '../../common/components/Image'
import  { skeleton } from '../../common/animations'

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
// 图片加载占位
const PlaceCardWrapper = Wrapper.extend`
  border-radius: 4px 4px 0 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
  background-color: #fff;
`

// 图片卡片
const ImageCardWrapper = Wrapper.extend`
  position: relative;
  height: 100px;
`

const Card = Image.extend`
	border-radius: 4px 4px 0 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`
class ImageCard extends Component {
  state = {
    src: this.props.src,
    showCardPlaceholder: true
  }
  imageLoadErrorHandler = (e) => {
    this.setState({
      src: alt
    })
  }
  imageOnLoadHandler = (e) => {
    this.setState({
      showCardPlaceholder: false
    })
  }
  render() {
    const {
      showCardDetail
    } = this.props
    const {
      src,
      showCardPlaceholder
    } = this.state
    return (
      <ImageCardWrapper
        onClick={showCardDetail}
      >
        <Card
          src={src}
          onLoad={this.imageOnLoadHandler}
          onError={this.imageLoadErrorHandler}
        />
        {
          showCardPlaceholder  &&
            <PlaceCardWrapper>
              <SkeletonMudule />
            </PlaceCardWrapper>
        }
      </ImageCardWrapper>
    )
  }
}

export default ImageCard
