import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "../styles/FormPizza.css";




const FormPizza = () => {
  const [size, setSize] = useState("");
  const [adet, setAdet] = useState(1);
  const [name, setName] = useState("");
  const [not, setNot] = useState("");
  const [malzeme, setMalzeme] = useState([]);
  const a = 85.5;
  const [total, setTotal] = useState(85.5);
  const [secimler, setSecimler] = useState(0.0);
  const [setErrorMessage] = useState("");
  const [hamur, setHamur] = useState("");

  const history = useHistory();

  const FormPizzaSchema = Yup.object().shape({
    name: Yup.string().min(3),
    malzeme: Yup.array().test(
      "max-selected",
      "En fazla 3 seçenek seçilebilir.",
      (value) => {
        if (value && value.length > 3) {
          return false;
        }
        return true;
      }
    ),
  });

  const handleCongr = () => {
    history.push("/congratulations")
};

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleHamurChange = (e) => {
    setHamur(e.target.value);
  };

  const handleAdetChange = (newAdet) => {
    setAdet(newAdet);

    let secimler = malzeme.length * newAdet * 5;
    setSecimler(secimler);

    let total = (a + malzeme.length * 5) * newAdet;
    setTotal(total);
  };

  const handleMalzemeChange = (e) => {
    const selectedMalzeme = Array.from(
      document.querySelectorAll('input[name="malzeme"]:checked')
    ).map((input) => input.value);
    setMalzeme(selectedMalzeme);

    if (selectedMalzeme.length > 10) {
        e.target.checked = false;
        alert("En fazla 10 malzeme seçebilirsiniz!");
        return;
      }

    let secimler = selectedMalzeme.length * adet * 5;
    setSecimler(secimler);
  };

  useEffect(() => {
    let newTotal = (a + malzeme.length * 5) * adet;
    setTotal(newTotal);
  }, [adet, malzeme]);

  function handleNotChange(e) {
    setNot(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    FormPizzaSchema.validate({ malzeme,name })
    .then(() => {
        const order = {
          name,
          size,
          hamur,
          malzeme,
          not,
          Fiyat: total,
          adet,
        };

        axios
          .post("https://reqres.in/api/users", order)
          .then((response) => {
            console.log("Sipariş başarıyla gönderildi:", response);
            setName("");
            setSize("");
            setHamur(""); 
            setMalzeme([]);
            setNot("");
            history.push("/congr");
          })
          .catch((error) => {
            console.error("Sipariş gönderilirken hata oluştu:", error);
          });
      })
      .catch((err) => {
        console.log(err.errors);
        if (err.errors.name) {
          setErrorMessage("Lütfen bir isim giriniz.");
        }
      });
  };
    return (
        <>
          <div className="container2">
            <div className="header">
              <div>
                <div>
                  <h2 className="tekno">Teknolojik Yemekler</h2>
                </div>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Anasayfa</Link>
                    </li>
                    
                    <li>
                      <Link to="/order-pizza" style={{ fontWeight: "bold" }}>
                        Sipariş Oluştur
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="siparis-body">
            <br />
            <h2>Position Absolute Acı Pizza</h2>
            <br />
            <h3>85,50 ₺</h3>
            <p>
              Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
              pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
              diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
              ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
              düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
              lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
            </p>
            <br />
            <form id="pizza-form" onSubmit={handleSubmit}>
                    <label htmlFor="name-input">
                    <b>
                    İsim Soyisim <span className="required">*</span>
                    </b>{" "}
                    </label>
                    <input
                        type="text"
                        id="name-input"
                        name="name-input"
                        value={name}
                        onChange={handleNameChange}
                        required
                        minLength={3}
                    />
                <div style={{ display: "flex",  marginTop: "1rem", gap: "8rem" }}>
                    <div>
                    <label htmlFor="size-dropdown">
                        Boyut Seç<span className="required">*</span>{" "}
                    </label>
                    <label style={{ display: "block", marginBottom: "0.5rem" }}>
                        <input
                        type="radio"
                        name="size"
                        value="small"
                        checked={size === "small"}
                        onChange={handleSizeChange}
                        style={{ marginRight: "0.5rem" }}
                        />
                        Küçük
                    </label>

                    <label style={{ display: "block", marginBottom: "0.5rem" }}>
                        <input
                        type="radio"
                        name="size"
                        value="medium"
                        checked={size === "medium"}
                        onChange={handleSizeChange}
                        style={{ marginRight: "0.5rem" }}
                        />
                        Orta
                    </label>

                    <label style={{ display: "block", marginBottom: "0.5rem" }}>
                        <input
                        type="radio"
                        name="size"
                        value="large"
                        checked={size === "large"}
                        onChange={handleSizeChange}
                        style={{ marginRight: "0.5rem" }}
                        />
                        Büyük
                    </label>
                </div>
                <br />
                <div className="hamur-sec-container">
                    <label htmlFor="hamur-dropdown">
                    Hamur Seç<span className="required">*</span>
                    </label>
                    <select
                    id="hamur-dropdown"
                    name="hamur-dropdown"
                    value={hamur}
                    onChange={handleHamurChange}
                    required
                    >
                    <option value="">Hamur Kalınlığı</option>
                    <option value="thin">İnce</option>
                    <option value="thick">Kalın</option>
                    </select>
                </div>
            </div>
              <br />
              <label htmlFor="malzeme-checkboxes">
                <b>
                  Ek Malzemeler<span className="required">*</span>
                </b>
              </label>{" "}
              <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
              <br />
              <div id="malzeme-checkboxes">
                <label htmlFor="pepperoni-checkbox">
                  <input
                    type="checkbox"
                    name="malzeme"
                    value="pepperoni"
                    onChange={handleMalzemeChange}
                  />
                  Pepperoni
                </label>
                <label htmlFor="sosis-checkbox">
                  <input
                    type="checkbox"
                    name="malzeme"
                    value="sosis"
                    onChange={handleMalzemeChange}
                  />
                  Sosis
                </label>
                <label htmlFor="jambon-checkbox">
                  <input
                    type="checkbox"
                    name="malzeme"
                    value="jambon"
                    onChange={handleMalzemeChange}
                  />
                  Kanada Jambonu
                </label>
                <label htmlFor="izgara-checkbox">
                  <input
                    type="checkbox"
                    name="malzeme"
                    value="ızgara"
                    onChange={handleMalzemeChange}
                  />
                  Tavuk Izgara
                </label>
                <label htmlFor="sogan-checkbox">
                  <input
                    type="checkbox"
                    name="malzeme"
                    value="sogan"
                    onChange={handleMalzemeChange}
                  />
                  Soğan
                </label>
                <label htmlFor="domates-checkbox">
                  <input
                    type="checkbox"
                    name="malzeme"
                    value="domates"
                    onChange={handleMalzemeChange}
                  />
                  Domates
                </label>
                <label htmlFor="misir-checkbox">
                  <input
                    type="checkbox"
                    name="malzeme"
                    value="misir"
                    onChange={handleMalzemeChange}
                  />
                  Mısır
                </label>
                <label htmlFor="sucuk-checkbox">
                  <input
                    type="checkbox"
                    name="malzeme"
                    value="sucuk"
                    onChange={handleMalzemeChange}
                  />
                  Sucuk
                </label>
                <label htmlFor="jalepeno-checkbox">
                  <input
                    type="checkbox"
                    name="malzeme"
                    value="jalepeno"
                    onChange={handleMalzemeChange}
                  />
                  Jalepeno
                </label>
                <label htmlFor="sarimsak-checkbox">
                  <input
                    type="checkbox"
                    name="malzeme"
                    value="sarimsak"
                    onChange={handleMalzemeChange}
                  />
                  Sarımsak
                </label>
                <label htmlFor="biber-checkbox">
                  <input
                    type="checkbox"
                    name="malzeme"
                    value="biber"
                    onChange={handleMalzemeChange}
                  />
                  Biber
                </label>
                <label htmlFor="ananas-checkbox">
                  <input
                    type="checkbox"
                    name="malzeme"
                    value="ananas"
                    onChange={handleMalzemeChange}
                  />
                  Ananas
                </label>
                <label htmlFor="kabak-checkbox">
                  <input
                    type="checkbox"
                    name="malzeme"
                    value="kabak"
                    onChange={handleMalzemeChange}
                  />
                  Kabak
                </label>
              </div>
              <br />
              <br />
              <label htmlFor="not-text">Sipariş Notu</label>
              <br />
              <input
                type="text"
                id="not-text"
                name="not-text"
                value={not}
                onChange={handleNotChange}
                placeholder="Siparişine eklemek istediğin bir not var mı ?"
              />
              <br />
              <br />
              <div className="cizgi"></div>
              <br />
              <div className="adet-ve-siparis">
                <div className="adet-bolumu">
                  <button
                    className="minus-button"
                    type="button"
                    onClick={() => {
                      if (adet > 1) {
                        handleAdetChange(adet - 1);
                      }
                    }}
                  >
                    -
                  </button>
    
                  <div className="adet-kutusu">
                    <span className="adet-sayisi">{adet}</span>
                  </div>
    
                  <button
                    className="plus-button"
                    type="button"
                    onClick={() => handleAdetChange(adet + 1)}
                  >
                    +
                  </button>
                </div>
    
                <div className="siparis-bolumu">
                  <div>Sipariş Toplamı</div>
                  <div className="secimler">
                    {" "}
                    <span>Seçimler:</span> <span>{secimler} ₺</span>
                  </div>
                  <div className="secimler" style={{ color: " #ce2829" }}>
                    <span>Toplam:</span> <span>{total} ₺</span>
                  </div>
    
                  <button id="order-button" onClick={handleCongr} type="submit">
                    SİPARİŞ VER
                  </button>
                </div>
              </div>
            </form>
          </div>
    
          <div className="footer"></div>
        </>
      );
}

export default FormPizza
