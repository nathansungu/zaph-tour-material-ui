import {
  Box,
  Button,
  Drawer,
  List,
  Divider,
  ListItem,
  
} from "@mui/material";
import { Link } from "react-router-dom";

import {MenuSharp} from '@mui/icons-material';

import React from "react";

function HandleDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (inOpen: boolean) => () => {
    setOpen(inOpen);
  };

  return (
    <Box sx={{ display: "flex", zIndex:20}}>
      <Button variant="outlined" sx={{width:"2rem"}}onClick={toggleDrawer(true)}>
       <MenuSharp/>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          
          <Divider />
          <List>
            {[
              { name: "home", link: "/" },
              { name: "Destination", link: "/destinations" },
              { name: "Trips", link: "/trips" },
              { name: "Contacts", link:"/contacts" },
            ].map((dst, ind) => (
              <ListItem key={ind}>
                <Button component={Link} to={dst.link}>
                  {dst.name}
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default HandleDrawer;
