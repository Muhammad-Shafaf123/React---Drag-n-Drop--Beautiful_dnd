import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components'

const Container = styled.div`
	border: 1px solid lightgrey;
	border-radius: 2px;
	padding : 11px;
	margin-botton : 8px;
	background-color : ${props => props.isDragging ? 'lightgreen' : 'white'};

	display : flex;
`;


export default class Task extends React.Component {
	render(){
		return (
			<Draggable draggableId={this.props.task.id} index={this.props.index}>
				{(provided, snapshot) => (
					<Container
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
						isDragging= {snapshot.isDragging}
				 >
						{this.props.task.content}
					</Container>
				)}
			</Draggable>
		);
	}
}
