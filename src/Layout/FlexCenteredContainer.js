import Grid from "@mui/material/Grid";
import React from "react";

export default function FlexCenteredContainer(props) {
  return (
    <Grid container
          spacing={2}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            p: 2
          }}>
      {props.children}
    </Grid>
  )
}