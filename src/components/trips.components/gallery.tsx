import { CardMedia, Grid } from "@mui/material";
import trips from "../../data/triptypes";

const HandleGallery = () => {
  return (
    <>
      <CardMedia>
        <Grid container spacing={2}>
          {trips.map(({ gallery }) => {
            return gallery?.map((dst) => {
              return (
                <>
                  <Grid size={{ xs: 12, sm: 6, xl: 4 }}>
                    <CardMedia component="img" src={dst} />
                  </Grid>
                </>
              );
            });
          })}
        </Grid>
      </CardMedia>
    </>
  );
};

export default HandleGallery;
