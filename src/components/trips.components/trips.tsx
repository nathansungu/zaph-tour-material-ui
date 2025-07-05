import { Grid } from "@mui/material";

import trips from "../../data/triptypes";



// import gallery

import HandleTripsCard from "./tripscard";



const HandleTrips = () => {
  return (
    <Grid container spacing={2}>
      {trips.map((dst) => {
        return <HandleTripsCard {...dst}/>;
      })}
    </Grid>
  );
};

export default HandleTrips;
