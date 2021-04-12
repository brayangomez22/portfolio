import React, { Component } from 'react'

import Header from '../components/Header'
import SiteBanner from '../components/SiteBanner'
import About from '../components/About'
import Skills from '../components/Skills'

export default class Home extends Component {
	render() {
		return (
			<div>
				<a href="#" class="scrolltop" id="scroll-top">
					<i class="bx bx-chevron-up scrolltop__icon"></i>
				</a>
				<Header />
				<main className="site-main">
					<SiteBanner />
					<About />
					<Skills />
				</main>
			</div>
		)
	}
}
