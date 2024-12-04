import React from 'react'
import { useLocation } from 'react-router-dom'  // useLocation import'u
import Footer from '../components/Footer/Footer'
import './Success.css'

const Success = () => {
  const location = useLocation()
  const successOrder = location.state  // state ile gönderilen veriyi alıyoruz

  return (
    <>
      <div className="success">
        <div className="success-container">
          <h1>Teknolojik Yemekler</h1>
          <h2 className="lezzet">lezzetin yolda</h2>
          <h2>SİPARİŞ ALINDI!</h2>
          <hr />
          <div className="bilgi-baslik">
            <p className="bilgi-p1">Position Absolute Acı Pizza</p>
          </div>
          <div className="bilgi-icerik">
            <p className="bilgi-p2">
              Boyut: <strong>{successOrder.size}</strong>
            </p>
            <p className="bilgi-p3">
              Hamur: <strong>{successOrder.paste}</strong>
            </p>
            <p className="bilgi-p4">
              Ek Malzemeler: <strong>{successOrder.material.join(' , ')}</strong>
            </p>
          </div>
          <div className="sonuc">
            <p className="sonuc-p1">Sipariş Toplamı</p>
            <p className="sonuc-p2">Seçimler <span className="sonuc-p4">{successOrder.material.length * 5} ₺</span></p>
            <p className="sonuc-p3">Toplam <span className="sonuc-p5">{successOrder.total}₺</span></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Success
