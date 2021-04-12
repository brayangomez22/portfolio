import React, { Component } from 'react'

import imgAbout from '../../assets/img/img.jpg'

export default class About extends Component {
	render() {
		return (
			<section className="about" id="about">
				<div className="section-title" data-aos="zoom-in">
					<h3>Acerca de mi</h3>
				</div>

				<div className="about__container container">
					<div className="about__img" data-aos="fade-up">
						<img src={imgAbout} alt="" />
					</div>

					<div className="about__text" data-aos="fade-down">
						<h2 className="about__subtitle">Yo Soy Brayan</h2>
						<p className="about__text">
							Hola, Mi nombre es Brayan Gómez. Tengo 17 años de edad. Disfruto creando cosas
							que viven en Internet, ya sean sitios web, aplicaciones o cualquier otra cosa. Mi
							objetivo es siempre crear productos que proporcionen experiencias de rendimiento
							perfectas.
						</p>
						<p className="about__text">
							Soy Desarrollador de Software. Si tienes algún proyecto o si quieres hacer un
							software para tus negocios, contáctame, lo hago lo antes posible.
						</p>
					</div>
				</div>
			</section>
		)
	}
}
