import { Link } from "react-router-dom";
import{
    Box,
    Typography,
    Stack,
    Button

} from "@mui/material"

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
        <Typography variant="h4" fontWeight="700">
          zaphus tours
        </Typography>
        <Stack direction="row" spacing={2} width="70%" justifyContent="center">
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