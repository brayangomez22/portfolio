import React, { useState, useEffect } from 'react';
import axios from '../../axios/axios';

const Skills = () => {
	const [skills, setSkills] = useState([]);

	const getSkills=()=>{
		axios.get('/habilidades')
		.then(res=>{
			setSkills(res.data);
		})
	}

	useEffect(()=>{
		getSkills();
	}, []);
	return (
		<section className="skills">
			<div className="section-title" data-aos="zoom-in">
				<h3>Habilidades</h3>
			</div>

			<div className="container-skills" data-aos="flip-left">
				{skills? (
					skills.map(skill=>(
						<div className="card">
					<div className="box">
						<div className="percent">
							<svg>
								<circle cx="70" cy="70" r="70"></circle>
								<circle cx="70" cy="70" r="70" style={{ '--i': `${skill.porcentaje}` }}></circle>
							</svg>
							<div className="number">
								<h2>
									{skill.porcentaje}<span>%</span>
								</h2>
							</div>
						</div>
						<h2 className="text">{skill.titulo}</h2>
					</div>
				</div>
					))
				):null}
				
			
			</div>
		</section>
	);
}

export default Skills;