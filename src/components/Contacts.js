import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Box } from "@material-ui/core";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
}));

const Contacts = () => {
  const classes = useStyles();
  return (
    <Box component="div" style={{ marginTop: "15%" }}>
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography
            variant="h5"
            style={{
              color: "tomato",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Keep in touch !
          </Typography>
          <Typography
            variant="h6"
            style={{
              color: "tan",
              textAlign: "center",
            }}
          >
            emailtoajai@gmail.com
          </Typography>
          <Typography
            variant="h6"
            style={{
              color: "tan",
              textAlign: "center",
            }}
          >
            +91-8870059091
          </Typography>

          <Box component="div" style={{ marginTop: "2%" }}>
            <Footer></Footer>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contacts;
