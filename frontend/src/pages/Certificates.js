import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom';

export default class certificates extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="certificates">
                    <div className="wrapper">
                        <nav className="menu">
                            <div className="menu_logo">
<<<<<<< HEAD
                                <a href="./index.html">BG</a>
=======
                                <Link to="/">BG</Link>  
>>>>>>> 5ce8bd5df5db430e9d571a4773f9168bd1b60e9d
                            </div>
                            <div className="menu_items">
                                <div className="menu_items-link"><a href="./index.html/#portfolio">Portafolio</a></div>
                                <div className="menu_items-link"><a href="./index.html/#portfolio">Acerca De</a></div>
                            </div>
                        </nav>
                        <div className="certificates_container" data-scroll-section>
                            <div className="certificates_container-title" data-scroll>
                                <h1 className="anime-js-title">Certificados</h1>
                            </div>
                            <div className="certificates_container-subtitle" data-scroll>
                                <p>Desarrollador Web Full Stack</p>
                            </div>
                            <div className="certificates_container-images">
                                <div className="certificates_image certificates_image-one" data-scroll data-scroll-speed="1">
                                </div>
                                <div className="certificates_image certificates_image-two" data-scroll data-scroll-speed="4">
                                </div>
                                <div className="certificates_image certificates_image-three" data-scrol data-scroll-speed="2">
                                </div>
                                <div className="certificates_image certificates_image-four" data-scroll data-scroll-speed="4">
                                </div>
                            </div>
<<<<<<< HEAD
                            <div className="certificates-next-link" data-scroll>
                                <a href="project.html">Próximo</a>
                            </div>
=======
>>>>>>> 5ce8bd5df5db430e9d571a4773f9168bd1b60e9d
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
