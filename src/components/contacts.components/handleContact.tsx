import { Call, Email } from "@mui/icons-material";
import {
  Stack,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Box,
} from "@mui/material";

const HandleHeader = () => {
  return (
    <Stack
      spacing={2}
      sx={{
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        pt: 4,
        direction: "column",
      }}
    >
      <Typography sx={{ fontSize: "2.5em", fontWeight: "bold" }}>
        Contact Us
      </Typography>
    </Stack>
  );
};

const HandleContactForm = () => {
  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid spacing={2} size={{ xs: 12, sm: 8, md: 8 }}>
        <Card elevation={3} sx={{ m: 2 }}>
          <CardContent>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2}>
                <TextField label="Email" variant="outlined" fullWidth />
                <TextField label="Phone" variant="outlined" fullWidth />
              </Stack>

              <TextField label="Name" variant="outlined" fullWidth />
              <TextField
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
              />
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid spacing={2} size={{ xs: 12, sm: 4, md: 4 }}>
        <Card elevation={3} sx={{ m: 2 }}>
          <CardContent>
            <Typography variant="h6">Our Newsletters</Typography>
            <Typography sx={{ mb: 2 }}>
              Subscribe to receive the latest news and updates.
            </Typography>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
            />
            <Button variant="contained" fullWidth>
              Submit
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

const HandleContactDetails = () => {
  return (
    <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Card sx={{ textAlign: "center", pt: 2 , height: "12rem"}}>
          <CardContent>
            <Typography fontSize="2rem">
              <Call />
            </Typography>
            <Typography variant="h6">(+254) 765 685 898</Typography>
            <Typography variant="body2" color="text.secondary">
              Reach us via phone during business hours.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Card sx={{ textAlign: "center", pt: 2 , height: "12rem"}}>
          <CardContent>
            <Typography fontSize="2rem">
              <Email />
            </Typography>
            <Typography variant="h6">zaphtours@gmail.com</Typography>
            <Typography variant="body2" color="text.secondary">
              Send us an email and we’ll respond shortly.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Card sx={{ textAlign: "center", pt: 2 , height: "12rem"}}>
          <CardContent>
            <Typography fontSize="2rem">
              <Email />
            </Typography>
            <Typography variant="h6">Afya Center, Nairob CBD</Typography>
            <Typography variant="body2" color="text.secondary">
              Come visit our office at the heart of Nairobi CBD.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

const HandleMapEmbed = () => {
  return (
    <Box sx={{ mt: 4, pl: 2 }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19801.062345830117!2d-0.1245720072701362!3d51.50332427257881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cca4f6b30f%3A0x7e51199b9604d9b6!2sLondon%20Eye!5e0!3m2!1sen!2ske!4v1689074182090!5m2!1sen!2ske"
        width="100%"
        height="400"
        style={{ border: 0 }}
        title="Google Maps - zaph offices"
      ></iframe>
    </Box>
  );
};

const HandleFooter = () => (
  <Box
    sx={{
      backgroundColor: "#1e3a44",
      color: "white",
      pt: 4,
      pl: 2,
      textAlign: "center",
      height: "5rem",
    }}
  >
    <Typography variant="body2">© 2025 codey - All Rights Reserved</Typography>
  </Box>
);

export {
  HandleFooter,
  HandleMapEmbed,
  HandleContactDetails,
  HandleContactForm,
  HandleHeader,
};
