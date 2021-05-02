import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import './App.css';
import ProjectList from './components/ProjectList/ProjectList';
import Toolbar from './components/Toolbar/ToolbarComponent';
import theme from './constants/theme'
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toolbar />
        <ProjectList />
      </ThemeProvider>
    </Provider>
  )
}

export default App;
