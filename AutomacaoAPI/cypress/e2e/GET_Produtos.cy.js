/// <reference types="cypress"/>

describe('GET Produtos', () => {

    const produto = 'laptop';
    
    it('Buscar produto pelo nome', () => {
        // Fazendo a requisição GET
        cy.request({
            method: 'GET',
            url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/', // URL da API
            qs: { productName: produto }  // Query string para buscar produtos
        }).then((response) => {
            expect(response.status).to.eq(200); // Confirmar que o status code é 200
            const products = response.body.products 
            expect(products).to.have.length.greaterThan(0); // Verifica que a lista de produtos não está vazia
            // Verificar se algum produto contém a palavra "laptop" no nome
            const productNamesContainLaptop = products.some(product => product.productName.toLowerCase().includes('laptop'));
            expect(productNamesContainLaptop).to.be.true; // Verifica se pelo menos um produto contém "laptop" no nome
        });
    });
});
