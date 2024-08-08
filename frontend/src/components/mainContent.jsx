// src/components/mainContent.jsx
import React from 'react';
import '../styles/mainContent.scss'; // Assurez-vous de créer ce fichier CSS
import Hero from '../components/hero'
import AdditionalServices from '../components/additionalServices'
import PackageOption from '../components/packageOption'

const MainContent = () => {
  const essentials = [
    "Vos collaborateurs peuvent choisir des véhicules de catégorie Citadine, Compacte, Routière, Confort (automatique) et petit Monospace."
  ];
  const essentialsPlus = [
    "Confort (automatiques), Moyen et Grand Monospace (7 places)."
  ];

  return (
    <main className="main-content">
      <Hero />
      <AdditionalServices/>
      <h1>Comment souscrire le forfait Arval switch ?</h1>
      <h2>2 formules sont proposées :</h2>
      <PackageOption title="Arval Switch Essentiel" details={essentials} />
      <PackageOption title="Arval Switch Essentiel plus" details={essentialsPlus} />
      <h1>4 bonnes raisons d’opter pour Arval Switch</h1>
    </main>
  );
};

export default MainContent;
