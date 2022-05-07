import React from "react";
import {useParams} from "react-router-dom";
import {DashboardWebsiteVisitsView} from "../Components/WebsiteVisitsView";
import Grid from "@mui/material/Grid";
import {WebsiteTotalVisits} from "../Components/WebsiteTotalVisits";
import {WebsiteTotalClients} from "../Components/WebsiteTotalClients";
import {ProjectVisitsView} from "../Components/ProjectVisitsView";
import FlexCenteredContainer from "../Layout/FlexCenteredContainer";
import FlexCenteredItemContainer from "../Layout/FlexCenteredItemContainer";
import NavigationBar from "../Components/NavigationBar";

export default function DashboardPage() {
  const params = useParams();
  const domain = params.domain;

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{minHeight: '100vh'}}
        sx={{background: "linear-gradient(to right bottom, #7F7FD5, #86A8E7, #91EAE4)", paddingBottom: 20}}
      >
        <NavigationBar/>
        <FlexCenteredContainer>
          <FlexCenteredItemContainer>
            <Grid item sm={12} md={12} lg={8} sx={{width: '100%'}}>
              <DashboardWebsiteVisitsView domain={domain}/>
            </Grid>
          </FlexCenteredItemContainer>

          <FlexCenteredItemContainer>
            <Grid item sm={12} md={12} lg={4} sx={{width: '100%'}}>
              <WebsiteTotalVisits domain={domain}/>
            </Grid>
            <Grid item sm={12} md={12} lg={4} sx={{width: '100%'}}>
              <WebsiteTotalClients domain={domain}/>
            </Grid>
          </FlexCenteredItemContainer>

          <FlexCenteredItemContainer>
            <Grid item sm={12} md={12} lg={8} sx={{width: '100%'}}>
              <ProjectVisitsView domain={domain}/>
            </Grid>
          </FlexCenteredItemContainer>
        </FlexCenteredContainer>
      </Grid>
    </>
  )
}