import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'
import { GlobalReset } from './reset'
import {theme} from './theme'


const root = document.getElementById('root')

const AppContainer = () => (
    <Router>
        <GlobalReset />
        <ThemeProvider theme={theme}>
        <App />
        </ThemeProvider>
    </Router>
)

ReactDOM.render(<AppContainer />, root);

