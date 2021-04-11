import React, { Component } from 'react'

import Header from '../components/home/Header'
import SiteBanner from '../components/home/SiteBanner'
import About from '../components/home/About'
import Skills from '../components/home/Skills'
import Service from '../components/home/Service'
import Portafolio from '../components/home/Portafolio'
import Contact from '../components/home/Contact'
import Prices from '../components/home/Prices'
import Testimonials from '../components/home/Testimonials'
import Proyect from '../components/home/Proyect'
import BoxContact from 	'../components/home/BoxContact'

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
					<BoxContact/>
				</main>
			</div>
		)
	}
}
