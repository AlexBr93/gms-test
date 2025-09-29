/// <reference types="cypress" />

describe('US-012-FUNCIONALIDADE: CADASTRO DE MEMBROS', () => {
beforeEach(() => {
  cy.visit('/')
});


afterEach(() => {
cy.screenshot()
  
});

  it('DEVE FAZER O CADASTRO DE CAMPOS OBRIGATORIOS', () => {
    var email = `fabio${Date.now()}@teste.com.br`
    cy.preencherCadastro('Fabio', 'Vilela', email, '11999999999', 'Teste@123456')
     cy.get('#signup-response').should('contain','Cadastro realizado com sucesso') 
  })

  it('Deve Validar mensagem de erro com o campo nome invalido', () => {
    cy.preencherCadastro('Fabio20', 'Vilela', 'fabio@teste.com', '11999999999', 'Teste@123456')
cy.get('#signup-response').should('contain','Nome deve conter apenas caracteres alfabéticos')
})
it('Deve Validar mensagem de erro com o campo nome invalido', () => {
    cy.preencherCadastro('Fabio', 'Vilela20', 'fabio@teste.com', '11999999999', 'Teste@123456')
    cy.get('#signup-response').should('contain','Sobrenome deve conter apenas caracteres alfabéticos')
})
it('Deve Validar mensagem de erro com o campo nome invalido', () => {
    cy.preencherCadastro('Fabio', 'Vilela', 'fabio@teste.com', '11999999999', 'Teste@123456')
    cy.get('#signup-response').should('contain','Email deve ser um email válido')
})
it('Deve Validar mensagem de erro com o campo nome invalido', () => {
    cy.preencherCadastro('Fabio', 'Vilela', 'fabio@teste.com', '11999999999', '456')
    cy.get('#signup-response').should('contain','Senha deve ter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial')
})
})

