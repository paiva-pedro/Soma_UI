import React from 'react';
import clsx from 'clsx';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#FFE600' },
    secondary: { main: '#222' },
  },
});

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 8px',
    backgroundColor: '#FFE600',
    ...theme.mixins.toolbar,
  },
  iconMenu: {
    display: 'flex',
    width: '15px',
    color: '#fff',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#ff4040',
    border: 0,
    borderRadius: '0px',
    height: '40px',
    color: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    transition: '.2s',
    '&:hover': {
      background: "#f00",
      transition: '.2s',
    },
  },
  buttonItems: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#fff',
    width: '100%',
    height: '55px',
  },
  divider: {
    backgroundColor: '#fff',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',
    textTransform: 'uppercase',
    fontFamily: 'Bebas Neue, Sans-serif',
    fontSize: '25px',
  },
  logo: {
    width: '50px',
    marginBottom: '7px',
    marginLeft: '5px',
  },
  drawerPaper: {
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: '#222',
    color: '#fff',
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: '0px',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              color="secondary"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              {props.title ? props.title : 'Titulo'}
            </Typography>
            <img className={classes.logo} src={props.logo} alt="logotipo" />

          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <Typography color="secondary">
              {props.titleMenu ? props.titleMenu : "Titulo Menu"}
            </Typography>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon className={classes.icons} />
            </IconButton>
          </div>
          <Divider className={classes.divider} />

          {props.menuData.map(tile => (
            <div>
              <Button className={classes.buttonItems}>
                <Typography>{tile.title}</Typography>
                <icon>{tile.icon}</icon>
              </Button>
              <Divider className={classes.divider} />
            </div>
          ))}

          <Button className={classes.button}>
            Sair
          </Button>
        </Drawer>

        <div className={classes.appBarSpacer} />
      </ThemeProvider>
    </div>
  );
}