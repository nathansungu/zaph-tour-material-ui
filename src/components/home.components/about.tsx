import {
  Card,
  CardHeader,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Grid,
} from "@mui/material";
import { Favorite, Share } from "@mui/icons-material";
const HandleAbout = () => {
  return (
    <Grid sx={{ m: 0.3 }}>
      <Card elevation={3}>
        <CardHeader
          title={
            <Typography
              variant="h5"
              fontWeight="bold"
              textTransform="capitalize"
              textAlign="center"
            >
              about us
            </Typography>
          }
          sx={{ backgroundColor: "#f5f5f5" }}
        />
        <Grid
          container
          spacing={2}
          sx={{ alignItems: "center", justifyContent: "center"}}
        >
          <Grid size={{ xs: 10, md: 6, xl: 4 }}>
            <CardMedia
              component="img"
              image="/hero.jpg"
              height="270"
              sx={{ borderRadius: "2px", padding: "1.5rem" }}
            />
          </Grid>
          <Grid
            size={{ xs: 10, md: 6, xl: 8 }}
          >
            <CardContent sx={{pl:"6rem"}}>
              <Typography
                variant="body1"
                sx={{ width: "80%", textAlign: "center" }}
              >
                Zaph Tours is a top-rated travel company based in Kenya, known
                for crafting unforgettable safari and adventure experiences.
                They specialize in showcasing the stunning landscapes, rich
                wildlife, and diverse cultures of Kenya and beyond through
                carefully curated travel packages.
              </Typography>
              <CardActions sx={{alignItems:"center", justifyContent:"center", pt:"2rem"}}>
                <IconButton
                  aria-label="add to favorites"
                  sx={{ color: "success" }}
                >
                  <Favorite />
                </IconButton>
                <IconButton aria-label="share">
                  <Share />
                </IconButton>
              </CardActions>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default HandleAbout;
