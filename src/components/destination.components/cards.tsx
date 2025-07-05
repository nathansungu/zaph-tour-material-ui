import { Favorite } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import destinations from "../../data/destinations";
import { Link } from "react-router-dom";

const HandleCards = () => {
  return (
    <>
      <Grid container spacing={2}>
        {destinations.map((dst) => {
          return (
            <Grid size={{ xs: 12, md: 4, sm: 6 }}>
              <Card sx={{ margin: 2, height: "28rem" }}>
                <CardMedia
                  component="img"
                  src={dst.image}
                  height="180"
                  alt={dst.name}
                />
                <Stack sx={{ p: ".5rem" }}>
                  <CardContent>
                    <Stack sx={{ fontSize: "2" }}>
                      <Typography fontSize="2rem">{dst.name}</Typography>
                      <Typography sx={{ mt: "1.5" }}>
                        {dst.description}
                      </Typography>
                      <Stack
                        textTransform="capitalize"
                        direction="row"
                        sx={{ gap: "1rem", mt: ".5rem" }}
                      >
                        <Stack direction="row" gap={2}>
                          <Typography>solo trip: {"  "}</Typography>
                          
                          <Typography color="red">{dst.price}</Typography>
                        </Stack>
                        <Stack direction="row"gap={2}>
                          <Typography>group of 10: {"  "}</Typography>
                          
                          <Typography color="red">{dst.priceFor10}</Typography>
                        </Stack>
                        
                      </Stack>
                    </Stack>
                  </CardContent>
                  <CardActions>
                    <Stack direction="row" alignItems="center" gap="50%">
                      <Button
                        variant="outlined"
                        size="large"
                        component={Link}
                        to="https://www.tsavopark.com/"
                        sx={{ fontSize: "1rem", textTransform: "capitalize" }}
                      >
                        book now
                      </Button>
                      {/* <IconButton>
                        <Favorite />
                      </IconButton> */}
                    </Stack>
                  </CardActions>
                </Stack>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default HandleCards;
