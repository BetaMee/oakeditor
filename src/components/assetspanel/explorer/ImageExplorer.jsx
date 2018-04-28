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
import SkeletonLoading from '../../common/components/SkeletonLoading'
import Placeholder from '../components/Placeholder'

class ImageExplorer extends Component {
  state = {
    isShowCardDetail: false,
    assetKey: '',
  }
  componentDidMount() {
    const {
      loadAssets
    } = this.props
    // 加载数据
    loadAssets(ItemTypes.IMAGE)
  }
  // 拖拽上传
  DropEvtHandler = (props, monitor) => {
    const { uploadAsset } = this.props
    if (monitor) {
      const droppedFiles = monitor.getItem().files
      // 上传文件数据
      uploadAsset(ItemTypes.IMAGE, droppedFiles[0])
		}
  }
  // 拖拽卡片
  moveCardHandler = (dragIndex, hoverIndex) => {

  }
  // 显示卡片详情
  showCardDetailHandler = (assetKey) => {
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
    const {
      assets,
      deleteAsset,
      updateAsset,
      isShowDataLoading,
      maskShowKey
    } = this.props
    const { assetKey } = this.state
    return isShowDataLoading ?  <SkeletonLoading /> :
      <Wrapper>
        <DragDropZone
          onDrop={this.DropEvtHandler}
          accepts={[FILE]}
        >
          {
            assets.map((item, index) => {
              if (!item.get('isFake')) {
                return (
                  <Image
                    key={item.get('assetKey')}
                    src={item.get('url')}
                    id={item.get('assetKey')}
                    index={index}
                    size={item.get('assetSize')}
                    moveCard={this.moveCardHandler}
                    deleteAsset={deleteAsset}
                    showCard={this.showCardDetailHandler}
                    maskShowKey={maskShowKey}
                  />
                )
              } else {
                return <Placeholder key={item.get('assetKey')} />
              }
            })
          }
        </DragDropZone>
        {
          this.state.isShowCardDetail &&
            <DetailCard
              type={ItemTypes.IMAGE}
              detailAsset={assets.find(item => item.get('assetKey') === assetKey)}
              assetKey={assetKey}
              hideCard={this.hideCardDetailHandler}
              updateCard={updateAsset}
            />
        }
      </Wrapper>
  }
}

export default DragDropContext(HTML5Backend)(ImageExplorer)
