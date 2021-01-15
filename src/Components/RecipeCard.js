import React, {useEffect, useRef} from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Carousel from "./Carousel";

const RecipeCard = props => {
  const { content } = props;
  const cardRef = useRef(null);
  console.log(content)

  useEffect(() => {
    console.log('useEffect')
    cardRef.current.scrollIntoView({alignToTop: true, behavior: 'smooth'});
  });

  return(
    <Grid item xs={12}>
      <Card ref={cardRef}>
        <CardHeader title={content.name} />
        <CardContent>
          <Grid>
            <Carousel startIndex={content.id} />
            {content.description}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}
export default RecipeCard;