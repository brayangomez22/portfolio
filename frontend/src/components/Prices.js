import React, { Component } from 'react'
import checkCircle from '../assets/img/prices/check-circle.svg'
import xSquare from '../assets/img/prices/x-square.svg'

export default class Prices extends Component {
    render() {
        return (
            <section className="prices" id="prices">
            <div className="section-title" data-aos="zoom-in">
                <h3>Precios</h3>
            </div>
            <div className="price-comparison" id="price-comparison">
                <div className="price-column" data-aos="fade-up-right">
                    <div className="price-header">
                        <div className="price">
                            <div className="dollar-sign">$</div>
                            300
                            <div className="per-month">/dólares</div>
                        </div>
                        <div className="plan-name">Mes</div>
                    </div>

                    <div className="divider"></div>

                    <div className="feature">
                        <img src={checkCircle}/>
                        Desarrollo Web
                    </div>
                    <div className="feature">
                        <img src={checkCircle}/>
                        Desarrollo Web
                    </div>
                    <div className="feature inactive">
                        <img src={xSquare}/>
                        Desarrollo Web
                    </div>

                    <button className="cta">Empezar hoy</button>
                </div>

                <div class="price-column popular" data-aos="fade-up">
                    <div class="most-popular">Más popular</div>
                    <div className="price-header">
                        <div className="price">
                            <div className="dollar-sign">$</div>
                            500
                            <div className="per-month">/dólares</div>
                        </div>
                        <div className="plan-name">Mes</div>
                    </div>

                    <div className="divider"></div>

                    <div className="feature">
                        <img src={checkCircle}/>
                        Desarrollo Web
                    </div>
                    <div className="feature">
                        <img src={checkCircle}/>
                        Desarrollo Web
                    </div>
                    <div className="feature">
                        <img src={checkCircle}/>
                        Desarrollo Web
                    </div>
                    <div className="feature">
                        <img src={checkCircle}/>
                        Desarrollo Web
                    </div>

                    <button className="cta">Empezar hoy</button>
                </div>

                <div className="price-column" data-aos="fade-up-left">
                    <div className="price-header">
                        <div className="price">
                            <div className="dollar-sign">$</div>
                            400
                            <div className="per-month">/dólares</div>
                        </div>
                        <div className="plan-name">Mes</div>
                    </div>

                    <div className="divider"></div>

                    <div className="feature">
                        <img src={checkCircle}/>
                        Desarrollo Web
                    </div>
                    <div className="feature">
                        <img src={checkCircle}/>
                        Desarrollo Web
                    </div>
                    <div className="feature">
                        <img src={checkCircle}/>
                        Desarrollo Web
                    </div>
                    <div className="feature inactive">
                        <img src={xSquare}/>
                        Desarrollo Web
                    </div>

                    <button className="cta">Empezar hoy</button>
                </div>
            </div>
        </section>
        )
    }
}
