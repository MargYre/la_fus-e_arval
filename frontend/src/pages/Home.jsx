// Dans frontend/src/pages/Home.jsx
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import MainContent from "../components/mainContent";

function Home() {   
    return (
        <div className="home-container">
          <Header />
          <MainContent/>
          <Footer />
        </div>
      );
}

export default Home;