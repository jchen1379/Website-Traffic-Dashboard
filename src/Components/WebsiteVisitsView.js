import React, {useState} from "react";
import {LandingPageLineChart, DashboardPageLineChart} from "./LineCharts";
import ApiCaller from "../API/APICaller";
import {domainsVisitsDataByDays, domainVisitsDataByDays} from "../API/APIs";
import CardHeader from "@mui/material/CardHeader";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import {ToggleButton} from "@mui/material";
import Card from "@mui/material/Card";
import {LoadingCardWithSpinning} from "./LoadingDisplays";
import Grid from "@mui/material/Grid";
import {DAYS_OPTIONS} from "./WebsiteTotalVisits";

export function LandingWebsiteVisitsView() {
  function dataDisplayFunction(items) {
    return (
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{minHeight: '100vh'}}
        sx={{background: "linear-gradient(to right bottom, #7F7FD5, #86A8E7, #91EAE4)"}}
      >
        {Object.keys(items).map(item => (
      <LandingPageLineChart
        key={item}
        domainName={item}
        data={items[item]}/>
    ))}
      </Grid>
    )
  }

  return ApiCaller(domainsVisitsDataByDays(14), dataDisplayFunction, null, true);
}

export function DashboardWebsiteVisitsView({domain}) {
  const [daysToBeDisplay, setDaysToBeDisplay] = useState(DAYS_OPTIONS[0]);
  const [URL, setURL] = useState(domainVisitsDataByDays(domain, daysToBeDisplay));

  const handleDaysToBeDisplayChange = (event, newDays) => {
    if (newDays !== null) {
      setDaysToBeDisplay(newDays);
      setURL(domainVisitsDataByDays(domain, newDays));
    }
  }

  function dataDisplayFunction(items) {
    return (
      <Card>
        <CardHeader title={`${domain.slice(0, -1).toUpperCase()}.COM`} titleTypographyProps={{variant:'h5'}}/>
        <ToggleButtonGroup
          color="primary"
          value={daysToBeDisplay}
          exclusive
          onChange={handleDaysToBeDisplayChange}
          sx={{ml: 2}}>
          {
            daysOptions.map(day => (
              <ToggleButton value={day}>{day} Days</ToggleButton>
            ))
          }
        </ToggleButtonGroup>
        <DashboardPageLineChart data={items}/>
      </Card>
    )
  }

  return ApiCaller(URL, dataDisplayFunction, LoadingCardWithSpinning);
}
