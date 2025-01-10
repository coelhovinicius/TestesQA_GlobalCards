# Projeto de Automação com Cypress

Este projeto contém testes automatizados para aplicações Web e APIs utilizando Cypress. Siga as instruções abaixo para configurar o ambiente e executar os testes.

-----------------------------------------------------------------------

## Requisitos

- Node.js (https://nodejs.org/)
- npm (incluído com a instalação do Node.js)

-----------------------------------------------------------------------

##Configuração do Cypress:
- Arquivo: cypress.json;
- Adicione o arquivo cypress.json na raiz de cada projeto (AutomacaoWeb e AutomacaoAPI) com a seguinte configuração JSON:
	{
	  "baseUrl": "https://www.advantageonlineshopping.com",
	  "viewportWidth": 1280,
	  "viewportHeight": 720
	}


-----------------------------------------------------------------------

## Instalação

1. **Clone o Repositório:**
   git clone <URL-do-repositorio>

2. Navegue até o Diretório do Projeto:
- Para testes web: Os arquivos estão na pasta AutomacaoWeb;
- Para testes API: Os arquivos estão na pasta AutomacaoAPI.

3. Instale as Dependências:
Execute o seguinte comando na raiz de cada diretório do projeto (AutomacaoWeb e AutomacaoAPI): npm install.

-----------------------------------------------------------------------

Estrutura do Projeto

AutomacaoWeb - Testes Web:
Arquivos:
- buscar_produto.cy.js;
- incluir_produto_ao_carrinho.cy.js;
- validar_tela_de_pagamento.cy.js.
- Localização: AutomacaoWeb/cypress/e2e/.

AutomacaoAPI - Testes de API:
Arquivos:
- GET_Produtos.cy.js;
- POST_Produtos.cy.js;
- Localização: AutomacaoAPI/cypress/e2e/.

Imagem para Testes:
- Arquivo: AutomacaoQA.jpg;
- Localização: AutomacaoAPI/cypress/fixtures/

-----------------------------------------------------------------------

Executando os Testes

Testes Web:
- Navegue até (ou crie) o diretório AutomacaoWeb;
- Para o teste de Busca de Produtos, execute o comando: npx cypress run --spec "cypress/e2e/buscar_produto.cy.js";
- Para o teste de Inclusão de Orodutos, execute o comando: npx cypress run --spec "cypress/e2e/incluir_produto_ao_carrinho.cy.js";
- Para o teste de Validação de Tela de Pagamento, execute o comando: npx cypress run --spec "validar_tela_de_pagamento.cy.js".

-----------------------------------------------------------------------

Observações:
- Certifique-se de que o caminho para o arquivo de teste (cypress/e2e/nome_do_teste.cy.js) esteja correto. Você pode ajustar conforme necessário se a estrutura de diretórios for diferente.

Saída de Resultados: Quando o teste for executado, você verá os resultados diretamente no CMD.

-----------------------------------------------------------------------

Suporte: Se você encontrar problemas ou tiver dúvidas, entre em contato com o administrador do projeto.

