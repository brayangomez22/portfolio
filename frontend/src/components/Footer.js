import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <p data-aos="zoom-in">Brayan Gómez</p>
                <div className="container-social" data-aos="zoom-in">
                    <div className="social-bottons">
                        <Link to="https://www.facebook.com/brayanalexander.gomezmanco.7" target="blank"><i
                            className="fab fa-facebook-f"></i></Link>
                        <Link to="https://twitter.com/brayang65009138?s=08" target="blank"><i className="fab fa-twitter"></i></Link>
                        <Link to="https://www.linkedin.com/in/brayan-gómez-7398771a4" target="blank"><i
                            className="fab fa-linkedin-in"></i></Link>
                        <Link to="https://www.instagram.com/brayanalexandergomezmanco/" target="blank"><i
                            className="fab fa-instagram"></i></Link>
                    </div>
                </div>
                <p className="copyright" data-aos="zoom-in">Copyright by Brayan</p>
            </footer>
        )
    }
}
