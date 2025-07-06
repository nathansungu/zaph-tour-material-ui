import { Stack, Box, Typography } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
const HandleHeader = () => {
  return (
    <Box
      component="section"
      sx={{
        p: 0,
        m: 0,
        backgroundColor: "background.paper",
        color: "secondary",
        height:22,
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
      >
        <Stack direction="row" gap={1} alignItems="center">
          <Email sx={{ color: "primary", fontSize: "1.5rem" }} />
          <Typography sx={{ fontSize: "1rem" }}>zaphus@gmail.com</Typography>
        </Stack>

        <Stack direction="row" gap={1} alignItems="center" sx={{display: { xs: "none", sm: "none", md: 'flex' },}}>
          <LocationOn sx={{ color: "primary", fontSize: "1.5rem" }} />
          <Typography sx={{ fontSize: "1rem" }}>Nairobi, Kenya</Typography>
        </Stack>

        <Stack direction="row" gap={1} alignItems="center">
          <Phone sx={{ color: "primary", fontSize: "1.5rem" }} />
          <Typography sx={{ fontSize: "1rem" }}>+254 712 345678</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HandleHeader;
