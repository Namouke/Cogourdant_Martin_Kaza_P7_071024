import React from 'react';
import { Link } from "react-router-dom";
import "../style/pages/_error.scss"

const NotFoundPage = () => {
    return (
        <section className='errorPage'>
            <p className='errorPage__404'>404</p>
            <div className='errorPage__text'>
                <p className='errorPage__text__one'>Oups! La page que</p>
                <p className='errorPage__text__two'>vous demandez n'existe pas.</p>
            </div>
            <Link to="/" className='errorPage__link'>Retourner sur la page d’accueil</Link>
        </section>
    );
};

export default NotFoundPage;