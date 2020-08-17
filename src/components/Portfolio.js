import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Backdrop } from "@material-ui/core";
import { db } from "../firebase";
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

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100%",
    marginTop: "4rem",
  },
  cardContainer: {
    height: "auto",
    maxWidth: 345,
    margin: "2rem auto",
    [theme.breakpoints.up("md")]: {
      maxWidth: 500,
      margin: "2rem auto",
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Portfolio = () => {
  const [openModal, setOpenModal] = useState(false);
  const [allProjects, setAllProjects] = useState([]);
  const [project, setProject] = useState(null);
  const classes = useStyles();
  useEffect(() => {
    db.collection("projects").onSnapshot((snap) => {
      setAllProjects(snap.docs.map((doc) => doc.data()));
    });
  }, []);
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

      <Grid container justify="center" alignItems="center">
        {allProjects.map((project, key) => (
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
                  <Button
                    size="small"
                    color="primary"
                    href={project.link}
                    target="_blank"
                  >
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
