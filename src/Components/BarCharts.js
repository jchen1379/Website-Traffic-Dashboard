import {merge} from "lodash";
import BarChartBaseOption from "./BarChartOption";
import Card from "@mui/material/Card";
import ReactApexChart from 'react-apexcharts';
import React from "react";
import {CardHeader} from "@mui/material";
import Grid from "@mui/material/Grid";

export function DashboardPageBarChart({data}) {
  const {chartOptions, chartData} = parseChartData(data);
  return (
    <Card>
      <Grid container direction={"column"}>
        <Grid item>
          <CardHeader title={"Project Total Visits"} titleTypographyProps={{variant:'h5'}}/>
        </Grid>
        <Grid item sx={{width: '90%', ml: '3.5%'}}>
          <ReactApexChart type="bar" options={chartOptions} series={chartData}/>
        </Grid>
      </Grid>
    </Card>
  )
}

function parseChartData(data) {
  const parsedRawData = parseRawData(data);

  const chartOptions = merge(BarChartBaseOption(), {
    xaxis: {
      categories: parsedRawData['projects']
    }
  })
  const chartData = [
    {
      name: 'Visits',
      data: parsedRawData['visits']
    }
  ];

  return {chartOptions, chartData};
}

function parseRawData(APIResult) {
  const projects = [];
  const visits = [];
  const whiteList = [
    'DESIGN',
    'ADVERTISING',
    'GRAPHIC-DESIGN',
    'PHOTOGRAPHY'
  ];

  Object.keys(APIResult['projectVisitCount']).forEach(project => {
    if (whiteList.indexOf(project) !== -1) {

    } else {
      projects.push(project);
      visits.push(APIResult['projectVisitCount'][project]);
    }
  })

  return {projects, visits};
}