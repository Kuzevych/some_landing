import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { Box } from "@material-ui/core";

import MainScreen from "./components/MainScreen";

import styles from './Landing.styles';

export interface LandingProps extends WithStyles<typeof styles> {}

const Landing = (props: LandingProps) => {

  const { classes } = props;

  return (
    <Box display="flex" flexDirection="column" className={classes.root}>
      <MainScreen />
    </Box>
  );
};

export default withStyles(styles)(Landing);