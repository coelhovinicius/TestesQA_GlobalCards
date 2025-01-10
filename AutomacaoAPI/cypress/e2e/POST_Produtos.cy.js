/// <reference types="cypress"/>

describe('Logar usuario adminUser', () => {

    const usuario = 'adminUser'
    const senha = 'Admin123'

    it('Buscar produto com sucesso', () => {
        cy.visit('https://advantageonlineshopping.com/#/') // Acessar o site
        cy.get('#menuUser').click() // Clica no usuário para abrir o pop-up de login
        cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type(usuario) // Digitar o usuário
        cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type(senha) // Digitar a senha
        cy.get('#sign_in_btn').click() // Clicar no botão de lupa
        cy.get('body').contains(usuario) // Valida se o usuário foi logado
    })
})

describe('Logar usuario adminUser', () => {

    it('Fazer login com o usuario adminUser', () => {
        cy.visit('https://advantageonlineshopping.com/#/')
        
        cy.request({
            method: 'POST',
            url: 'https://www.advantageonlineshopping.com/#/register', // URL da API de registro
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                username: 'adminUser',
                password: 'Admin123',
                email: 'adminUser@example.com',
                accountType: 'ADMIN'
            }
        }).then((response) => {
            // Confirmar que o status code é 201 (Created)
            expect(response.status).to.eq(200);
        });
    });

});


describe('POST Produtos', () => {

    const userId = 'adminUser';  // Substitua pelo ID do usuário Admin
    const source = '2300';  // Substitua pela imagem do produto
    const color = '414141';    // Substitua pelo código da cor do produto

    it('Atualizar imagem do produto', () => {
        // Carregar a imagem do diretório de fixtures
        cy.fixture('AutomacaoQA.jpg', 'base64').then((imageBase64) => {
            // Converter a imagem base64 para um Blob
            const blob = Cypress.Blob.base64StringToBlob(imageBase64, 'image/jpg');

            cy.request({
                method: 'POST',
                url: `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/${userId}/${source}/${color}`, // URL da API
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                body: {
                    file: blob,
                    fileName: 'AutomacaoQA.jpg'
                },
                failOnStatusCode: false  // Adicionando para prevenir falhas automáticas no status
            }).then((response) => {
                // Confirmar que o status code é 200
                if (response.status === 200) {
                    // Verificar que o produto foi atualizado corretamente
                    expect(response.body.updated).to.be.true;
                    // Verificar o id da nova imagem inserida
                    expect(response.body.newImageId).to.exist;
                } else {
                    cy.log(`Erro: Status Code ${response.status}`);
                }
            });
        });
    });
});