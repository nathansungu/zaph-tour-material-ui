import { CardMedia, Grid } from "@mui/material";
import trips from "../../data/triptypes";
import type { FC } from "react";

interface nameProp {
  name:string
}
const displayGallery = (name: string) => {
  const card = trips.filter((trip) => trip.title == name);
 
  return card[0].gallery?.map((img, ind) => (
    <Grid key={ind} size={{ xs: 12, sm: 6, xl: 4 }}>
      <CardMedia component="img" src={img} />
    </Grid>
  ));
};
const HandleGallery: FC<nameProp> = (Prop) => {
  return (
    <>
      <CardMedia>
        <Grid container spacing={2}>
          {displayGallery(Prop.name)}
        </Grid>
      </CardMedia>
    </>
  );
};

export default HandleGallery;
