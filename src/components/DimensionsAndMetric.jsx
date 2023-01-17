import React ,{useState} from 'react'
import {Container,ButtonContainer,ButtonWrapper} from '../styles/dimensionsAndMetric.style'
import {data} from './buttonData'
import Button from '@mui/material/Button';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const DimensionsAndMetric = () => {

    const [buttonData,setButtonData] = useState(data)

    const handleClick = (id) => {
        console.log('clicked',data[id -1].name);
    }

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(buttonData);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setButtonData(items); 
    }

  return (
    <Container>
        <h3>Dimensions and Metrics</h3>
        <ButtonWrapper>
            <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId='buttons'>
                {(provided) => (
                    <ButtonContainer {...provided.droppableProps} ref={provided.innerRef}>
                    {buttonData.map((button,index) => {
                        return <Draggable key={button.id} draggableId={button.id} index={index}>
                        {(provided) => (
                            <Button {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} onClick={() => handleClick(button.id)} variant="outlined" >{button.name}</Button>
                        )}
                        </Draggable> 
                    })}
                    {provided.placeholder}
                </ButtonContainer>
                )}
            </Droppable>
            </DragDropContext>
        <Button  variant="outlined" color='error'>Apply Changes</Button>
        </ButtonWrapper>
    </Container>
  )
}

export default DimensionsAndMetric