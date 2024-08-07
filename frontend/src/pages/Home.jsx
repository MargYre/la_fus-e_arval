// Dans frontend/src/pages/Home.jsx
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";

function Home() {   
    return (
        <div className="home-container">
          <Header />
          <Hero />
          <Footer />
        </div>
      );
}

export default Home;