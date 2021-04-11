import React, { Component } from 'react'

import imgAbout from '../assets/img/img.jpg'

export default class About extends Component {
	render() {
		return (
			<section class="about" id="about">
				<div class="section-title" data-aos="zoom-in">
					<h3>Acerca de mi</h3>
				</div>

				<div class="about__container container">
					<div class="about__img" data-aos="fade-up">
						<img src={imgAbout} alt="" />
					</div>

					<div class="about__text" data-aos="fade-down">
						<h2 class="about__subtitle">Yo Soy Brayan</h2>
						<p class="about__text">
							Hola, Mi nombre es Brayan Gómez. Tengo 17 años de edad. Disfruto creando cosas
							que viven en Internet, ya sean sitios web, aplicaciones o cualquier otra cosa. Mi
							objetivo es siempre crear productos que proporcionen experiencias de rendimiento
							perfectas.
						</p>
						<p class="about__text">
							Soy Desarrollador de Software. Si tienes algún proyecto o si quieres hacer un
							software para tus negocios, contáctame, lo hago lo antes posible.
						</p>
					</div>
				</div>
			</section>
		)
	}
}
