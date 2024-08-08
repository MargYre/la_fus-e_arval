// src/components/mainContent.jsx
import React from 'react';
import '../styles/mainContent.scss'; // Assurez-vous de créer ce fichier CSS
import Hero from '../components/hero'
import AdditionalServices from '../components/additionalServices'
import PackageOption from '../components/packageOption'
import carIcon from '../assets/picto-car.png';

const MainContent = () => {
  const essentials = [
    "• Vos collaborateurs peuvent choisir des véhicules de catégorie Citadine, Compacte, Routière, Confort (automatique) et petit Monospace.En plus des véhicules de la formule Essentiel, véhicules Confort et Grand."
  ];
  const essentialsPlus = [
    "• Confort (automatiques), Moyen et Grand Monospace (7 places)."
  ];

  return (
    <main className="main-content">
      <Hero />
      <AdditionalServices/>
      <h1>Comment souscrire le forfait Arval switch ?</h1>
      <h2>2 formules sont proposées :</h2>
      <div className='allOptions'>
        <PackageOption title="Arval Switch Essentiel" details={essentials} backgroundColor="#ffc415"/>
        <PackageOption title="Arval Switch Essentiel plus" details={essentialsPlus} backgroundColor="#dfff82"/>
      </div>
      <img src={carIcon} alt="Car Icon" className="car-icon" />
      <h1>4 bonnes raisons d’opter pour Arval Switch</h1>
    </main>
  );
};

export default MainContent;
