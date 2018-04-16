import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const layoutArr = [
  'rowCenter', // 居中
  // direction为row
  'rowLeft', // 左部
  'rowRight', // 右部
  'rowTop', // 顶部
  'rowButtom', // 底部
  'rowTopRight', // 右上
  'rowButtomRight', // 右下
  'rowTopLeft', // 左上
  'rowButtomLeft', // 左下
  // direction为column
  'columnCenter', // 居中
  'columnLeft', // 左部
  'columnRight', // 右部
  'columnTop', // 顶部
  'columnButtom', // 底部
  'columnTopRight', // 右上
  'columnButtomRight', // 右下
  'columnTopLeft', // 左上
  'columnButtomLeft' // 左下
]

const flexLayoutMap = {
  // direction为row
  rowCenter: `
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  rowLeft: `
    flex-direction: row;  
    justify-content: flex-start;
    align-items: center;
  `,
  rowRight: `
    flex-direction: row;    
    justify-content: flex-end;
    align-items: center;
  `,
  rowTop: `
    flex-direction: row;  
    justify-content: center;
    align-items: flex-start;
  `,
  rowButtom: `
    flex-direction: row;  
    justify-content: center;
    align-items: flex-end;
  `,
  rowTopRight: `
    flex-direction: row;    
    justify-content: flex-end;
    align-items: flex-start;
  `,
  rowButtomRight: `
    flex-direction: row;  
    justify-content: flex-end;
    align-items: flex-end;
  `,
  rowTopLeft: `
    flex-direction: row;    
    justify-content: flex-start;
    align-items: flex-start;
  `,
  rowButtomLeft: `
    flex-direction: row;    
    justify-content: flex-start;
    align-items: flex-end;
  `,
  // direction为column
  columnCenter: `
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  columnLeft: `
    flex-direction: column;  
    justify-content: center;
    align-items: flex-end;
  `,
  columnRight: `
    flex-direction: column;    
    justify-content: flex-end;
    align-items: flex-start;
  `,
  columnTop: `
    flex-direction: column;  
    justify-content: flex-start;
    align-items: center;
  `,
  columnButtom: `
    flex-direction: column;  
    justify-content: flex-end;
    align-items: center;
  `,
  columnTopRight: `
    flex-direction: column;    
    justify-content: flex-start;
    align-items: flex-end;
  `,
  columnButtomRight: `
    flex-direction: column;  
    justify-content: flex-end;
    align-items: flex-start;
  `,
  columnTopLeft: `
    flex-direction: column;    
    justify-content: flex-start;
    align-items: flex-start;
  `,
  columnButtomLeft: `
    flex-direction: column;    
    justify-content: flex-end;
    align-items: flex-end;
  `
}

const height = ({ wHeight = '100%' }) => `height: ${wHeight}`

const width = ({ wWidth = '100%' }) => `width: ${wWidth}`

const backgroundColor = ({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor}`

const color = ({ wColor }) => wColor && `color: ${wColor}`

const padding = ({ wPadding }) => wPadding && `padding: ${wPadding}`

const margin = ({ wMargin }) => wMargin && `margin: ${wMargin}`

const border = ({ wBorder }) => wBorder && `border: ${wBorder}`

const overflow = ({ wOverFlow }) => wOverFlow && `overflow: ${wOverFlow}`

const layout = ({ layout = 'rowCenter' }) => `
  display: flex;
  ${flexLayoutMap[layout]};
`

const userSelect = ({ isUserSelect = true }) => !isUserSelect && `user-select: none;` 

const Wrapper = styled.div`
  box-sizing: border-box;
  ${height};
  ${width};
  ${backgroundColor};
  ${color};
  ${padding};
  ${margin};
  ${border};
  ${overflow};
  ${layout};
  ${userSelect};
`

Wrapper.propTypes = {
  className: PropTypes.string,
  wHeight: PropTypes.string,
  wWidth: PropTypes.string,
  backgroundColor: PropTypes.string,
  wColor: PropTypes.string,
  wPadding: PropTypes.string,
  wMargin: PropTypes.string,
  wBorder: PropTypes.string,
  wOverFlow: PropTypes.oneOf(['scroll', 'hidden', 'auto']),
  layout: PropTypes.oneOf(layoutArr),
  isUserSelect: PropTypes.bool
}

export default Wrapper
