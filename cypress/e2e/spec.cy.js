/// <reference types="cypress" />

describe('US-012-FUNCIONALIDADE: CADASTRO DE MEMBROS', () => {
  it('DEVE FAZER O CADASTRO DE CAMPOS OBRIGATORIOS', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#signup-firstname').type('NomeTeste')
    cy.get('#signup-lastname').type('SobrenomeTeste')
    cy.get('#signup-email').type('Sobrenome2@Teste.COM')
    cy.get('#signup-phone')
    cy.get('#signup-password').type('TESTE&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain','Cadastro realizado com sucesso')  
  })
})