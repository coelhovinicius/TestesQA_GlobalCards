/// <reference types="cypress"/>

describe('Buscar produto', () => {

    it('Buscar produto com sucesso', () => {
        cy.visit('https://advantageonlineshopping.com/#/') // Acessar o site para busca
        cy.get('#mobileSearch > #menuSearch').click() // Clica na lupa para abrir a barra de busca
        cy.get('#mobileSearch > .roboto-medium').type('laptop') // Digitar o termo de busca
        cy.get('#mobileSearch > #menuSearch').click() // Clicar no botão de lupa
        cy.get('.select').contains('laptop') // Validação do produto buscado
    })
})