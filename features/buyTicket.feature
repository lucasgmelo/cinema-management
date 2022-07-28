Feature: Compra de ingressos

    Como um cliente
    Quero poder selecionar uma sessão, escolher um assento disponível,
    e assim escolher o tipo de ingresso e forma de pagamento

    Scenario: Compra de ingressos disponíves     
        Given Eu estou logado como "cliente"
        And Eu escolho a sessão do "homem-aranha" da lista de filmes
        And A sessão está disponível
        When Eu escolho "dois" assentos disponíveis
        Then Eu sou redirecionado para a página de pagamento
        When Eu escolho comprar "meia entrada" dos ingressos
        And Escolho pagar com "cartão de crédito"
        And O pagamento é efetuado
        Then Recebo meus ingressos

    Scenario: Compra de ingressos indisponíveis     
        Given Eu estou logado como "cliente"
        And Eu escolho a sessão do "homem-aranha" da lista de filmes
        And A sessão está disponível
        When Eu escolho "dois" assentos indisponíveis
        Then Recebo uma mensagem de erro
        And Permaneço na página de seleção de assentos

