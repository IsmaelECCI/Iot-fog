import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import DevicesIcon from '@mui/icons-material/Devices';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

export default function MainListItems({ setModule }) {
  return (
    <>
      <ListItem button onClick={() => setModule('home')}>
        <ListItemIcon><HomeIcon /></ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button onClick={() => setModule('devices')}>
        <ListItemIcon><DevicesIcon /></ListItemIcon>
        <ListItemText primary="Devices" />
      </ListItem>
      <ListItem button onClick={() => setModule('variables')}>
        <ListItemIcon><DeviceThermostatIcon/></ListItemIcon>
        <ListItemText primary="Variables" />
      </ListItem>
    </>
  );
}
