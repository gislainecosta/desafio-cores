# Desafio das cores

### *Este teste foi desenvolvido pela SoftExpert para o cargo de Desenvolvedor web frontend, sendo realizado por Gislaine Costa.* [Link do Repositório Inicial](https://github.com/gustavoittner/AnalyticsDesafioFront)
<br>

## Sumário
  - [Como o jogo funciona](#como-o-jogo-funciona)
  - [Requisitos do projeto](#requisitos-do-projeto)
  - [Ferramentas e Tecnologias Utilizadas](#ferramentas-e-tecnologias-utilizadas)
  - [Instruções de início](#instruções-de-início)
<br>

## Como o jogo funciona
O jogo consiste em acertar o máximo possível de cores em 30s. Quando o jogo inicia, uma cor aleatória irá aparecer e para ela deverão aparecer 3 opções de resposta (obrigatoriamente em hexadecimal). Sendo duas incorretas (geradas aleatoriamente), e uma correta. A cada rodada, uma nova cor aparece, e o jogador terá 10s para responder e resultar em ganho ou perda de pontuação:
- Se o jogador não responder a tempo, ele perde 2 pontos.
- Se o jogador responder a tempo, mas errado, perderá 1 ponto.
- Se o jogador responder a tempo e corretamente, ganhará 5 pontos.
- Não deve ser possível pontuação negativa. O zero é a pontuação mínima permitida.
O jogo conta também com o máximo de pontuação que já foi feita em uma partida. E a pontuação da partida atual. Existirá também à esquerda, um histórico das cores referentes a partida atual, que dirá de forma visual quais o jogador acertou, quais errou, e em quanto tempo foram respondidas. A cada vez que uma partida é iniciada, essa pilha é resetada.
<br>

## Requisitos do projeto
- O jogo só deve começar quando o jogador decidir (representado no protótipo por START)
- Caso o jogador atualize, ou feche a página:
  - HIGH SCORE deverá persistir.
  - Se um jogo estiver em andamento, ignorar e jogar fora seus dados. Voltando ao estado inicial com o botão START
  - Pilha referente a última partida concluída deverá persistir
- Se o jogador quiser, ele poderá reiniciar a partida a qualquer momento
- Se o jogador quiser, ele poderá limpar todos os dados já salvos pelo jogo.
- Ao começar o jogo, deve existir uma barra indicando 100% (30 segundos). Conforme o tempo vai diminuindo, a barra vai diminuindo proporcionalmente, até chegar em 0% (0 segundos).
- Caso o usuário não forneça uma resposta dentro de 10s, uma resposta errada deve ser computada e a barra de progresso deve continuar sendo decrementanda. Ou seja, em um intervalo de 30s, caso o usuário não responda nenhuma vez, haverão 3 respostas erradas que foram computadas automaticamente pelo sistema (30 segundos divididos por 10 segundos resulta em 3).
- Só deve existir uma barra que será decrementada, apesar de existirem dois timers paralelos rodando, sendo eles:
  - Timer geral (30s)
  - Sub timer limite para cada resposta (10s)
- Toda vez que uma resposta nova é fornecida, o timer de 10s deve ser resetado, mas o de 30s continua.
- A barra deve sempre refletir o timer geral (30s). O timer de 10s não deve ser representado visualmente na barra.
<br>

## Ferramentas e Tecnologias Utilizadas
- ReactJs com Typescript
- React Router DOM
- Styled Components
- Git
<br>

## Instruções de início
1. Após clonar e acessar o repositório, instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `yarn`
  * Inicialize o projeto:
    * `yarn dev` (A aplicação será iniciada em http://localhost:3000/)
