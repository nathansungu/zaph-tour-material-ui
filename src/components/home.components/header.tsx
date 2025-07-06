import { Stack, Box, Typography } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
const HandleHeader = () => {
  return (
    <Box
      component="section"
      sx={{
        p: 0,
        m: 0,
        backgroundColor: "primary.light",
        color: "white",
        display: { xs: "none", sm: "none", md: "block" },
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
      >
        <Stack direction="row" gap={1} alignItems="center">
          <Email sx={{ color: "white", fontSize: "1.5rem" }} />
          <Typography sx={{ fontSize: "1rem" }}>zaphus@gmail.com</Typography>
        </Stack>

        <Stack direction="row" gap={1} alignItems="center">
          <LocationOn sx={{ color: "white", fontSize: "1.5rem" }} />
          <Typography sx={{ fontSize: "1rem" }}>Nairobi, Kenya</Typography>
        </Stack>

        <Stack direction="row" gap={1} alignItems="center">
          <Phone sx={{ color: "white", fontSize: "1.5rem" }} />
          <Typography sx={{ fontSize: "1rem" }}>+254 712 345678</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HandleHeader;
