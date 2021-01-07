import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Header = props => {
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        Jordan's food
      </Toolbar>
    </AppBar>
  );
}
export default Header;