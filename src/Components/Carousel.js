import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ArrowLeft from '@material-ui/icons/ArrowLeft'
import ArrowRight from '@material-ui/icons/ArrowRight'
import { content } from '../content';

const Carousel = ({startIndex = 0}) => {
    const [currentPictureId, setPictureId] = useState(startIndex);
    
  return(
    <Paper>
      <IconButton onClick={() => {setPictureId(currentPictureId-1)}}>
        <ArrowLeft/>
      </IconButton>
      <img style={{maxHeight: '500px', width: '50%', objectFit: 'cover'}} src={content[currentPictureId].image} alt=""/>
      <IconButton onClick={() => {setPictureId(currentPictureId+1)}}>
        <ArrowRight />
      </IconButton>
    </Paper>
  )
}
export default Carousel;