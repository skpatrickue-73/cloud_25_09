import React from "react";
import Button from "@mui/material/Button";
import {Box, Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton} from "@mui/material";

export default function App() {

const checked = [true]

function handleToggle() {
console.log("wurde geklickt")
}

  return (
    <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
      This Box renders as an HTML section element.
      <Button variant="contained">Hello World</Button>


<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={true}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    </Box>
  );
}
