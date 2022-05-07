import Grid from "@mui/material/Grid";
import React from "react";

export default function FlexCenteredContainer(props) {
  return (
    <Grid container
          item
          spacing={2}
          sm={12}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
      {props.children}
    </Grid>
  )
}