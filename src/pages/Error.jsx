import React from 'react'
import { NavLink } from 'react-router-dom'
import './error.css'
function error() {
  return (
    <div>
      
      <section className="error_page">
            <h1 className="error_page_title">404</h1>
            <h2 className="error_page_subtitle">Oups! La page que vous demandez n'existe pas.</h2>
            <NavLink title='Accueil' end to='/Home' className="error_page_link">Retourner sur la page d'accueil</NavLink>
        </section>
      
    </div>
  )
}

export default error