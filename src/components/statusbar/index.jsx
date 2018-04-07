import React, { Component } from 'react'
import styled from 'styled-components'

// 引入组件
import Wrapper from '../common/components/Wrapper'

const Word = styled.span`
  color: #fff;
  font-size: 12px;
  margin: 0 4px;
`

class StatusBar extends Component {
  state = {
    writeCount: ['Markdown', '507bytes'],
    readCount: ['HTML', '507bytes']
  }
  render() {
    return (
      <Wrapper
        backgroundColor='#007acc'
      >
        {/* Write Count */}
        <Wrapper
          layout='rowLeft'
          wPadding='0 0 0 8px'
        >
          {
            this.state.writeCount.map((item, index) => (
                <Word key={index}>{item}</Word>
            ))
          }
        </Wrapper>
        {/* Read Count */}
        <Wrapper
          layout='rowRight'
          wPadding='0 8px 0 0'                  
        >
          {
            this.state.readCount.map((item, index) => (
                <Word key={index}>{item}</Word>
            ))
          }
        </Wrapper>     
      </Wrapper>
    )
  }
}

export default StatusBar
