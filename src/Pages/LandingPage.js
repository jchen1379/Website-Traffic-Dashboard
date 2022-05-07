import React from "react";
import {LandingWebsiteVisitsView} from "../Components/WebsiteVisitsView";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DashboardPage from "./DashboardPage";

export default function LandingPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingWebsiteVisitsView/>}/>
        <Route path='/dashboard/:domain' element={<DashboardPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}