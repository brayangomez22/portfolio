import React, { Component } from 'react';

import bannerImg from '../../assets/img/banner-image.png'

export default class SiteBanner extends Component {
	render() {
		return (
			<section className="site-banner">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12 site-title" style={{ marginTop: '-60px' }}>
							<h3>Hola</h3>
							<h1>YO SOY</h1>
							<div style={{ position: 'relative', top: '-33px' }}>
								<span data-text="BRAYAN">BRAYAN</span>
								<h4>desarrollador web full stack</h4>
								<div className="site-buttons">
									<div className="d-flex flex-row flex-wrap">
										<a href="./assets/cv.pdf" download="./assets/cv.pdf">
											<button type="button" className="btn button text-uppercase">
												Descargar cv
											</button>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-6 col-md-12 banner-image">
							<img src={bannerImg} alt="banner-img" className="img-fluid" />
						</div>
					</div>
				</div>
			</section>
		)
	}
}
