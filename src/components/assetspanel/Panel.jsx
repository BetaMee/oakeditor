import React, { Component } from 'react'
import { fromJS, Map } from 'immutable'
// 布局组件
import Wrapper from '../common/components/Wrapper'
import { Grid, Cell } from '../common/GridLayout'
// styled animation
import {
  slideInRight
} from '../common/animations'
// 其他组件
import PanelTitle from './PanelTitle'
import PanelTab from './PanelTab'
import Explorer from './Explorer'
import ProcessBar from '../common/components/ProcessBar'
import { request } from '../../core'
import { date } from '../../utils'
import { CircleToast } from '../common/components/Toast'
import { PlaceholderFakeData } from './components/Placeholder'

const PanelWrapper = Wrapper.extend`
  width: 450px;
  height: 644px;
  background-color: #FAFAFA;
  animation: ${slideInRight} 0.3s linear;
  position: absolute;
  top: 5%;
  bottom: 5%;
  right: 5%;
  z-index: 9999;
  border-radius: 4px;
`

const ProcessWrapper = Wrapper.extend`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 40px;
`
class Panel extends Component {
  panelRef = React.createRef()
  state = {
    currentTabId: 0, // tab切换
    isShowDataLoading:false, // 是否展示数据加载
    isShowProcessBar: false, // 展示进度条
    maskShowKey: '', // 展示图片Mask的key
    completed: 0, // 完成度
    assetsMap: fromJS({
      image: [],
      file: [],
      video: [],
      audio: []
    }), // 加载出来的资源
  }
  handleTabSwitch = (e, tabId) => {
    this.setState({
      currentTabId: tabId
    })
  }
  stopHideAssetsPanelEvt = (e) => {
    // 禁止传播点击事件至父元素，避免关闭Modal
    e.preventDefault()
    e.stopPropagation()
  }
  uploadAsset = async (type, asset) => {
    // 添加加载占位符
    this.setState(({ assetsMap }) => {
      // 伪数据
      const newAssets = assetsMap.update(type, list => list.unshift(Map(PlaceholderFakeData)))
      return {
        assetsMap: newAssets
      }
    })
    // 获取panel的ref
    const $panelContainer = this.panelRef.current
    CircleToast.loading($panelContainer)
    // 生成表单数据
    const formData = new FormData()
    formData.append('userId', 'd5da709f-dc12-413f-a7d6-073357799fb5')
    formData.append(type, asset)
    // 生辰纲url前缀
    const prefix = `assets/upload/${type}`
    // 发送数据
    const uploadedAsset = await request.upload(prefix, formData, (completed) => {
      if (completed === 100) {
        this.setState({
          isShowProcessBar: false,
          completed: completed
        })
      } else {
        this.setState({
          isShowProcessBar: true,
          completed: completed
        })
      }
    })
    if (uploadedAsset.success) {
      CircleToast.success(2000, $panelContainer)
      // 更新数据
      this.setState(({ assetsMap }) => {
        const newAssets = assetsMap.update(type, list => list.shift().unshift(Map(uploadedAsset.data)))
        return {
          assetsMap: newAssets
        }
      })
    } else {
      // toast提示
      console.log(uploadedAsset.message)
      CircleToast.fail(2000, $panelContainer)
      this.setState(({ assetsMap }) => {
        // 伪数据
        const newAssets = assetsMap.update(type, list => list.shift())
        return {
          assetsMap: newAssets
        }
      })
    }
  }
  loadAssets = async (type) => {
    this.setState({
      isShowDataLoading: true
    })
    // 可以从本地存储中获取这些数据
    const userId = 'd5da709f-dc12-413f-a7d6-073357799fb5'
    // 生成前缀
    const archiveType = `${type}s`
    const params = [archiveType, userId]
    // 获取数据
    const fetchedAssets = await request.fetch('assets', params)
    if (fetchedAssets.success) {
      // 更新数据
      this.setState(({ assetsMap }) => {
        const newAssets = assetsMap
          .update(type, list =>
            fromJS(fetchedAssets.data)
              .sort((prevData, nextData) => date.sortDataByMomentDes(prevData.get('updatedAt'), nextData.get('updatedAt')))
              .map(item => item.set('isFake', false))
            )
        return {
          assetsMap: newAssets,
          isShowDataLoading: false
        }
      })
    } else {
      // toast提示
      console.log(fetchedAssets.message)
      this.setState({
        isShowDataLoading: false
      })
    }
  }
  updateAsset = async (type, assetKey, toUpdateData) => {
    // 展示mask
    this.setState({
      maskShowKey: assetKey
    })
    const $panelContainer = this.panelRef.current
    CircleToast.loading($panelContainer)
    const prefix = 'assets/update'
    // 更新数据
    const updatedAsset = await request.update(prefix, [assetKey], toUpdateData)
    if (updatedAsset.success) {
      CircleToast.success(2000, $panelContainer)
      // 更新数据
      this.setState(({ assetsMap }) => {
        const toUpdateAssetIndex = assetsMap.get(type).findIndex((item) => item.get('assetKey') === assetKey)
        const newAssets = assetsMap
          .update(type, list => list
            .update(toUpdateAssetIndex, () => Map(updatedAsset.data))
            .sort((prevData, nextData) => date.sortDataByMomentDes(prevData.get('updatedAt'), nextData.get('updatedAt')))
          )
        return {
          assetsMap: newAssets,
          maskShowKey: ''
        }
      })
    } else {
      // toast提示
      console.log(updatedAsset.message)
      CircleToast.fail(2000, $panelContainer)
      this.setState({
        maskShowKey: ''
      })
    }
  }
  deleteAsset = async (type, assetKey) => {
    // 展示mask
    this.setState({
      maskShowKey: assetKey
    })
    const $panelContainer = this.panelRef.current
    CircleToast.loading($panelContainer)
    const prefix = 'assets/delete'
    // 删除数据
    const deletedAsset = await request.delete(prefix, [assetKey])
    if (deletedAsset.success) {
      CircleToast.success(2000, $panelContainer)
      // 更新数据
      this.setState(({ assetsMap }) => {
        const toDeleteAssetIndex = assetsMap.get(type).findIndex((item) => item.get('assetKey') === assetKey)
        const newAssets = assetsMap.update(type, list => list.delete(toDeleteAssetIndex))
        return {
          assetsMap: newAssets,
          maskShowKey: ''
        }
      })
    } else {
      // toast提示
      console.log(deletedAsset.message)
      CircleToast.fail(2000, $panelContainer)
      this.setState({
        maskShowKey: ''
      })
    }
  }
  render() {
    const {
      isShowDataLoading,
      currentTabId,
      assetsMap,
      completed,
      maskShowKey
    } = this.state
    return (
      <PanelWrapper
        layout='columnTop'
        onClick={this.stopHideAssetsPanelEvt}
        innerRef={this.panelRef}
      >
        <Grid
          gColumns={'55px 1fr'}
          gRows={'44px 600px'}
          gap='0px'
          gHeight='100%'
          gWidth='100%'
        >
          {/* Panel title */}
          <Cell
            spanWidth={2}
          >
            <PanelTitle />
          </Cell>
          {/* Panel side */}
          <Cell>
            <PanelTab
              currentTabId={currentTabId}
              handleTabSwitch={this.handleTabSwitch}
            />
          </Cell>
          {/* Explorer */}
          <Cell>
            <Explorer
              currentTabId={currentTabId}
              panelRef={this.panelRef}
              assetsMap={assetsMap}
              uploadAsset={this.uploadAsset}
              loadAssets={this.loadAssets}
              updateAsset={this.updateAsset}
              deleteAsset={this.deleteAsset}
              isShowDataLoading={isShowDataLoading}
              maskShowKey={maskShowKey}
            />
          </Cell>
        </Grid>
        {
          this.state.isShowProcessBar &&
            <ProcessWrapper>
              <ProcessBar
                ratio={completed}
              />
            </ProcessWrapper>
        }
      </PanelWrapper>
    )
  }
}

export default Panel
