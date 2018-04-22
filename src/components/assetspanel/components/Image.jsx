import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import styled from 'styled-components'
import { DragSource, DropTarget } from 'react-dnd'
import flow from 'lodash/flow'

import Wrapper from '../../common/components/Wrapper'
import SVGIcon from '../../common/components/SVGIcon'
import SVGIconWrapper from '../../common/components/SVGIconWrapper'
import ItemTypes from './ItemTypes'
import ImageCard from './ImageCard'

import { CircleToast } from '../../common/components/Toast/'

const LinkWrapper = Wrapper.extend`
	margin: 4px 0;
	padding: 0 4px;
	justify-content: space-between;
`

const Link = styled.a`
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
	color: #9E9E9E;
	overflow: hidden;
	text-overflow: ellipsis;
	&:hover {
		color: #424242;
	}
`

const Size = styled.div`
	height: 16px;
	width: 100%;
	font-size: 12px;
	padding-left: 4px;
	color: #dadada;
`

const imageStyle = {
	width: '33.333%',
	height: '180px',
	padding: '4px',
	boxSizing: 'border-box',
}

const ImageWrapper = Wrapper.extend`
	margin-bottom: 2px;
	border-radius: 4px;
	background-color: #FFFFFF;
  box-shadow: 0 4px 6px rgba(0,0,0,0.02), 0 2px 6px 1px rgba(0,0,0,0.09);
	cursor: move;
`

const imageSource = {
	beginDrag(props) {
		console.log('beginDrag')
		return {
			id: props.id,
			index: props.index,
		}
	},
}

const imageTarget = {
	hover(props, monitor, component) {
		const dragIndex = monitor.getItem().index
		const hoverIndex = props.index
		// 如果被拖取的对象位置等于hover对象的位置
		if (dragIndex === hoverIndex) {
			return
		}
		// component不存在
		if (!component) {
			return
		}
		// 确定hoverDOM ClientRect
		const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()
		// 获取中间值
		const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2
		// 确定鼠标位置
		const clientOffset = monitor.getClientOffset()
		// Get pixels to the top
		const hoverClientX = clientOffset.X - hoverBoundingRect.left
		// Dragging downwards
		if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
			return
		}
		// Dragging upwards
		if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
			return
		}
		// 如果满足可以移动的条件，则进行移动
		props.moveCard(dragIndex, hoverIndex)
	},
}

class Image extends Component {
	render() {
		const {
			src,
			showCard,
			getLink,
			isDragging,
			connectDragSource,
			connectDropTarget,
			// config
		} = this.props
		const opacity = isDragging ? 0 : 1
		return connectDragSource(connectDropTarget(
			<div style={{...imageStyle, opacity}}>
				<ImageWrapper
					layout='columnTop'
				>
					{/* 图片 */}
					<ImageCard
						showCardDetail={showCard}
						src={src}
					/>
					{/* 说明 */}
					<LinkWrapper
						wHeight='24px'
					>
						<Link>http://xxx.jpg</Link>
						<SVGIconWrapper
							wSize={22}
							hoverColor='#424242'
							onClick={getLink}
						>
							<SVGIcon name='Link' size={18}/>
						</SVGIconWrapper>
					</LinkWrapper>
					<Size>1.5M</Size>
					<Wrapper
						layout='rowRight'
						wHeight='28px'
						padding='0 5px'
					>
						<SVGIconWrapper
							wSize={22}
							hoverColor='#424242'
							// onClick={config.deleteFile}
						>
							<SVGIcon name='Delete' size={18} />
						</SVGIconWrapper>
					</Wrapper>
				</ImageWrapper>
			</div>
		))
	}
}

export default flow(
	DropTarget(ItemTypes.IMAGE, imageTarget, connect => ({
		connectDropTarget: connect.dropTarget()
	})),
  DragSource(ItemTypes.IMAGE, imageSource, (connect, monitor) => ({
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}))
)(Image)
