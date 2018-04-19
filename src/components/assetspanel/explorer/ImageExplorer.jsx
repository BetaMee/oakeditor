import React, { Component } from 'react'
import { DragDropContext, DragDropContextProvider } from 'react-dnd'
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend'
// 布局组件
import Wrapper from '../../common/components/Wrapper'
// 功能组件
import DragDropZone from '../components/DragDropZone'
import Image from '../components/Image'
import DetailCard from '../components/DetailCard'
import ItemTypes from '../components/ItemTypes'

class ImageExplorer extends Component {
  state = {
    isShowCardDetail: false
  }
  // 拖拽上传
  DropEvtHandler = (props, monitor) => {
    if (monitor) {
			const droppedFiles = monitor.getItem().files
      // 上传文件数据
      console.log(droppedFiles)
		}
  }
  // 拖拽卡片
  moveCardHandler = (dragIndex, hoverIndex) => {

  }
  // 获取图片链接
  getLinkHandler = () => {

  }

  // 显示卡片详情
  showCardDetailHandler = () => {
    this.setState({
      isShowCardDetail: true
    })
  }
  // 关闭卡片详情
  hideCardDetailHandler = () => {
    this.setState({
      isShowCardDetail: false
    })
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
            src={'https://avatars0.githubusercontent.com/u/30206305?s=460&v=4'}
            moveCard={this.moveCardHandler}
            showCard={this.showCardDetailHandler}
            id={1}
            index={0}
          />
          <Image
            src={'https://avatars0.githubusercontent.com/u/30206305?s=460&v=4'}          
            moveCard={this.moveCardHandler}
            showCard={this.showCardDetailHandler}          
            id={2}
            index={1}
          />
          <Image
            src={'https://avatars0.githubusercontent.com/u/30206305?s=460&v=4'}          
            moveCard={this.moveCardHandler}
            showCard={this.showCardDetailHandler}            
            id={3}
            index={2}
          />
          <Image
            src={'https://avatars0.githubusercontent.com/u/30206305?s=460&v=4'}          
            moveCard={this.moveCardHandler}
            showCard={this.showCardDetailHandler}          
            id={4}
            index={3}
          />
          <Image
            src={'https://avatars0.githubusercontent.com/u/30206305?s=460&v=4'}          
            moveCard={this.moveCardHandler}
            showCard={this.showCardDetailHandler}          
            id={5}
            index={4}
          />
        </DragDropZone>
        {
          this.state.isShowCardDetail &&
            <DetailCard
              type={ItemTypes.IMAGE}
              hideCard={this.hideCardDetailHandler}
            />
        }
      </Wrapper>
    )
  }
}

export default DragDropContext(HTML5Backend)(ImageExplorer)
