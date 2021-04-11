import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'
import './assets/styles/App.scss'
import './assets/styles/NotFount.scss'
import App from './routes/App'

import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

const container = document.getElementById('app')

ReactDOM.render(<App />, container)
