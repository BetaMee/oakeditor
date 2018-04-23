import React from 'react'
import Loadable from 'react-loadable';
// 布局组件
import Wrapper from '../common/components/Wrapper'
// 其他组件
import Loading from '../common/components/Loading'

const LoadableImageExplorer = Loadable({
  loader: () => import('./explorer/ImageExplorer'),
  loading: Loading,
  delay: 1000
})

const LoadableFileExplorer = Loadable({
  loader: () => import('./explorer/FileExplorer'),
  loading: Loading,
  delay: 1000
})

const LoadableAudioExplorer = Loadable({
  loader: () => import('./explorer/AudioExplorer'),
  loading: Loading,
  delay: 1000
})

const LoadableVideoExplorer = Loadable({
  loader: () => import('./explorer/VideoExplorer'),
  loading: Loading,
  delay: 1000
})

const Explorer = (props) => {
  const {
    currentTabId,
    panelRef,
    assets,
    uploadAsset,
    loadAssets,
    updateAsset,
    deleteAsset
  } = props
  return (
    <Wrapper>
      {
        currentTabId === 0 &&
          <LoadableImageExplorer
            panelRef={panelRef}
            assets={assets.get('image')}
            uploadAsset={uploadAsset}
            loadAssets={loadAssets}
            updateAsset={updateAsset}
            deleteAsset={deleteAsset}
          />
      }
      {
        currentTabId === 1 &&
          <LoadableFileExplorer
            panelRef={panelRef}
            assets={assets.get('file')}
            uploadAsset={uploadAsset}
            loadAssets={loadAssets}
            updateAsset={updateAsset}
            deleteAsset={deleteAsset}
          />
      }
      {
        currentTabId === 2 &&
          <LoadableAudioExplorer
            panelRef={panelRef}
            assets={assets.get('audio')}
            uploadAsset={uploadAsset}
            loadAssets={loadAssets}
            updateAsset={updateAsset}
            deleteAsset={deleteAsset}
          />
      }
      {
        currentTabId === 3 &&
          <LoadableVideoExplorer
            panelRef={panelRef} 
            assets={assets.get('video')}
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
