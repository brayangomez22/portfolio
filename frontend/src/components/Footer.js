import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <p data-aos="zoom-in">Brayan Gómez</p>
                <div className="container-social" data-aos="zoom-in">
                    <div className="social-bottons">
                        <a href="https://www.facebook.com/brayanalexander.gomezmanco.7" target="blank"><i
                            className="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com/brayang65009138?s=08" target="blank"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/in/brayan-gómez-7398771a4" target="blank"><i
                            className="fab fa-linkedin-in"></i></a>
                        <a href="https://www.instagram.com/brayanalexandergomezmanco/" target="blank"><i
                            className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <p className="copyright">Copyright by Brayan</p>
            </footer>
        )
    }
}
