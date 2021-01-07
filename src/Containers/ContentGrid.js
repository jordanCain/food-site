import React from 'react';
import Grid from '@material-ui/core/Grid';

import ContentGridCard from '../Components/GridCard';
import { content } from '../content';

const ContentGrid = () => {
  let cards = [];
  for(let i=0; i<content.length; i+=3) {
    cards.push(
      <Grid container spacing={3} style={{padding: '10px'}} key={i}>
        <ContentGridCard content={content[i]} key={i}/>
        <ContentGridCard content={content[i+1]} key={i+1}/>
        <ContentGridCard content={content[i+2]} key={i+2}/>
      </Grid>
    )
  }
  return (
    <div style={{margin: 'auto', paddingTop: '74px', width: '70%'}}>
      <Grid container spacing={3}>
        {cards}
      </Grid>
    </div>
  )
}
export default ContentGrid;