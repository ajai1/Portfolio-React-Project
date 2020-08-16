import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import dev from "../images/dev.gif";
import InstaClone from "../images/InstaClone.gif";

import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Button,
  Typography,
  CardContent,
} from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles({
  mainContainer: {
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem",
    margin: "5rem auto",
  },
});

const projects = [
  {
    image: dev,
    projectName: "Developer Connect",
    projectDesc:
      "A Social Media platform for developers, to interact and know each other",
  },
  {
    image: InstaClone,
    projectName: "Instagram Clone Model",
    projectDesc:
      "A clone of Instagram to showcase the images, comment on them and upload images",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center" alignItems="center">
        {projects.map((project, key) => (
          <Grid item xs={12} sm={8} md={6} key={key}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="100%"
                  image={project.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {project.projectName}
                  </Typography>
                  <Typography
                    variant="body"
                    color="textSecondary"
                    component="p"
                  >
                    {project.projectDesc}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Live Demo
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
