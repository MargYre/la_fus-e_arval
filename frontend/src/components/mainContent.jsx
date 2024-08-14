// src/components/mainContent.jsx
import React from 'react';
import '../styles/mainContent.scss';
import Hero from '../components/hero'
import AdditionalServices from '../components/additionalServices'
import PackageOption from '../components/packageOption'
import carIcon from '../assets/picto-car.png';
import ReasonCard from '../components/reasonCard'

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
      <h1 className="centered-title">4 bonnes raisons d’opter pour Arval Switch</h1>
      <div className="reasonCardsContainer">
        <ReasonCard 
          title="Accélérez la transition électrique de votre flotte" 
          detail="Tout en levant les freins de vos collaborateurs les plus réticents quant à l’autonomie de leur véhicule."
          backgroundColor="#f0f4c3"
        />
        <ReasonCard 
          title="Renforcez l'attractivité RH de votre entreprise"
          detail="Offrez à vos collaborateurs une solution pratique pour leurs trajets longue distance."
          backgroundColor="#fff9c4"
        />
      </div>
      <div className="reasonCardsContainer">
        <ReasonCard 
          title="Maîtrisez votre budget"
          detail="Fixe et connu à l’avance, le tarif mensuel du forfait Arval Switch est inclus dans le contrat de location du véhicule électrique."
          backgroundColor="#e1f5fe"
        />
        <ReasonCard 
          title="Simplifiez votre gestion"
          detail="Vous n’avez rien à faire : la réservation, la mise à disposition et la remise du véhicule thermique s’effectuent par le collaborateur lui-même en direct avec Arval."
          backgroundColor="#b3e5fc"
        />
      </div>
    </main>
  );
};

export default MainContent;
