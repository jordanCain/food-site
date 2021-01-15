import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ContentGridCard from '../Components/GridCard';
import { content } from '../content';
import RecipeCard from '../Components/RecipeCard';

const ContentGrid = () => {
  const [selectedCard, selectCard] = useState(null)
  const handleCardSelect = id => {
    selectCard(id);
  }

  const renderCards = () => {
    let cards = [];
    for(let i=0; i<content.length; i+=3) {
      if(selectedCard !== null && (selectedCard === i || selectedCard === i+1 || selectedCard === i+2)){
        cards.push(
          <Grid container spacing={3} style={{padding: '10px'}} key={i}>
            <RecipeCard content={content[selectedCard]}/>
          </Grid>
        );
      } else {
        cards.push(
          <Grid container spacing={3} style={{padding: '10px'}} key={i}>
            <ContentGridCard content={content[i]} handleCardSelect={handleCardSelect} key={i} />
            <ContentGridCard content={content[i+1]} handleCardSelect={handleCardSelect} key={i+1} />
            <ContentGridCard content={content[i+2]} handleCardSelect={handleCardSelect} key={i+2} />
          </Grid>
        );
      }
    }
    return cards;
  }

  return (
    <Grid container spacing={3}>
      {renderCards()}
    </Grid>
  )
}
export default ContentGrid;