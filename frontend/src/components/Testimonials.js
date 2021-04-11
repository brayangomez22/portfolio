import React, { Component } from 'react'
import faqBg11 from '../assets/img/testimonials/faq-bg-1-1.png'
import avatar1 from '../assets/img/testimonials/avatar-1.svg'

export default class Testimonials extends Component {
    render() {
        return (
            <section className="testimonials" id="testimonials">
                <img src={faqBg11} className="bg-shape-1" alt="" />
                <div className="container">
                    <div className="section-title" data-aos="zoom-in">
                        <h3>Testimonios</h3>
                    </div>
                    <div className="row" style={{"margin-top": "80px"}}>
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-down-right">
                            <div className="single">
                                <div className="circle"></div>
                                <div className="inner">
                                    <h3>Brayan Gómez</h3>
                                    <p>Web Designer</p>
                                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ut!
                                </p>
                                    <div className="image">
                                        <img src={avatar1} alt="" />
                                    </div>
                                    <div className="social">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="zoom-in">
                            <div className="single">
                                <div className="circle"></div>
                                <div className="inner">
                                    <h3>Brayan Gómez</h3>
                                    <p>Designer</p>
                                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ut!</p>
                                    <div className="image">
                                        <img src={avatar1} alt="" />
                                    </div>
                                    <div className="social">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="zoom-in">
                            <div className="single">
                                <div className="circle"></div>
                                <div className="inner">
                                    <h3>Brayan Gómez</h3>
                                    <p>Developer</p>
                                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ut!
                                </p>
                                    <div className="image">
                                        <img src={avatar1} alt="" />
                                    </div>
                                    <div className="social">
                                        <a href="#"><i className="fa fa-facebook-square"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-down-left">
                            <div className="single">
                                <div className="circle"></div>
                                <div className="inner">
                                    <h3>Brayan Gómez</h3>
                                    <p>App Designer</p>
                                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ut!</p>
                                    <div className="image">
                                        <img src={avatar1} alt="" />
                                    </div>
                                    <div className="social">
                                        <a href="#"><i className="fa fa-facebook-square"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
