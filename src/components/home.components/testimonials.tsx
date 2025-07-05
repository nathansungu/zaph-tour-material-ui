import {
  Stack,
  Typography,
  Grid,
  CardMedia,
  CardHeader,
  Card,
  CardContent,
  Rating,
} from "@mui/material";

const HandleTestimonials = () => {
  return (
    <>
      <Stack sx={{ alignItems: "center", justifyContent: "center", mt: 5 }}>
        <Stack>
          <Typography sx={{ textAlign: "center", m: 2 }} variant="h4">
            Testimonials
          </Typography>
        </Stack>
        <Grid container spacing={2} columns={12}>
          <Grid spacing={2} size={{ xs: 12, sm: 6, md: 6 }}>
            <Card sx={{ width: "100%", height: "25rem" }}>
              <CardMedia
                component="img"
                height="180"
                image="https://media.istockphoto.com/id/1597406578/photo/happy-woman-sightseeing-in-london.webp?a=1&b=1&s=612x612&w=0&k=20&c=P-eMXpOs3zC0MNGNAoLMceXiHZkhjDmzYEH30Z4qpPQ="
                alt="testimonial"
              />
              <CardHeader> James Kimani</CardHeader>
              <CardContent>
                My Zaph vacation was life time experiences
              </CardContent>
              <CardContent>
                <Rating value={5} name="rating-t" readOnly sx={{ mt: 0.5 }} />
              </CardContent>
            </Card>
          </Grid>

          <Grid spacing={2} size={{ xs: 12, sm: 6, md: 6 }}>
            <Card sx={{ width: "100%", height: "25rem" }}>
              <CardMedia
                component="img"
                height="180"
                image="https://time.ly/wp-content/uploads/2023/03/attract-tourists-destinations.jpg"
                alt="testimonial"
              />
              <CardHeader> James Kimani</CardHeader>
              <CardContent>
                Zaph toures are the best ever in the field.{" "}
              </CardContent>
              <CardContent>
                <Rating value={5} name="rating-t" readOnly sx={{ mt: 0.5 }} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default HandleTestimonials;
