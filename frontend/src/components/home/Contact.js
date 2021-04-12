import React, { Component } from 'react'
import  {Link} from 'react-router-dom';
export default class Contact extends Component {
    render() {
        return (
            <div className="contact-me">
                <p data-aos="zoom-in-up">¿ Quieres ver algunos de mis certificados ?</p>
                <Link to="/certificates" data-aos="zoom-in-up"><button>Ver</button></Link>
            </div>
        )
    }
}
