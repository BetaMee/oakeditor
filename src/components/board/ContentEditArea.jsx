import React, { Component } from 'react'

import Wrapper from '../common/components/Wrapper'
import EditBoard from './EditBoard'

const content = `## Oakeditor

A editor for LoveOak

## Introduction

## Installing / Getting started

## Deployment

## Testing

## Technology Stack

## Licence

MIT License`

class ContentEditArea extends Component {
  state = {
    content: content
  }

  render() {
    return (
      <Wrapper>
        <EditBoard
          value={'test'}
        />
      </Wrapper>
    )
  }
}

export default ContentEditArea
