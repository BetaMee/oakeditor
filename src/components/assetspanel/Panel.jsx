import React, { Component } from 'react'
import { fromJS, List, Map } from 'immutable'
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
    isShowProcessBar: false, // 展示进度条
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
    // 生成表单数据
    const formData = new FormData()
    formData.append('userId', 'd5da709f-dc12-413f-a7d6-073357799fb5')
    formData.append(type, asset)
    // 生辰纲url前缀
    const prefix = `assets/upload/${type}`
    try {
      // 发送数据
      const data = await request.upload(prefix, formData, (completed) => {
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
      // 数据处理
      if (data.statusText === 'OK' && data.data) {
        const uploadedAsset = data.data
        if (uploadedAsset.success) {
          // 更新数据
          this.setState(({ assetsMap }) => {
            const newAssets = assetsMap.update(type, list => list.unshift(Map(uploadedAsset.item)))
            return {
              assetsMap: newAssets
            }
          })
        } else {
          throw(new Error(uploadedAsset.message))
        } 
      } else {
        throw(new Error('bad request'))
      }
    } catch(e) {
      // 容错，可提示toast
      console.error(e)
    }
  }
  loadAssets = async (type) => {
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
          )
        return {
          assetsMap: newAssets
        }
      })
    } else {
      // toast提示
      console.log(fetchedAssets.message)
    }
  }
  updateAsset = async (type, assetKey, toUpdateData) => {
    const prefix = 'assets/update'
    // 更新数据
    const updatedAsset = await request.update(prefix, [assetKey], toUpdateData)
    if (updatedAsset.success) {
      // 更新数据
      this.setState(({ assetsMap }) => {
        const toUpdateAssetIndex = assetsMap.get(type).findIndex((item) => item.get('assetKey') === assetKey)
        const newAssets = assetsMap
          .update(type, list => list.update(toUpdateAssetIndex, () => Map(updatedAsset.data)))
        return {
          assetsMap: newAssets
        }
      })
    } else {
      // toast提示
      console.log(updatedAsset.message)
    }
  }
  deleteAsset = async (type, assetKey) => {  
    const prefix = 'assets/delete'
    // 删除数据
    const deletedAsset = await request.delete(prefix, [assetKey])
    if (deletedAsset.success) {
      // 更新数据
      this.setState(({ assetsMap }) => {
        const toDeleteAssetIndex = assetsMap.get(type).findIndex((item) => item.get('assetKey') === assetKey)
        const newAssets = assetsMap.update(type, list => list.delete(toDeleteAssetIndex))
        return {
          assetsMap: newAssets
        }
      })
    } else {
      // toast提示
      console.log(deletedAsset.message)
    }
  }
  render() {
    const {
      currentTabId,
      assetsMap,
      completed,
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
