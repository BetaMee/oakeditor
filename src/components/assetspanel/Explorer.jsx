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
    fileData,
    uploadFile,
    loadFile,
    updateFile,
    deleteFile
  } = props
  return (
    <Wrapper>
      {
        currentTabId === 0 &&
          <LoadableImageExplorer
            panelRef={panelRef}
            uploadFile={uploadFile}
            loadFile={loadFile}
            updateFile={updateFile}
            deleteFile={deleteFile}
          />
      }
      {
        currentTabId === 1 &&
          <LoadableFileExplorer
            panelRef={panelRef}          
            uploadFile={uploadFile}
            loadFile={loadFile}
            updateFile={updateFile}
            deleteFile={deleteFile}
          />
      }
      {
        currentTabId === 2 &&
          <LoadableAudioExplorer
            panelRef={panelRef}          
            uploadFile={uploadFile}
            loadFile={loadFile}
            updateFile={updateFile}
            deleteFile={deleteFile}
          />
      }
      {
        currentTabId === 3 &&
          <LoadableVideoExplorer
            panelRef={panelRef}          
            uploadFile={uploadFile}
            loadFile={loadFile}
            updateFile={updateFile}
            deleteFile={deleteFile}
          />
      }
    </Wrapper>
  )
}
  
export default Explorer
