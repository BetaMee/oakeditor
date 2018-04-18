import React from 'react'
import { DropTarget } from 'react-dnd'

import Wrapper from '../../common/components/Wrapper'

const DragDropWrapper = Wrapper.extend`
	flex-wrap: wrap;
	align-content: flex-start;
`

const dragDropStyle = {
	height: '100%',
	width: '100%',
	boxSizing: 'border-box',
	padding: '10px 10px',
}

const zoneTarget = {
	drop(props, monitor) {
		if (props.onDrop) {
			props.onDrop(props, monitor)
		}
	},
}

const DragDropZone = ({ connectDropTarget, isOver, canDrop, children}) => connectDropTarget(
	<div style={dragDropStyle}>
		<DragDropWrapper
			layout='rowLeft'
		>
			{children}
		</DragDropWrapper>
	</div>
)

export default DropTarget(props => props.accepts, zoneTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop(),
}))(DragDropZone)
