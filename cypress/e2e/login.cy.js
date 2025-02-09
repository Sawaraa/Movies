describe('Login Component', () => {
  beforeEach(() => {
    // Відкриваємо сторінку логіну перед кожним тестом
    cy.visit('http://localhost:5173/login'); 
  });

  it('should allow the user to type email', () => {
    // Перевіряємо, що поле email існує і видиме
    cy.get('input[type="email"]')
      .should('exist') // Перевірка наявності елемента
      .should('be.visible') // Перевірка, чи видиме поле
      .type('testuser@example.com') // Вводимо email
      .should('have.value', 'testuser@example.com'); // Перевіряємо, що значення email введене
  });

  it('should allow the user to type password', () => {
    // Перевіряємо, що поле password існує і видиме
    cy.get('input[type="password"]')
      .should('exist') // Перевірка наявності елемента
      .should('be.visible') // Перевірка, чи видиме поле
      .type('password123') // Вводимо пароль
      .should('have.value', 'password123'); // Перевіряємо, що значення пароля введене
  });
});
