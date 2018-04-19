import React from 'react'
import styled from 'styled-components'
// 布局组件
import Wrapper from '../../common/components/Wrapper'
import Input from '../../common/components/Input'
import IconWrapper from '../../common/components/IconWrapper'
import SVGIcon from '../../common/components/SVGIcon'

const CardWrapper = Wrapper.extend `
  position: absolute;
  top: 10%;
  width: 90%;
  height: 70%;
  background-color: #FAFAFA;
  left: 5%;
  right: 5%;
  border-radius: 4px;
  z-index: 999999;
  box-shadow: 0 5px 12px rgba(0,0,0,0.2), 0 7px 15px 1px rgba(0,0,0,0.09);  
`

const TitleWrapper = Wrapper.extend`
  position: relative;
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
`
const CardTitle = styled.p`
  color: #b9b9b9;
  font-size: 14px;
`
const CardControl = styled.span`
  position: absolute;
  right: 5%;
  color: #42A5F5;
  cursor: pointer;
  font-size: 14px;  
  &:hover {
    color: #1E88E5;
  }
`

const ContentWrapper = Wrapper.extend`
  height: 48%;
  width: 100%;
  background-color: #F5F5F5;
`

const CardContent = styled.img`
  height: 88%;
  width: auto;
  object-fit: cover;
  border-radius: 4px;
`

const EditWrapper = Wrapper.extend`
  position: relative;
  height: 33%;
  padding-left: 15%;
`

const InputWrapper = Wrapper.extend`
  height: 30%;
`

const EditName = styled.span`
  font-size: 14px;
  color: #757575;
  width: 50px;
`

const ContentSize = EditName.extend`
  margin-left: 6px;
`

const CardEdit = Input.extend`
  border-bottom: 1px solid #b9b9b9;
  padding: 0px;
  margin: 0 6px;
  font-size: 16px;
  width: 65%;
  color: #757575;
`

const UpdateWrapper = Wrapper.extend`
  height: 35px;
  width: 35px;
  position: absolute;
  bottom: 3%;
  right: 5%;
  fill: #42A5F5;
  ${'' /* stroke: #42A5F5; */}
  cursor: pointer;  
  &:hover{
    fill: #1E88E5;
    ${'' /* stroke: #1E88E5; */}
  }
`

const DetailCard = ({ hideCard }) =>
  <React.Fragment>
    {/* 详情主体 */}
    <CardWrapper
      layout='columnTop'
    >
      {/* 头部 */}
      <TitleWrapper
        wHeight='10%'
      >
        <CardTitle>File Name</CardTitle>
        <CardControl
          onClick={hideCard}
        >Done</CardControl>
      </TitleWrapper>
      {/* 展示 */}
      <ContentWrapper>
          <CardContent src='https://avatars0.githubusercontent.com/u/30206305?s=460&v=4'/>
      </ContentWrapper>
      {/* 编辑 */}
      <EditWrapper
        layout='columnCenter'
      >
        <InputWrapper
          layout='rowLeft'
        >
          <EditName>文件名:</EditName>
          <CardEdit />
        </InputWrapper>
        <InputWrapper
          layout='rowLeft'
        >
          <EditName>描述:</EditName>
          <CardEdit />
        </InputWrapper>
        <InputWrapper
          layout='rowLeft'
        >
          <EditName>尺寸:</EditName>
          <ContentSize>100M</ContentSize>
        </InputWrapper>
      </EditWrapper>
      <UpdateWrapper>
        <SVGIcon name='CloudDone' size={32} />
      </UpdateWrapper>
    </CardWrapper>
    {/* 背景模态 */}
    <Modal
      onClick={hideCard}
    />
  </React.Fragment>

export default DetailCard
