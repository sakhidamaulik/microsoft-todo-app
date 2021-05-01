import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AppsIcon from '@material-ui/icons/Apps';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import NewReleasesIcon from '@material-ui/icons/NewReleases';

import useStyles from './style'

const ToolbarComponent = () => {
  const classes = useStyles()
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.iconAndTitle}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <AppsIcon />
            </IconButton>
            <Typography variant="h6" noWrap className={classes.title}>
              To Do
            </Typography>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              inputProps={{ 'aria-label': 'search' }}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          <div className={classes.allButtons}>
            <IconButton color="inherit">
              <SettingsIcon />
            </IconButton>
            <IconButton color="inherit">
              <LiveHelpIcon />
            </IconButton>
            <IconButton color="inherit">
              <NewReleasesIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div >
  )
}

export default ToolbarComponent;