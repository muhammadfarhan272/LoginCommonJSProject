// Destructuring of object
const  LoginPage  = require("../../Pages/LoginPage.po");
const { ProductPage, Product } = require("../../Pages/ProductDetail.po");

let loginPage = new LoginPage();
let productPage = new ProductPage();
let product = new Product();

describe("CommonJS login and product add to card", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("base_url"));
  });
  it("Login Page and Product Details", () => {
    loginPage.typeUserName("standard_user");
    loginPage.typePassword("secret_sauce");
    loginPage.pressLoginButton();
    cy.log("Login page successfully ");
    cy.get(".title").should("have.text", "Products");

    product.clickProduct();
    productPage.assertionForBackToProductsButton();
    productPage.pressAddToCardButton();
  });
});
