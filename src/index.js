import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalReset } from './reset'


const root = document.getElementById('root')

const AppContainer = () => (
    <Router>
        <GlobalReset />
        <App />
    </Router>
)

ReactDOM.render(<AppContainer />, root);

