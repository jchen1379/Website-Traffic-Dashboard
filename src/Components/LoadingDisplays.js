import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

export function LoadingCardWithSpinning(){
  return (
    <Grid item>
      <Card sx={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <CircularProgress color={"secondary"} sx={{mt: 20, mb: 20}}/>
      </Card>
    </Grid>
  )
}