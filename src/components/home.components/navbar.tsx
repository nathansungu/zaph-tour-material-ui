import { Link } from "react-router-dom";
import { Box, Typography, Stack, Button } from "@mui/material";
import HandleDrawer from "./drawer";
const HandleNavbar = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "secondary",
        p: 1,
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" gap={1}>
          <Stack
            component="img"
            src="/logo.png"
            borderRadius="50%"
            height="4rem"
          />
          <Typography variant="h6" fontWeight="500">
            zaphus tours
          </Typography>
        </Stack>

        <Stack sx={{ display: { xs: "block", sm: "none", md: "none" } }}>
          <HandleDrawer />
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          width="70%"
          justifyContent="center"
          sx={{ display: { xs: "none", sm: "block", xl: "block" } }}
        >
          <Button
            component={Link}
            to="/"
            sx={{ fontSize: "1.5rem", textTransform: "capitalize" }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/destinations"
            sx={{ fontSize: "1.5rem", textTransform: "capitalize" }}
          >
            Destinations
          </Button>
          <Button
            component={Link}
            to="/trips"
            sx={{ fontSize: "1.5rem", textTransform: "capitalize" }}
          >
            Trips
          </Button>
          <Button
            component={Link}
            to="/contacts"
            sx={{ fontSize: "1.5rem", textTransform: "capitalize" }}
          >
            Contacts
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
export default HandleNavbar;
