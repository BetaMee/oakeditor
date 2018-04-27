import React, { Component } from 'react'
import styled from 'styled-components'

import Wrapper from '../../common/components/Wrapper'
import alt from '../../../assets/images/alt.svg'
import Image from '../../common/components/Image'

const Card = Image.extend`
	border-radius: 4px 4px 0 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`

class ImageCard extends Component {
  state = {
    src: this.props.src
  }
  imageLoadErrorHandler = (e) => {
    this.setState({
      src: alt
    })
  }
  imageOnLoadHandler = (e) => {
    // 这里添加图片加载效果
  }
  render() {
    const {
      showCardDetail
    } = this.props
    const {
      src
    } = this.state
    return (
      <Wrapper
        wHeight='100px'
        onClick={showCardDetail}
      >
        <Card
          src={src}
          onLoad={this.imageOnLoadHandler}
          onError={this.imageLoadErrorHandler}
        />
      </Wrapper>
    )
  }
}

export default ImageCard
