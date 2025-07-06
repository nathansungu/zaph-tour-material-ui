import { Grid } from "@mui/material";

import trips from "../../data/triptypes";

// import gallery

import HandleTripsCard from "./tripscard";

const HandleTrips = () => {
  return (
    <Grid container spacing={2} sx={{mt:15}}>
      {trips.map((dst) => {
        return <HandleTripsCard dst={dst} />;
      })}
    </Grid>
  );
};

export default HandleTrips;
