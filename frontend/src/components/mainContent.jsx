// src/components/MainContent.jsx
import React from 'react';
import '../styles/mainContent.css'; // Assurez-vous de créer ce fichier CSS

const MainContent = () => {
  return (
    <main className="main-content">
      <section className="section introduction">
        <h2>Le duo électrique-thermique Arval switch : mode d’emploi</h2>
        <p>
          Avec Arval Switch, vos collaborateurs gagnent en autonomie sur la route, mais aussi pour réserver leur véhicule !
          Aucune action n’est requise de votre part : l’ensemble de la prestation est géré de bout en bout par Arval, en direct avec les conducteurs.
        </p>
      </section>

      <section className="section reservation">
        <h2>Processus de Réservation</h2>
        <ul>
          <li>Demande de mise à disposition d’un véhicule thermique ou hybride, en précisant la catégorie souhaitée.</li>
          <li>Réservé rapidement dans l’une des 1 400 agences du réseau partenaire d’Arval, réparties dans toute la France métropolitaine.</li>
          <li>Confirmation par SMS et/ou mail incluant la période de réservation, les coordonnées de l’agence, et le solde restant.</li>
        </ul>
      </section>

      <section className="section additional-services">
        <h2>Besoin de services additionnels ?</h2>
        <p>
          Arval Switch reste souple. Besoin d’équipements divers (siège bébé, rehausseur, coffre de toit, GPS…), d’assurances complémentaires, etc.
        </p>
      </section>

      <section className="section plans">
        <h2>Comment souscrire le forfait Arval switch ?</h2>
        <ul>
          <li>Arval Switch Essentiel : Véhicules de catégorie Citadine, Compacte, Routière, Confort (automatique) et petit Monospace.</li>
          <li>Arval Switch Essentiel Plus : En plus des véhicules de la formule Essentiel, inclut des véhicules Confort et Grand, et Moyen et Grand Monospace (7 places).</li>
        </ul>
      </section>

      <section className="section benefits">
        <h2>4 bonnes raisons d’opter pour Arval Switch</h2>
        <ol>
          <li>Accélérez la transition électrique de votre flotte tout en levant les freins de vos collaborateurs.</li>
          <li>Renforcez l’attractivité RH de votre entreprise en offrant des solutions pratiques pour les trajets longue distance.</li>
          <li>Maîtrisez votre budget avec un tarif mensuel fixe et connu à l’avance.</li>
          <li>Simplifiez votre gestion : réservation, mise à disposition, et remise du véhicule gérées directement par le collaborateur.</li>
        </ol>
      </section>
    </main>
  );
};

export default MainContent;
