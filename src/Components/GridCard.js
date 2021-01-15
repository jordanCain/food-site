import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import firebase from 'firebase';

const ContentGridCard = props => {
  const {content, handleCardSelect} = props;
  if(content){
    return(
      <Grid item xs={4}>
        <Card>
          <CardHeader title={content.name} onClick={() => {handleCardSelect(content.id)}}/>
          <CardContent>
            <img 
              style={{maxHeight: '295px', width: '100%', objectFit: 'cover'}} 
              src={content.image} 
              onClick={() => {handleCardSelect(content.id)}}
              alt=""/>
            <div style={{display: 'flex'}}>
              <div
                onClick={() => {handleCardSelect(content.id)}} 
                style={{paddingTop: '12px'}}>
                  {content.description}
              </div>
              <LikeButton contentId={content.id} />
            </div>
          </CardContent>
        </Card>
      </Grid>
    )
  }
  return(<div/>)
}
export default ContentGridCard;

const LikeButton = props => {
  const {contentId} = props;
  const addLike = () => {
    firebase.database().ref('content-likes').push().set({[contentId]: getLikes() || 0 + 1})
      .then(() => {
        return;
      }, error => {
        console.log('error' + error);
      });
  }
  const getLikes = () => {
    firebase.database().ref('content-likes').get()
      .then(snapshot => {
        return snapshot.filter(content => {
          return content === contentId;
        })
      }, error => {
        console.log('error' + error);
      });
  }

  return (
    <IconButton onClick={addLike} style={{marginRight: 0, marginLeft: 'auto'}}> 
      <ThumbUpIcon/>
    </IconButton>
  )
}


const Likes = props => {
  const { contentId } = props;
  const [data, setData] = useState([]);
  const getLikes = e => {
    firebase.database().ref('content-likes').get()
      .then(snapshot => {
        let testy = [];
        snapshot.forEach(each => {
          testy.push(each.val())
        });
        setData(testy);
      }, error => {
        console.log('error' + error);
      });
  }
  return (
    <React.Fragment>
      <p onClick={getLikes(contentId)}>click me</p>
      <p>
        {data.map(d => {return (d.test)})}
      </p>
    </React.Fragment>
  )
}