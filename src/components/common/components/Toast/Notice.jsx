import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Notice extends Component {
  static propTypes = {
    duration: PropTypes.number, // Notice显示时间
    content: PropTypes.any, // Notice显示的内容
    onClose: PropTypes.func // 显示结束回调
  }
  static defaultProps = {
    duration: 3000,
  }
  state = {
    shouldClose: false, // 是否开启关闭动画
  }
  componentDidMount () {
    if(this.props.duration > 0){
      this.closeTimer = setTimeout(() => {
        this.close();
      }, this.props.duration - 300) // 减掉消失动画300毫秒
    }
  }
  componentWillUnmount () {
    // 当有意外关闭的时候 清掉定时器
    this.clearCloseTimer()
  }
  clearCloseTimer () {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer)
      this.closeTimer = null
    }
  }
  close () {
    // 关闭的时候 应该先清掉倒数定时器
    // 然后开启过场动画
    // 等待动画结束 执行回调
    this.clearCloseTimer()
    const _this = this
    _this.setState({
      shouldClose: true
    })
    this.timer = setTimeout(()=>{
      if(this.props.onClose){
          this.props.onClose()
      }
      clearTimeout(_this.timer)
    }, 300);
  }
  render () {
    return (
      <React.Fragment>
        {this.props.content}
      </React.Fragment>
    )
  }
}

export default Notice
