import { Stack, Box, Container, Typography } from "@mui/material";
const HandleHeroSection = () => {
  return (
    <Box
      sx={{
        m: 0.2,
        height: "35rem",
        padding: 0,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: 0.4,
        position:"relative"
      }}
    >
      <video
        muted
        autoPlay
        loop
        style={{
          zIndex: -1,
          position: "absolute",
          top: 10,
          left: 0,
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/family.mp4" type="video/mp4" />
          Your browser does not support the video tag.
      </video>
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
