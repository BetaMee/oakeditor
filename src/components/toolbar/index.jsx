import React, { Component } from 'react'

// GridLayout
import { Grid, Cell } from '../common/GridLayout'
// 组件
import Folder from './Folder'
import Formater from './Formater'
import Status from './Status'
import Setting from './Setting'
import Wrapper from '../common/components/Wrapper'

class ToolBar extends Component {
  render() {
    return (
      <Wrapper
        backgroundColor={'rgb(44, 44, 44)'}
        wColor={'rgba(0, 0, 0, .75)'}
        isUserSelect={false}
      >
        <Grid
          gColumns={'46px 1fr 1fr 46px'}
          gRows={1}
          gap='0px'
          gHeight='100%'
          gWidth='100%'
        >
          {/* folder icon */}
          <Cell>
            <Folder />
          </Cell>
          {/* edit group */}
          <Cell>
            <Formater />
          </Cell>
          {/* status group */}
          <Cell>
            <Status />
          </Cell>
          {/* setting icon */}
          <Cell
          >
            <Setting />
          </Cell>
        </Grid>
      </Wrapper>
    )
  }
}

export default ToolBar
