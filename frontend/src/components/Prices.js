import React, { Component } from 'react'
import checkCircle from '../assets/img/prices/check-circle.svg'
import xSquare from '../assets/img/prices/x-square.svg'

export default class Prices extends Component {
    render() {
        return (
            <section class="prices" id="prices">
            <div class="section-title" data-aos="zoom-in">
                <h3>Precios</h3>
            </div>
            <div class="price-comparison" id="price-comparison">
                <div class="price-column" data-aos="fade-up-right">
                    <div class="price-header">
                        <div class="price">
                            <div class="dollar-sign">$</div>
                            300
                            <div class="per-month">/dólares</div>
                        </div>
                        <div class="plan-name">Mes</div>
                    </div>

                    <div class="divider"></div>

                    <div class="feature">
                        <img src={checkCircle}/>
                        Desarrollo Web
                    </div>
                    <div class="feature">
                        <img src={checkCircle}/>
                        Desarrollo Web
                    </div>
                    <div class="feature inactive">
                        <img src={xSquare}/>
                        Desarrollo Web
                    </div>

                    <button class="cta">Empezar hoy</button>
                </div>

                <div class="price-column popular" data-aos="fade-up">
                    <div class="most-popular">Más popular</div>
                    <div class="price-header">
                        <div class="price">
                            <div class="dollar-sign">$</div>
                            500
                            <div class="per-month">/dólares</div>
                        </div>
                        <div class="plan-name">Mes</div>
                    </div>

                    <div class="divider"></div>

                    <div class="feature">
                        <img src={checkCircle}/>
                        Desarrollo Web
                    </div>
                    <div class="feature">
                        <img src={checkCircle}/>
                        Desarrollo Web
                    </div>
                    <div class="feature">
                        <img src={checkCircle}/>
                        Desarrollo Web
                    </div>
                    <div class="feature">
                        <img src={checkCircle}/>
                        Desarrollo Web
                    </div>

                    <button class="cta">Empezar hoy</button>
                </div>

                <div class="price-column" data-aos="fade-up-left">
                    <div class="price-header">
                        <div class="price">
                            <div class="dollar-sign">$</div>
                            400
                            <div class="per-month">/dólares</div>
                        </div>
                        <div class="plan-name">Mes</div>
                    </div>

                    <div class="divider"></div>

                    <div class="feature">
                        <img src={checkCircle}/>
                        Desarrollo Web
                    </div>
                    <div class="feature">
                        <img src={checkCircle}/>
                        Desarrollo Web
                    </div>
                    <div class="feature">
                        <img src={checkCircle}/>
                        Desarrollo Web
                    </div>
                    <div class="feature inactive">
                        <img src={xSquare}/>
                        Desarrollo Web
                    </div>

                    <button class="cta">Empezar hoy</button>
                </div>
            </div>
        </section>
        )
    }
}
