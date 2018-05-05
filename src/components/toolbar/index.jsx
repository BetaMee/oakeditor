import React from 'react'
// GridLayout
import { Grid, Cell } from '../common/GridLayout'
// 组件
import Folder from './Folder'
import Formater from './Formater'
import Status from './Status'
import Setting from './Setting'
import Wrapper from '../common/components/Wrapper'

const ToolBar = (props) => {
  const {
    openFilePanel,
    openMenuPanel,
    openAssetsPanel
  } = props
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
          <Folder
            openFilePanel={openFilePanel}
          />
        </Cell>
        {/* edit group */}
        <Cell>
          <Formater
            openAssetsPanel={openAssetsPanel}
          />
        </Cell>
        {/* status group */}
        <Cell>
          <Status />
        </Cell>
        {/* setting icon */}
        <Cell
        >
          <Setting
            openMenuPanel={openMenuPanel}
          />
        </Cell>
      </Grid>
    </Wrapper>
  )
}

export default ToolBar
