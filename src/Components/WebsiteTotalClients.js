import ApiCaller from "../API/APICaller";
import {domainTotalClients} from "../API/APIs";
import {LoadingCardWithSpinning} from "./LoadingDisplays";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";

export function WebsiteTotalClients({domain}) {
  function dataDisplayFunction(items) {
    return (
      <Card sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        minHeight: 170
      }}>
        <CardHeader title={"Total Clients"} />
        <Grid item>
          <Typography variant={"h2"} component={"h2"}>
            {items['totalClients']}
          </Typography>
        </Grid>
      </Card>
    )
  }

  return ApiCaller(domainTotalClients(domain), dataDisplayFunction, LoadingCardWithSpinning)
}