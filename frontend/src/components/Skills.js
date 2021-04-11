import React, { Component } from 'react'

export default class Skills extends Component {
	render() {
		return (
			<section class="skills">
				<div class="section-title" data-aos="zoom-in">
					<h3>Habilidades</h3>
				</div>

				<div class="container-skills" data-aos="flip-left">
					<div class="card">
						<div class="box">
							<div class="percent">
								<svg>
									<circle cx="70" cy="70" r="70"></circle>
									<circle cx="70" cy="70" r="70" style={{ '--i': '90' }}></circle>
								</svg>
								<div class="number">
									<h2>
										90<span>%</span>
									</h2>
								</div>
							</div>
							<h2 class="text">HTML</h2>
						</div>
					</div>

					<div class="card">
						<div class="box">
							<div class="percent">
								<svg>
									<circle cx="70" cy="70" r="70"></circle>
									<circle cx="70" cy="70" r="70" style={{ '--i': '85' }}></circle>
								</svg>
								<div class="number">
									<h2>
										85<span>%</span>
									</h2>
								</div>
							</div>
							<h2 class="text">CSS</h2>
						</div>
					</div>

					<div class="card">
						<div class="box">
							<div class="percent">
								<svg>
									<circle cx="70" cy="70" r="70"></circle>
									<circle cx="70" cy="70" r="70" style={{ '--i': '70' }}></circle>
								</svg>
								<div class="number">
									<h2>
										70<span>%</span>
									</h2>
								</div>
							</div>
							<h2 class="text">JAVASCRIPT</h2>
						</div>
					</div>

					<div class="card">
						<div class="box">
							<div class="percent">
								<svg>
									<circle cx="70" cy="70" r="70"></circle>
									<circle cx="70" cy="70" r="70" style={{ '--i': '70' }}></circle>
								</svg>
								<div class="number">
									<h2>
										70<span>%</span>
									</h2>
								</div>
							</div>
							<h2 class="text">PHP</h2>
						</div>
					</div>

					<div class="card">
						<div class="box">
							<div class="percent">
								<svg>
									<circle cx="70" cy="70" r="70"></circle>
									<circle cx="70" cy="70" r="70" style={{ '--i': '55' }}></circle>
								</svg>
								<div class="number">
									<h2>
										55<span>%</span>
									</h2>
								</div>
							</div>
							<h2 class="text">JAVA</h2>
						</div>
					</div>

					<div class="card">
						<div class="box">
							<div class="percent">
								<svg>
									<circle cx="70" cy="70" r="70"></circle>
									<circle cx="70" cy="70" r="70" style={{ '--i': '55' }}></circle>
								</svg>
								<div class="number">
									<h2>
										55<span>%</span>
									</h2>
								</div>
							</div>
							<h2 class="text">C++</h2>
						</div>
					</div>

					<div class="card">
						<div class="box">
							<div class="percent">
								<svg>
									<circle cx="70" cy="70" r="70"></circle>
									<circle cx="70" cy="70" r="70" style={{ '--i': '85' }}></circle>
								</svg>
								<div class="number">
									<h2>
										85<span>%</span>
									</h2>
								</div>
							</div>
							<h2 class="text">SASS</h2>
						</div>
					</div>

					<div class="card">
						<div class="box">
							<div class="percent">
								<svg>
									<circle cx="70" cy="70" r="70"></circle>
									<circle cx="70" cy="70" r="70" style={{ '--i': '60' }}></circle>
								</svg>
								<div class="number">
									<h2>
										68<span>%</span>
									</h2>
								</div>
							</div>
							<h2 class="text">MySQL</h2>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
