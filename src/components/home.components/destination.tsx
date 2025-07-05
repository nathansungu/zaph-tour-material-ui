 import { Typography,Box, Grid,CardMedia, CardHeader, CardContent, Card , Rating} from "@mui/material";
 import destinations from "../../data/destinations";
const HandleDestination = () => {
  return (
    <>
      <Box sx={{ mt: 4, px: 2 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          mb={4}
          textTransform="capitalize"
        >
          Featured Destinations
        </Typography>

        <Grid container spacing={2} columns={12}>
          {destinations.map((dst, index) => (
            <Grid spacing={2} size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card sx={{ height: "25rem", boxShadow: 2 }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={dst.image}
                  alt={dst.name}
                />
                <CardHeader
                  title={
                    <Typography variant="h6" fontWeight="bold">
                      {dst.name}
                    </Typography>
                  }
                  sx={{ pb: 0 }}
                />
                <CardContent>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {dst.description}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontWeight="h6"
                    color="primary"
                  >
                    {dst.price}
                  </Typography>
                  <Rating
                    name="read-only"
                    value={dst.rating}
                    readOnly
                    sx={{ mt: 0.5 }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default HandleDestination;