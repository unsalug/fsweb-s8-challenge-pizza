describe("Form Gönderme Testi", () => {
  it("Submits the form with name and malzeme", () => {
    cy.visit("http://localhost:5174/order-pizza");

    // İnputa isim gir
    cy.get('input[name="name-input"]').type("ugur");

    // Boyut seç
    cy.get('input[name="size"][value="large"]').check();

    // malzeme seç
    cy.get('input[name="malzeme"][value="domates"]').check();
    cy.get('input[name="malzeme"][value="sucuk"]').check();

    // Özel istekler
    cy.get('input[name="not-text"]').type("Mayonez gönderin");

    // Formu gönder
    cy.get('button[type="submit"]').click();
  });
});

describe("Position Absolute Acı Pizza tagi sayfada görünüyor", () => {
  it("should be visible on the page", () => {
    cy.visit("http://localhost:5174/order-pizza");
    cy.contains("h2", "Position Absolute Acı Pizza").should("be.visible");
  });
});

describe("Navbar ve öğeleri sayfada görünüyor", () => {
  it("should have 2 items", () => {
    cy.visit("http://localhost:5174/order-pizza");
    cy.get("nav ul li").should("have.length", 2);
  });
});

describe("Sipariş butonu", () => {
  it("should be visible on the page", () => {
    cy.visit("http://localhost:5174/order-pizza");
    cy.contains("SİPARİŞ VER").should("be.visible");
  });
});

describe("10'dan fazla malzeme seçilemiyor", () => {
  it("should not allow more than 10 malzeme", () => {
    cy.visit("http://localhost:5174/order-pizza");
    [
      "pepperoni", "sosis", "jambon", "ızgara", "sogan",
      "domates", "misir", "sucuk", "jalepeno", "sarimsak"
    ].forEach((topping) => {
      cy.get(`input[name="malzeme"][value="${topping}"]`).check();
    });

    cy.get('input[name="malzeme"][value="biber"]').check();

    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("En fazla 10 malzeme seçebilirsiniz!");
    });
  });
});
