import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Particles from '../components/ParticlesJS'
import Home from '../pages/Home'
import NotFount from '../pages/NotFound'

function App() {
	return (
		<BrowserRouter>
			<Particles />
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route component={NotFount}></Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App
