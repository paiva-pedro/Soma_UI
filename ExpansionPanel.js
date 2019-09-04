import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  root: {
    width: '90%',
  },
  card: {
    backgroundColor: '#FCFCFC',
  },
  title: {
    fontSize: '20px',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
   
  },
});

class ControlledExpansionPanels extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
          <Grid item xs={12} >
            <ExpansionPanel className={classes.card}>
              <ExpansionPanelSummary classes={{content: classes.content}}>
                <Typography variant={'h6'} className={classes.title}>Farm Ipanema</Typography>
                <Typography className={classes.title} variant={'h6'}>25k</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                aaaaaaaa
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);