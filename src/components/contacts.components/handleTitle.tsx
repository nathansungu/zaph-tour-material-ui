import { Stack, Typography } from "@mui/material";

const HandleTitle = () => {
  return (
    <Stack
      sx={{
        textAlign: "center",
        backgroundColor: "background.light",
        pt: 2,
        direction: "column",
        mt:13
      }}
    >
      <Typography sx={{ fontSize: "2.5em", fontWeight: "bold" }}>
        Contact Us
      </Typography>
    </Stack>
  );
};

export default HandleTitle;