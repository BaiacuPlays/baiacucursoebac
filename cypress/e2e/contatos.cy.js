describe('Testes da Agenda de Contatos', () => {
  const baseUrl = 'https://agenda-contatos-react.vercel.app/';

  beforeEach(() => {
    cy.visit(baseUrl);
    cy.contains('Adicionar').should('be.visible');
  });

  it('Deve incluir um novo contato', () => {
    cy.contains('Adicionar').click();
    
    
    // Verificar se o formulário está carregado antes de interagir com os inputs
    cy.wait(2000); // Espera de 2 segundos, ajuste conforme necessário
    cy.get('input[name="Nome"]').should('be.visible').then(($input) => {
      cy.log('Elemento encontrado:', $input);
    }).type('Teste_Cypress');
    cy.get('input[name="email"]').should('be.visible').type('teste@cypress.com');
    cy.get('input[name="telefone"]').should('be.visible').type('11999999999');
    cy.contains('Salvar').click();

    cy.contains('Teste Cypress').should('be.visible');
  });

  it('Deve alterar um contato existente', () => {
    // Implementar o teste de alteração aqui
  });

  it('Deve remover um contato', () => {
    // Implementar o teste de remoção aqui
  });
});
