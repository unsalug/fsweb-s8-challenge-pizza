import React from 'react';
import { useHistory } from 'react-router-dom';
import './HomeAdv.css';

const HomeAdv = () => {
  const history = useHistory();

  const handleOrderClick = () => {
    history.push('/pizza');
  };

  return (
    <div className="home-adv-container">
      <div className="home-adv-content">
        <div className="home-adv-left home-adv-card">
          <h2>Özel Lezzetus</h2>
          <p>Position:Absolute Acı Burger</p>
          <button onClick={handleOrderClick}>SİPARİŞ VER</button>
        </div>
        <div className="home-adv-right">
          <div className="home-adv-right1 home-adv-card">
            <h3>Hackathlon Burger Menü</h3>
            <button onClick={handleOrderClick}>SİPARİŞ VER</button>
          </div>
          <div className="home-adv-right2 home-adv-card">
            <h3>
              <span className="require">Çoooook</span>{' '}
              <span className="dark-text">hızlı npm gibi kurye</span>{' '}
            </h3>
            <button onClick={handleOrderClick}>SİPARİŞ VER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAdv;
