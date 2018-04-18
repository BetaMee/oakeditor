import React, { Component } from 'react'
import { DragDropContext, DragDropContextProvider } from 'react-dnd'
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend'
// 布局组件
import Wrapper from '../../common/components/Wrapper'
// 功能组件
import DragDropZone from '../components/DragDropZone'
import Image from '../components/Image'

class ImageExplorer extends Component {
  DropEvtHandler = (props, monitor) => {
    if (monitor) {
			const droppedFiles = monitor.getItem().files
      // 上传文件数据
      console.log(droppedFiles)
		}
  }
  // 拖拽卡片
  cardMoveHandler = (dragIndex, hoverIndex) => {

  }
  // 获取图片链接
  getLinkHandler = () => {

  }

  render() {
    const { FILE } = NativeTypes
    return (
      <Wrapper>
        <DragDropZone
          onDrop={this.DropEvtHandler}
          accepts={[FILE]}
        >
          <Image
            src={'https://www.fotor.com/images2/features/crop/crop_2.jpg'}
            moveCard={this.cardMoveHandler}
            id={1}
            index={0}
          />
          <Image
            src={'https://www.fotor.com/images2/features/crop/crop_2.jpg'}          
            moveCard={this.cardMoveHandler} id={2} index={1}/>
          <Image
            src={'https://www.fotor.com/images2/features/crop/crop_2.jpg'}          
            moveCard={this.cardMoveHandler} id={3} index={2}/>
          <Image
            src={'https://www.fotor.com/images2/features/crop/crop_2.jpg'}          
            moveCard={this.cardMoveHandler} id={4} index={3}/>
          <Image
            src={'https://www.fotor.com/images2/features/crop/crop_2.jpg'}          
            moveCard={this.cardMoveHandler} id={5} index={4}/>
        </DragDropZone>
      </Wrapper>
    )
  }
}

export default DragDropContext(HTML5Backend)(ImageExplorer)
