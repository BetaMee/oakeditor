import React, { Component } from 'react'
import Loadable from 'react-loadable';
// 布局组件
import Wrapper from '../common/components/Wrapper'
// 其他组件
import Loading from '../common/components/Loading'

const LoadableImageExplorer = Loadable({
  loader: () => import('./explorer/ImageExplorer'),
  loading: Loading,
  delay: 1000,
});

const LoadableFileExplorer = Loadable({
  loader: () => import('./explorer/FileExplorer'),
  loading: Loading,
  delay: 1000,  
});

const LoadableAudioExplorer = Loadable({
  loader: () => import('./explorer/AudioExplorer'),
  loading: Loading,
  delay: 1000,  
});

const LoadableVideoExplorer = Loadable({
  loader: () => import('./explorer/VideoExplorer'),
  loading: Loading,
  delay: 1000,  
});

const Explorer = ({ currentTabId }) => {
  const strategies = {
    '0': <LoadableImageExplorer />,
    '1': <LoadableFileExplorer />,
    '2': <LoadableAudioExplorer />,
    '3': <LoadableVideoExplorer />
  }
  return (
  <Wrapper>
      {strategies[currentTabId]}
  </Wrapper>)
}
  

export default Explorer
