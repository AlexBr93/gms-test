/// <reference types="cypress" />

describe('US-013-FUNCIONALIDADE: BUSCA DE Filmes', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  afterEach(() => {
    cy.screenshot()
  })

  it('Deve buscar um filme com sucesso', () => {
    cy.get('#search-input').type('Matrix')
    cy.get('#search-button').click()
    cy.get('#results-section').should('contain', 'Matrix')
  })

  it('Deve buscar filmes com sucesso de uma lista', () => {
    cy.fixture('filmes').then((filmes) => {
      cy.get('#search-input').type(filmes.titulo)
      cy.get('#search-button').click()
      cy.get('#results-section').should('contain', filmes.titulo)
    })
  })
    it('Deve exibir mensagem de erro ao buscar um filme inexistente', () => {
    cy.get('#search-input').type('FilmeInexistente123')
    cy.get('#search-button').click()
    cy.get('#error-message').should('be.visible').and('contain', 'Nenhum filme encontrado')
  })
  it('Deve exibir mensagem de erro ao buscar com campo vazio', () => {
    cy.get('#search-button').click()
    cy.get('#error-message').should('be.visible').and('contain', 'Por favor, insira um título de filme')
  })
  it('Deve buscar filmes com sucesso usando dados de um arquivo JSON', () => {
    cy.fixture('filmes').each((filmes) => {
        cy.get('#search-input').clear().type(filmes.titulo)
        cy.get('#search-button').click({ force: true })
        cy.get('#results-section').should('contain', filmes.titulo)
      })
    })
    })
