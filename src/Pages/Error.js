import React from 'react';
import { Link } from "react-router-dom";
import "../style/pages/_error.scss"

const NotFoundPage = () => {
    return (
        <section className='errorPage'>
            <p className='error__404'>404</p>
            <div className='error__text'>
                <p className='error__text__one'>Oups! La page que</p>
                <p className='error__text__two'>vous demandez n'existe pas.</p>
            </div>
            <Link to="/" className='error__link'>Retourner sur la page d’accueil</Link>
        </section>
    );
};

export default NotFoundPage;