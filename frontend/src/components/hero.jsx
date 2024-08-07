// src/components/Hero.jsx
import React from 'react';
import '../styles/Hero.scss';
import heroImage from '../assets/Hero.jpeg';

const Hero = () => {
  return (
    <div >
      <div className="image-container">
        <img src={heroImage} alt="Description" className="heroImage" />
      </div>
      <div className="hero-wrapper">
      <div className="heroContainer">
        <h1>LE DUO ÉLECTRIQUE-THERMIQUE ARVAL SWITCH : MODE D’EMPLOI</h1>
        <p>Avec Arval Switch, vos collaborateurs gagnent en autonomie sur la route, mais aussi pour réserver leur véhicule !<br/>
        Aucune action n’est requise de votre part : l’ensemble de la prestation est géré de bout en bout par Arval, 
        en direct avec les conducteurs.</p>
      </div>
      </div>
    </div>
  );
};

export default Hero;
