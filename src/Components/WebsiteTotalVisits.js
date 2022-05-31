import React, {useState} from "react";
import {domainVisitsDataByDays} from "../API/APIs";
import ApiCaller from "../API/APICaller";
import CardHeader from "@mui/material/CardHeader";
import Card from "@mui/material/Card";
import {LoadingCardWithSpinning} from "./LoadingDisplays";
import {Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

export const DAYS_OPTIONS = [7, 30, 180];

export function WebsiteTotalVisits({domain}) {
  const [daysOption, setDaysOption] = useState(0);
  const [URL, setURL] = useState(domainVisitsDataByDays(domain, DAYS_OPTIONS[daysOption]));

  const handleDaysToBeDisplayChange = () => {
    if(daysOption === DAYS_OPTIONS.length - 1){
      setDaysOption(0);
    }else{
      setDaysOption(daysOption + 1);
    }

    setURL(domainVisitsDataByDays(domain, DAYS_OPTIONS[(daysOption+1)%(DAYS_OPTIONS.length)]));
  }

  function dataDisplayFunction(items) {
    let totalVisits = 0;
    items.forEach(item => {
      totalVisits += item['websiteVisitCount'];
    })

    return (
      <Link
        sx={{
          textDecoration: 'unset',
          cursor: 'pointer'
        }}
        onClick={handleDaysToBeDisplayChange}>
        <Card sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          minHeight: 170
        }}>
          <CardHeader title={"Total Visits"} subheader={`In ${DAYS_OPTIONS[daysOption]} days`}/>
          <Grid item>
            <Typography variant={"h2"} component={"h2"}>
              {totalVisits}
            </Typography>
          </Grid>
        </Card>
      </Link>
    )
  }

  return ApiCaller(URL, dataDisplayFunction, LoadingCardWithSpinning);
}