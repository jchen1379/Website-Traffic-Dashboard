import ApiCaller from "../API/APICaller";
import {domainProjectVisitsAll} from "../API/APIs";
import {LoadingCardWithSpinning} from "./LoadingDisplays";
import {DashboardPageBarChart} from "./BarCharts";
import React from "react";

export function ProjectVisitsView({domain}) {
  function dataDisplayFunction(items) {
    return <DashboardPageBarChart data={items}/>;
  }

  return ApiCaller(domainProjectVisitsAll(domain), dataDisplayFunction, LoadingCardWithSpinning);
}

