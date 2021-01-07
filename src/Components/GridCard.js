import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import firebase from 'firebase';

const ContentGridCard = props => {
  const {content} = props;
  if(content){
    return(
      <Grid item xs={4}>
        <Card>
          <CardHeader title={content.name}></CardHeader>
          <CardContent>
            <img style={{maxHeight: '295px', width: '100%', objectFit: 'cover'}} src={content.image} alt=""/>
            <div>
              {content.description}
              <TestButton/>
              <TestDatabaseSum/>
            </div>
          </CardContent>
        </Card>
      </Grid>
    )
  }
  return(<div/>)
}
export default ContentGridCard;

const TestButton = props => {
  const testDatabase = e => {
    firebase.database().ref('test').push().set({test: 'hello world'})
      .then(snapshot => {
        console.log('success');
      }, error => {
        console.log('error' + error);
      });
  }

  return (
    <React.Fragment>
      <button onClick={testDatabase}>Try Me</button>
    </React.Fragment>
  )
}


const TestDatabaseSum = () => {
  const [data, setData] = useState([]);
  const testGetDatabase = e => {
    firebase.database().ref('test').get()
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
      <p onClick={testGetDatabase}>click me</p>
      <p>
        {data.map(d => {return (d.test)})}
      </p>
    </React.Fragment>
  )
}