import React, { Component } from 'react'
import shape from '../../assets/img/form-contact/shape.png'
import location from '../../assets/img/form-contact/location.png'
import email from '../../assets/img/form-contact/email.png'
import phone from '../../assets/img/form-contact/phone.png'

export default class BoxContact extends Component {
	render() {
		return (
			<section className="contact" id="contact">
				<div className="section-title" data-aos="zoom-in">
					<h3>Formulario de Contacto</h3>
				</div>

				<div className="container-contact" data-aos="zoom-in">
					<span className="big-circle"></span>
					<img src={shape} className="square" alt="" />

					<div className="form">
						<div className="contact-info">
							<h3 className="title">Mantengámonos en contacto</h3>
							<p className="text">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum adipisci
								recusandae praesentium dicta!
							</p>

							<div className="info">
								<div className="information">
									<img src={location} className="icon" alt="" />
									<p>CR 36 BB #105-56</p>
								</div>

								<div className="information">
									<img src={email} className="icon" alt="" />
									<p>brayan@miweb.com</p>
								</div>

								<div className="information">
									<img src={phone} className="icon" alt="" />
									<p>3013932979</p>
								</div>
							</div>

							<div className="social-media">
								<p>Conecta Conmigo :</p>
								<div className="social-icons">
									<a href="#">
										<i className="fab fa-facebook-f"></i>
									</a>
									<a href="#">
										<i className="fab fa-twitter"></i>
									</a>
									<a href="#">
										<i className="fab fa-instagram"></i>
									</a>
									<a href="#">
										<i className="fab fa-linkedin-in"></i>
									</a>
								</div>
							</div>
						</div>

						<div className="contact-form">
							<span className="circle one"></span>
							<span className="circle two"></span>

							<form autocomplete="off">
								<h3 className="title">Escribeme !</h3>
								<div className="input-container">
									<input type="text" name="name" className="input" placeholder="Nombre" />
								</div>

								<div className="input-container">
									<input type="email" name="email" className="input" placeholder="Email" />
								</div>

								<div className="input-container">
									<input type="tel" name="phone" className="input" placeholder="Teléfono" />
								</div>

								<div className="input-container textarea">
									<textarea name="message" className="input" placeholder="Mensaje"></textarea>
								</div>
								<input type="submit" value="Enviar" className="btn" />
							</form>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
