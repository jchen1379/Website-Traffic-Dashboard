import Container from "@mui/material/Container";
import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import {merge} from 'lodash';
import ReactApexChart from 'react-apexcharts';
import LineChartBaseOption from "./LineChartOption";
import {Link} from "react-router-dom";

export function LandingPageLineChart({domainName, data}) {
  const {chartOptions, chartData} = parseChartData(data);
  return (
    <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
      <Card>
        <Link to={`dashboard/${domainName}`} style={{textDecoration: "unset"}}>
          <CardHeader title={`${domainName.slice(0, -1).toUpperCase()}.COM`} subheader="Bi-weekly Views"/>
        </Link>
        <Box sx={{p: 3, pb: 1}} dir="ltr">
          <ReactApexChart type="line" series={chartData} options={chartOptions} height={364}/>
        </Box>
      </Card>
    </Container>
  );
}

export function DashboardPageLineChart({data}) {
  const {chartOptions, chartData} = parseChartData(data);
  return (
    <Card>
      <Box dir="ltr">
        <ReactApexChart type="line" series={chartData} options={chartOptions} height={364}/>
      </Box>
    </Card>
  )
}

function parseChartData(dataArray) {
  const parsedRawData = parseRawData(dataArray);
  const chartOptions = merge(LineChartBaseOption(), {
    labels: parsedRawData['dates']
  });
  const chartData = [
    {
      name: 'Visits',
      type: 'area',
      data: parsedRawData['counts']
    }
  ];

  return {chartOptions, chartData}
}

function parseRawData(dataArray) {
  const dates = [];
  const counts = [];
  Object.values(dataArray).forEach((data) => {
    dates.push(data['_id']);
    counts.push(data['websiteVisitCount']);
  });

  return {dates, counts};
}
