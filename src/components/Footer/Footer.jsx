import React from 'react'
import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // FontAwesome bileşeni
import { faTwitter } from '@fortawesome/free-brands-svg-icons' // Twitter ikonu

import contact1 from './FooterIcons/icon-1.png'
import contact2 from './FooterIcons/icon-2.png'
import contact3 from './FooterIcons/icon-3.png'

const insta = ["insta0", "insta1", "insta2", "insta3", "insta4", "insta5"]

const contacts = [
  ['341 Londonderry Road, Istanbul Türkiye', contact1],
  ['aciktim@teknolojikyemekler.com', contact2],
  ['+90 216 123 45 67', contact3],
]

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-contacts">
            <h2>
              <span>Teknolojik</span>
              <span>Yemekler</span>
            </h2>

            {contacts.map((contact, index) => (
              <div key={index} className="footer-contact">
                <img src={contact[1]} alt="contact icon" />
                <p>{contact[0]}</p>
              </div>
            ))}
          </div>
          <div className="footer-menu">
            <h3>Hot Menu</h3>
            <p>Terminal Pizza</p>
            <p>5 Kişilik Hackathlon Pizza</p>
            <p>useEffect Tavuklu Pizza</p>
            <p>Beyaz Console Frosty</p>
            <p>Testler Geçti Mutlu Burger </p>
            <p>Position Absolute Acı Burger</p>
          </div>
          <div className="footer-gallery">
            <h4>Instagram</h4>
            <div className="footer-gallery-photos">
              {insta.map((foto, i) => (
                <img key={i} src={`./insta/li-${i}.png`} alt="insta" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-container">
        <div className="footer-bottom">
          <p>© 2023 Teknolojik Yemekler.</p>
          <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
