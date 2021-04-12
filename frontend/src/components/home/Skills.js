import React, { Component } from 'react'

export default class Skills extends Component {
	render() {
		return (
			<section className="skills">
				<div className="section-title" data-aos="zoom-in">
					<h3>Habilidades</h3>
				</div>

				<div className="container-skills" data-aos="flip-left">
					<div className="card">
						<div className="box">
							<div className="percent">
								<svg>
									<circle cx="70" cy="70" r="70"></circle>
									<circle cx="70" cy="70" r="70" style={{ '--i': '90' }}></circle>
								</svg>
								<div className="number">
									<h2>
										90<span>%</span>
									</h2>
								</div>
							</div>
							<h2 className="text">HTML</h2>
						</div>
					</div>

					<div className="card">
						<div className="box">
							<div className="percent">
								<svg>
									<circle cx="70" cy="70" r="70"></circle>
									<circle cx="70" cy="70" r="70" style={{ '--i': '85' }}></circle>
								</svg>
								<div className="number">
									<h2>
										85<span>%</span>
									</h2>
								</div>
							</div>
							<h2 className="text">CSS</h2>
						</div>
					</div>

					<div className="card">
						<div className="box">
							<div className="percent">
								<svg>
									<circle cx="70" cy="70" r="70"></circle>
									<circle cx="70" cy="70" r="70" style={{ '--i': '70' }}></circle>
								</svg>
								<div className="number">
									<h2>
										70<span>%</span>
									</h2>
								</div>
							</div>
							<h2 className="text">JAVASCRIPT</h2>
						</div>
					</div>

					<div className="card">
						<div className="box">
							<div className="percent">
								<svg>
									<circle cx="70" cy="70" r="70"></circle>
									<circle cx="70" cy="70" r="70" style={{ '--i': '70' }}></circle>
								</svg>
								<div className="number">
									<h2>
										70<span>%</span>
									</h2>
								</div>
							</div>
							<h2 className="text">PHP</h2>
						</div>
					</div>

					<div className="card">
						<div className="box">
							<div className="percent">
								<svg>
									<circle cx="70" cy="70" r="70"></circle>
									<circle cx="70" cy="70" r="70" style={{ '--i': '55' }}></circle>
								</svg>
								<div className="number">
									<h2>
										55<span>%</span>
									</h2>
								</div>
							</div>
							<h2 className="text">JAVA</h2>
						</div>
					</div>

					<div className="card">
						<div className="box">
							<div className="percent">
								<svg>
									<circle cx="70" cy="70" r="70"></circle>
									<circle cx="70" cy="70" r="70" style={{ '--i': '55' }}></circle>
								</svg>
								<div className="number">
									<h2>
										55<span>%</span>
									</h2>
								</div>
							</div>
							<h2 className="text">C++</h2>
						</div>
					</div>

					<div className="card">
						<div className="box">
							<div className="percent">
								<svg>
									<circle cx="70" cy="70" r="70"></circle>
									<circle cx="70" cy="70" r="70" style={{ '--i': '85' }}></circle>
								</svg>
								<div className="number">
									<h2>
										85<span>%</span>
									</h2>
								</div>
							</div>
							<h2 className="text">SASS</h2>
						</div>
					</div>

					<div className="card">
						<div className="box">
							<div className="percent">
								<svg>
									<circle cx="70" cy="70" r="70"></circle>
									<circle cx="70" cy="70" r="70" style={{ '--i': '60' }}></circle>
								</svg>
								<div className="number">
									<h2>
										68<span>%</span>
									</h2>
								</div>
							</div>
							<h2 className="text">MySQL</h2>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
