describe('Agenda de Contatos', () => {
  const url = 'https://agenda-contatos-react.vercel.app/';

  beforeEach(() => {
    cy.visit(url);
  });

  it('deve adicionar um novo contato', () => {
    cy.get('input[placeholder="Nome"]').should('be.visible').type('Teste_Cypress');
    cy.get('input[placeholder="E-mail"]').should('be.visible').type('teste@example.com');
    cy.get('input[placeholder="Telefone"]').should('be.visible').type('123456789');
    cy.get('button.adicionar').click();
    
    // Verifica se o novo contato foi adicionado
    cy.contains('Teste_Cypress').should('be.visible');
    cy.contains('teste@example.com').should('be.visible');
    cy.contains('123456789').should('be.visible');
  });

  it('deve editar um contato existente', () => {
    // Aguarda os contatos aparecerem e encontra o contato "Teste_Cypress"
    cy.contains('Teste_Cypress').parent().within(() => {
      cy.get('button.edit').should('exist').should('be.visible').click();
    });

    cy.get('input[placeholder="Nome"]').clear().type('Teste_Cypress_Editado');
    cy.get('input[placeholder="E-mail"]').clear().type('testeeditado@example.com');
    cy.get('input[placeholder="Telefone"]').clear().type('987654321');
    cy.get('button.alterar').click();

    cy.contains('Teste_Cypress_Editado').should('be.visible');
    cy.contains('testeeditado@example.com').should('be.visible');
    cy.contains('987654321').should('be.visible');
  });

  it('deve remover um contato existente', () => {
    // Aguarda os contatos aparecerem e encontra o contato "Teste_Cypress_Editado"
    cy.contains('Teste_Cypress_Editado').parent().within(() => {
      cy.get('button.delete').should('be.visible').click();
    });

    cy.contains('Teste_Cypress_Editado').should('not.exist');
    cy.contains('testeeditado@example.com').should('not.exist');
    cy.contains('987654321').should('not.exist');
  });
});
