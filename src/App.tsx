import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles'
import createSagaMiddleware from 'redux-saga';
import CssBaseline from '@material-ui/core/CssBaseline'

import './App.css';
import ProjectList from './components/ProjectList/ProjectList';
import { rootReducer } from './redux/RootReducer';
import Toolbar from './components/Toolbar/ToolbarComponent';
import theme from './constants/theme'

const App = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
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
