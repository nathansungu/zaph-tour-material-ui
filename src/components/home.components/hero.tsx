 import { Stack, Box, Container, Typography } from "@mui/material";
const HandleHeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/antelops.jpg)",
        m: 0.2,
        height: "35rem",
        padding: 0,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: 0.4,
      }}
    >
      <Container sx={{ height: "100%" }}>
        <Stack
          alignItems="center"
          textTransform="capitalize"
          justifyContent="center"
          textAlign="center"
          color="white"
          height="100%"
        >
          <Typography fontSize="2.5rem" fontWeight="700">
            best safaris and adventures
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default HandleHeroSection;