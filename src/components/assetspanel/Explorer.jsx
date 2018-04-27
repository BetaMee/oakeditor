import React from 'react'
import Loadable from 'react-loadable';
// 布局组件
import Wrapper from '../common/components/Wrapper'
// 其他组件
import ImageExplorer from './explorer/ImageExplorer'
import FileExplorer from './explorer/FileExplorer'
import AudioExplorer from './explorer/AudioExplorer'
import VideoExplorer from './explorer/VideoExplorer'

const Explorer = (props) => {
  const {
    isShowDataLoading,
    maskShowKey,
    currentTabId,
    panelRef,
    assetsMap,
    uploadAsset,
    loadAssets,
    updateAsset,
    deleteAsset
  } = props
  return (
    <Wrapper
      wOverFlow='auto'
    >
      {
        currentTabId === 0 &&
          <ImageExplorer
            isShowDataLoading={isShowDataLoading}
            panelRef={panelRef}
            maskShowKey={maskShowKey}
            assets={assetsMap.get('image')}
            uploadAsset={uploadAsset}
            loadAssets={loadAssets}
            updateAsset={updateAsset}
            deleteAsset={deleteAsset}
          />
      }
      {
        currentTabId === 1 &&
          <FileExplorer
            isShowDataLoading={isShowDataLoading}
            panelRef={panelRef}
            maskShowKey={maskShowKey}
            assets={assetsMap.get('file')}
            uploadAsset={uploadAsset}
            loadAssets={loadAssets}
            updateAsset={updateAsset}
            deleteAsset={deleteAsset}
          />
      }
      {
        currentTabId === 2 &&
          <AudioExplorer
            isShowDataLoading={isShowDataLoading}
            panelRef={panelRef}
            maskShowKey={maskShowKey}
            assets={assetsMap.get('audio')}
            uploadAsset={uploadAsset}
            loadAssets={loadAssets}
            updateAsset={updateAsset}
            deleteAsset={deleteAsset}
          />
      }
      {
        currentTabId === 3 &&
          <VideoExplorer
            isShowDataLoading={isShowDataLoading}
            panelRef={panelRef}
            maskShowKey={maskShowKey}
            assets={assetsMap.get('video')}
            uploadAsset={uploadAsset}
            loadAssets={loadAssets}
            updateAsset={updateAsset}
            deleteAsset={deleteAsset}
          />
      }
    </Wrapper>
  )
}
  
export default Explorer
