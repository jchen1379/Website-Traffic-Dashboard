import React, {useEffect, useState} from "react";
import Backdrop from "@mui/material/Backdrop";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const LIVE_UPDATE_FREQ = 5; // every 5 seconds

export default function ApiCaller(URL, dataDisplay, loadingDisplay, liveUpdate) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(
        result => {
          setItems(result);
          setTimeout(() => {
            setIsLoaded(true);
          }, 300);
        },
        error => {
          setError(error);
          setIsLoaded(true);
        },
      );

    if(liveUpdate){
      setTimeout(()=>{
        setTime((new Date().getSeconds()).toString());
      }, 1000 * LIVE_UPDATE_FREQ);
    }

  }, [URL, time]);

  if (error) {
    return (
      <Backdrop open={true}>
        <Alert severity="error">Oops, Sometimes things happen...</Alert>
      </Backdrop>
    );
  } else if (!isLoaded) {
    if(loadingDisplay)
      return loadingDisplay()
    return (
      <Backdrop open={true}>
        <Box sx={{display: 'flex'}}>
          <CircularProgress color={"secondary"}/>
        </Box>
      </Backdrop>
    )
  } else {
    return dataDisplay(items);
  }
}