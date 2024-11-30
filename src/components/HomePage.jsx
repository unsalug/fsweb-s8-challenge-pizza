import React from 'react'
import { useHistory } from 'react-router-dom'
import "../styles/HomePage.css";


const HomePage = () => {
    const history = useHistory();

    const handleOrder = () => {
        history.push("/order-pizza")
    };

  return (
    <div className="container">
      <div>
        <h1>Teknolojik Yemekler</h1>
        <p className="kodAc">
          KOD ACIKTIRIR <br /> PİZZA, DOYURUR
        </p>
        <button id="ac" onClick={handleOrder}>
          ACIKTIM
        </button>
      </div>
      <div className="banner">
        {" "}
        <img id="banner" src="Assets/Iteration-1-assets/home-banner.png" alt="Pizza" />
      </div>
    </div>
  )
}

export default HomePage