import React from 'react'
import Particles from 'react-particles-js'

function ParticlesJS() {
	return (
		<div className="particles-js">
			<Particles
				params={{
					particles: {
						number: {
							value: 90,
							density: {
								enable: true,
								value_area: 1500,
							},
						},
					},
				}}
			/>
		</div>
	)
}

export default ParticlesJS
