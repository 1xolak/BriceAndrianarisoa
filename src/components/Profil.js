// src/components/Header.js
import React from "react";

function Profil() {
  return (
    <section className="Profil">
        <img src="/images/OIP.jpeg" alt="Mon profil" className="profile-image" />
            <div className="profile-text">
              <h2>Brice Andrianarisoa</h2>
              <p>Graphic Designer UI/UX . Always looking for new challenges !</p>
            </div>
    </section>
  );
}

export default Profil;
