import React from 'react';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {HOME_PAGE, CAROUSEL_PAGE} from '../App';

const Header = props => {
  const {setPage} = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPage(newValue);
  };

  return (
    <Paper>
      <div style={{display: 'flex'}}>
        <div style={{margin: 'auto'}}>
          <HeaderTab title="Home" onClick={e => handleChange(e, HOME_PAGE)} />
          <HeaderTab title="Carousel" onClick={e => handleChange(e, CAROUSEL_PAGE)} />
        </div>
        <div style={{float: 'right'}}> 
          <IconButton>
            <AccountCircleIcon/> 
          </IconButton>
        </div>
      </div>
    </Paper>
  );
}
export default Header;

const HeaderTab = props => {
  const {title, onClick} = props;
  return(
    <div 
      onClick={onClick}
      style={{display: 'inline', padding: '12px', margin: '0px 10px', cursor: 'pointer'}}
    >
      {title}
    </div>
  )
}