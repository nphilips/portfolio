import ReactDOM from 'react-dom'
import React from 'react'
import App from './App.js'
import {BrowserRouter} from 'react-router-dom'
import './styles.css'

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, document.getElementById('root'))

