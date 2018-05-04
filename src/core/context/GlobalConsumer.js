import React from 'react'
import GlobalContext from './GlobalContext'

const GlobalConsumer = WrapperComponent => (props) =>
  <GlobalContext.Consumer>
  {({ data, action }) => (
    <WrapperComponent
      {...props}
      contextData={data}
      contextAction={action}
    />
  )}
  </GlobalContext.Consumer>

export default GlobalConsumer
