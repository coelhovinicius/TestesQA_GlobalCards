/// <reference types="cypress"/>

describe('Validação da tela de pagamento', () => {

    it('Validar a tela de pagamento', () => {
        cy.visit('https://advantageonlineshopping.com/#/') // Acessar o site para busca
        cy.get('#mobileSearch > #menuSearch').click() // Clica na lupa para abrir a barra de busca
        cy.get('#mobileSearch > .roboto-medium').type('laptop') // Digitar o termo de busca
        cy.get('#mobileSearch > #menuSearch').click() // Clicar no botão de lupa
        cy.get('.select').contains('laptop') // Validação do produto buscado
        cy.get(':nth-child(1) > :nth-child(4) > .productName').click() // Clicar no produto para entrar na página do produto
        cy.get('.fixedBtn > .roboto-medium').click() // Clicar no botão de incluir ao carrinho
        cy.get('#shoppingCartLink').click() // Clicar no botão de carrinho
        cy.get('.fixedTableEdgeCompatibility > tfoot > :nth-child(1) > [colspan="2"] > .roboto-medium') // Valida se há valores na tela de pagamento
            .invoke('text')
            .then(parseFloat)
            .should('not.equal', 0)
        cy.get('#checkOutButton').click()
        cy.get('.roboto-bold > .roboto-medium')
            .invoke('text')
            .then(parseFloat)
            .should('not.equal', 0)
    })
})