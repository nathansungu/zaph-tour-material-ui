import React, { type FC } from "react";
import HandleGallery from "./gallery";
import { styled } from "@mui/material/styles";
import { Favorite, Share } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Grid,
  Card,
  CardMedia,
  Stack,
  CardContent,
  Typography,
  CardActions,
  Collapse,
} from "@mui/material";
import IconButton, { type IconButtonProps } from "@mui/material/IconButton";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

type dst = {
  title: string;
  image: string;
  description: string;
  offer: number;
  price: number;
};

interface dataPropd {
  dst: dst;
}

const HandleTripsCard: FC<dataPropd> = ({ dst }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Grid size={{ xs: 12, md: 4, sm: 6 }}>
        <Card>
          <CardMedia
            component="img"
            src={dst.image}
            height="220"
            alt={dst.title}
          />
          <Stack sx={{ p: ".5rem" }}>
            <CardContent>
              <Stack sx={{ fontSize: "2" }}>
                <Typography fontSize="2rem">{dst.title}</Typography>
                <Typography sx={{ mt: "1.5" }}>{dst.description}</Typography>
                <Stack
                  textTransform="capitalize"
                  direction="row"
                  sx={{ gap: "1rem", mt: ".5rem" }}
                >
                  {dst.offer > 0 ? (
                    <>
                      <Stack direction="row" spacing={2} textAlign="center">
                        <Typography color="red">
                          {(dst.price * dst.offer) / 100}
                        </Typography>
                        <Typography
                          sx={{ textDecoration: "line-through double" }}
                          color="red"
                        >
                          {dst.price}
                        </Typography>
                      </Stack>
                    </>
                  ) : (
                    <Typography color="red">{dst.price}</Typography>
                  )}
                </Stack>
              </Stack>
            </CardContent>
          </Stack>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Favorite />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="Gallery"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <HandleGallery name={dst.title} />
          </Collapse>
        </Card>
      </Grid>
    </>
  );
};

export default HandleTripsCard;
