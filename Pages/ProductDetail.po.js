class Product {
  product = "#item_1_title_link";

  clickProduct() {
    cy.get(this.product).click();
  }
}
class ProductPage {
  backButton = '[data-test="back-to-products"]';
  addToCardButton = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]';

  assertionForBackToProductsButton() {
    cy.get(this.backButton).should("have.text", "Back to products");
  }
  pressAddToCardButton() {
    cy.get(this.addToCardButton).click();
  }
}

module.exports = { ProductPage, Product };
