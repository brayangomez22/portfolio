import React, { Component } from 'react'
import frontend from '../assets/img/services/frontend.png';
import backend from '../assets/img/services/backend.png';
import seo from '../assets/img/services/seo.png';


export default class Service extends Component {
    render() {
        return (
                <section class="services" id="services">
            <div class="section-title" data-aos="zoom-in" style={{"padding-top": "57px"}}>
                <h3>Servicios</h3>
            </div>
            <div class="container-services" data-aos="zoom-in-down">
                <div class="card-services">
                    <div class="content">
                        <img src={frontend} alt=""/>
                        <h3>Frontend</h3>
                        <p>Te ofrezco un diseño profesional y hermoso de tu aplicación web 😉.</p>
                    </div>
                </div>

                <div class="card-services">
                    <div class="content">
                        <img src={backend} alt=""/>
                        <h3>Backend</h3>
                        <p>Tendrás una aplicación web muy bien desarrollada, para que crezca tu negocio 😉.</p>
                    </div>
                </div>

                <div class="card-services">
                    <div class="content">
                        <img src={seo} alt=""/>
                        <h3>Seo / Optimizador</h3>
                        <p>Tu aplicación sera la más rápida y mejor de todo internet 😉.</p>
                    </div>
                </div>
            </div>
        </section>

        )
    }
}