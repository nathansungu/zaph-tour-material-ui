import { Stack, Card, CardHeader, Typography, CardMedia,CardContent, CardActions, IconButton,} from "@mui/material";
import { Favorite, Share } from "@mui/icons-material";
const HandleAbout = () => {
  return (
    <Stack sx={{ m: 0.3 }}>
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
        <Stack direction="row" alignItems="center">
          <CardMedia
            component="img"
            image="/hero.jpg"
            height="270"
            sx={{ borderRadius: "2px", width: "40%", padding: "1.5rem" }}
          />
          <CardContent>
            <Typography
              variant="body1"
              sx={{ width: "80%", textAlign: "center" }}
            >
              Zaph Tours is a top-rated travel company based in Kenya, known for
              crafting unforgettable safari and adventure experiences. They
              specialize in showcasing the stunning landscapes, rich wildlife,
              and diverse cultures of Kenya and beyond through carefully curated
              travel packages.
            </Typography>
            <CardActions disableSpacing>
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
        </Stack>
      </Card>
    </Stack>
  );
};

export default HandleAbout;