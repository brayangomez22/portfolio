import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default class certificates extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class="certificates">
                    <div class="wrapper">
                        <nav class="menu">
                            <div class="menu_logo">
                                <a href="./index.html">BG</a>
                            </div>
                            <div class="menu_items">
                                <div class="menu_items-link"><a href="./index.html/#portfolio">Portafolio</a></div>
                                <div class="menu_items-link"><a href="./index.html/#portfolio">Acerca De</a></div>
                            </div>
                        </nav>
                        <div class="certificates_container" data-scroll-section>
                            <div class="certificates_container-title" data-scroll>
                                <h1 class="anime-js-title">Certificados</h1>
                            </div>
                            <div class="certificates_container-subtitle" data-scroll>
                                <p>Desarrollador Web Full Stack</p>
                            </div>
                            <div class="certificates_container-images">
                                <div class="certificates_image certificates_image-one" data-scroll data-scroll-speed="1">
                                </div>
                                <div class="certificates_image certificates_image-two" data-scroll data-scroll-speed="4">
                                </div>
                                <div class="certificates_image certificates_image-three" data-scrol data-scroll-speed="2">
                                </div>
                                <div class="certificates_image certificates_image-four" data-scroll data-scroll-speed="4">
                                </div>
                            </div>
                            <div class="certificates-next-link" data-scroll>
                                <a href="project.html">Próximo</a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
