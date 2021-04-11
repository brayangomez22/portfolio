import React, { Component } from 'react'

import Header from '../components/Header'
import SiteBanner from '../components/SiteBanner'
import About from '../components/About'
import Skills from '../components/Skills'
import Service from '../components/Service'
import Portafolio from '../components/Portafolio'
import Contact from '../components/Contact'
import Prices from '../components/Prices'
import Testimonials from '../components/Testimonials'
import Proyect from '../components/Proyect'

export default class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<main className="site-main">
					<SiteBanner />
					<About />
					<Skills />
					<Service />
					<Portafolio />
					<Contact/>
					<Prices/>
					<Testimonials/>
					<Proyect/>
				</main>
			</div>
		)
	}
}
