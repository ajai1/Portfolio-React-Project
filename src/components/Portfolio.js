import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Backdrop } from "@material-ui/core";
import dev from "../images/dev.gif";
import InstaClone from "../images/InstaClone.gif";
import BurgerBuilder from "../images/BurgerBuilder.gif";

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

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

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
  {
    image: BurgerBuilder,
    projectName: "Burger Builder",
    projectDesc:
      "An interactive Burger building app to customize and checkout the order",
  },
];

const Portfolio = () => {
  const [openModal, setOpenModal] = useState(false);
  const [project, setProject] = useState(null);
  const classes = useStyles();

  const showGif = (project) => {
    setProject(project);
    setOpenModal(!openModal);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Box component="div" className={classes.mainContainer}>
      {openModal ? (
        <Backdrop
          open={openModal}
          onClick={handleClose}
          className={classes.backdrop}
        >
          <Box component="div">
            <CardMedia
              component="img"
              alt="Project"
              height="100%"
              style={{ padding: 10 }}
              image={project.image}
            />
          </Box>
        </Backdrop>
      ) : null}
      <Navbar />
      <Grid container justify="center" alignItems="center">
        {projects.map((project, key) => (
          <Grid item xs={12} sm={8} md={6} key={key}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  onClick={() => showGif(project)}
                  component="img"
                  alt="Project"
                  height="100%"
                  image={project.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {project.projectName}
                  </Typography>
                  <Typography
                    variant="body1"
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
