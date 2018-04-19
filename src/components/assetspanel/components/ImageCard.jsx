import React, { Component } from 'react'
import styled from 'styled-components'

import Wrapper from '../../common/components/Wrapper'
import alt from '../../../assets/images/alt.svg'

const Card = styled.img`
	border-radius: 4px 4px 0 0;
  object-fit: cover;
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
          onError={this.imageLoadErrorHandler}
        />
      </Wrapper>
    )
  }
}
  

export default ImageCard
