import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend'
// 布局组件
import Wrapper from '../../common/components/Wrapper'
// 功能组件
import DragDropZone from '../components/DragDropZone'
import Image from '../components/Image'
import DetailCard from '../components/DetailCard'
import ItemTypes from '../components/ItemTypes'
import ProcessBar from '../../common/components/ProcessBar'
import accepts from '../../../config/accepts'

class ImageExplorer extends Component {
  state = {
    isShowCardDetail: false,
    assetKey: '',
  }
  // 拖拽上传
  DropEvtHandler = (props, monitor) => {
    const { uploadFile } = this.props
    if (monitor) {
			const droppedFiles = monitor.getItem().files
      // 上传文件数据
      uploadFile(accepts.__IMAGE__, droppedFiles[0])
		}
  }
  // 拖拽卡片
  moveCardHandler = (dragIndex, hoverIndex) => {

  }
  // 获取图片链接
  getLinkHandler = () => {

  }
  // 显示卡片详情
  showCardDetailHandler = (assetKey) => {
    // console.log(assetKey)
    this.setState({
      isShowCardDetail: true,
      assetKey: assetKey
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
    const { assets } = this.props
    const { assetKey } = this.state
    return (
      <Wrapper>
        <DragDropZone
          onDrop={this.DropEvtHandler}
          accepts={[FILE]}
        >
          {
            assets.map(item => (
              <Image
                key={item.get('assetKey')}
                src={item.get('url')}
                id={item.get('assetKey')}
                getLink={this.getLinkHandler}
                moveCard={this.moveCardHandler}
                showCard={() => this.showCardDetailHandler(item.get('assetKey'))}
              />
            ))
          }
        </DragDropZone>
        {
          this.state.isShowCardDetail &&
            <DetailCard
              type={ItemTypes.IMAGE}
              assets={assets}
              assetKey={assetKey}
              hideCard={this.hideCardDetailHandler}
              updateCard={this.updateCardHanlder}
            />
        }
      </Wrapper>
    )
  }
}

export default DragDropContext(HTML5Backend)(ImageExplorer)
