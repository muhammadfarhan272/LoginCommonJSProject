class LoginPage {
  userName = '[data-test="username"]';
  password = '[data-test="password"]';
  loginButton = '[data-test="login-button"]';
  typeUserName(userName) {
    cy.get(this.userName).type(userName);
  }
  typePassword(password) {
    cy.get(this.password).type(password);
  }
  pressLoginButton() {
    cy.get(this.loginButton).click();
  }
}
module.exports = LoginPage;
