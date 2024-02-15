require('cypress-xpath')

describe('Тестирование авторизации', () => {
  it('Успешная авторизация пользователя', () => {
    cy.visit('/sedmax/web/ui/login');
    cy.xpath('//*[@id="main"]/div/div/form/div[1]/div/div/div/div/span/input').type('frgrgrg');
    cy.get('#Password').type('grggrь');
    cy.get('button[type="submit"]').click();
    cy.xpath('//*[@id="main"]/div/div/form/div[3]/div/div').should('have.text', 'Неверные логин или пароль');
  });
});