import * as React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import { colors } from '@material-ui/core';
import { useEffect,useHistory } from 'react';

const useStyles= makeStyles({
    root:{
        width: 1500,
        position:"fixed",
        bottom:0,
        backgroundColor:"white",
        zIndex: 100,
    }
});

export default function SimpleBottomNavigation() {
  const classes= useStyles()
  const [value, setValue] = React.useState(0);
  const history = useHistory()
useEffect(()=>{
if(value === 0) history.push("/")
else if(value === 1) history.push("/movies")
else if(value === 2) history.push("/search")
},[value],history)
  return (
    
      <BottomNavigation
        
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        
        <BottomNavigationAction
        style={{color:"black"}}
        label="Trending" 
        icon={<WhatshotIcon />} />
        <BottomNavigationAction  style={{color:"black"}} label="Movie" icon={<MovieIcon />} />
        <BottomNavigationAction  style={{color:"black"}} label="Search" icon={<SearchIcon/>} />
      </BottomNavigation>
    
  );
}