# DTICase
# Projeto de Alocação de Drones para Entrega de Pedidos

Este projeto gerencia pedidos e drones para entrega, alocando drones conforme capacidade, distância e prioridade do pedido.

---

## Tecnologias

- React (frontend)
- Backend (JSON Server)

---

## Como rodar o projeto localmente

### 1. Clone o repositório

git clone https://github.com/gustavoalcantaran/DTICase.git

### 2.Abra o terminal na pasta onde o repositório foi clonado e instale as dependências e depois rode o programa

npm install  
npm start

### 3.Abra outro terminal na mesma pasta para rodar o backend

npm run backend

---
## Teste

Para fins de testes e validação da lógica de alocação, o projeto já conta com diversos pedidos e drones cadastrados no arquivo `db.json`.

### 📦 Pedidos cadastrados

Os pedidos têm diferentes:

- pesos
- localizações
- níveis de prioridade (Alta, Média e Baixa)
- status inicial: "Em espera"

### 🚁 Drones cadastrados

Cada drone possui diferentes:

- capacidades de carga (`spmax`)
- alcance de voo (`kmcarga`)
- nível de bateria (`battery`)
- status de ocupação (`busy`)

Isso permite testar a lógica de alocação em diversos cenários, como:

- Drones sem bateria suficiente
- Drones ocupados
- Pedidos fora do alcance
- Priorização correta de entregas

---
## Uso de Inteligência Artificial (IA)

Durante o desenvolvimento deste projeto, utilizei assistentes de IA (como o ChatGPT) para acelerar e melhorar o processo de implementação. Abaixo estão alguns dos prompts utilizados:

### 💬 Prompts utilizados

- **Organização de código:**
  > Como posso organizar minhas requisições ao backend em um projeto React?

- **Função de alocação de pedidos:**
  > Tenho drones com capacidade de carga e alcance diferentes. Como faço um algoritmo que aloque o drone ideal para cada pedido baseado em peso, distância e prioridade?

- **Validação de formulário:**
  > Por que minha mensagem de erro em um formulário React só aparece uma vez?

- **Requisição com atualização de estado:**
  > Como posso fazer uma requisição para atualizar um pedido e refletir imediatamente na tela sem recarregar a página?

- **Simulação de bateria:**
  > Como posso ir diminuindo a bateria do drone a cada entrega feita?

- **Função para recarregar drones:**
  > Como faço uma função para recarregar um drone e atualizar isso no backend?

- **README:**
  > Me ajuda a fazer um README explicando como rodar o projeto localmente?

### 🤖 Ferramentas de IA utilizadas

- ChatGPT (OpenAI)
- Copilot no VsCode

Essas interações foram usadas como apoio técnico e educacional para resolver dúvidas específicas durante o desenvolvimento, com todo o código sendo compreendido e validado por mim.

---
## Considerações Finais e Próximos Passos

Durante o desenvolvimento do projeto, tive diversas ideias que pretendo implementar para evoluir a aplicação. Uma delas seria refatorar o controle de prioridade dos pedidos utilizando o padrão de projeto GoF State, permitindo um controle mais organizado e flexível da lógica de estados dos drones. Inicialmente, usei apenas uma flag busy para indicar se o drone está ocupado, mas acredito que com a implementação de estados mais definidos (como "disponível", "carregando", "em entrega", etc.), o sistema se tornaria mais robusto e fácil de expandir.

Além disso, pensei em melhorar o algoritmo de alocação de drones para os pedidos, utilizando critérios mais eficientes (como distância, bateria, carga já atribuída, etc.), mas ainda não consegui implementar essas ideias por completo, principalmente por ser meu primeiro projeto desse tipo. Foi um desafio novo para mim, especialmente lidando com o React e suas particularidades.

Pensei também em aprimorar a simulação da bateria do drone, fazendo com que quando eu entre na página dos drones, o usuário receba uma mensagem caso o drone esteja com a bateria inferior a 10% ou caso ele não possa fazer nenhuma entrega por conta da bateria, ou fazer com que o drone recarregue sozinho nesses casos.

Grande parte do que consegui fazer foi com base em estudos e videoaulas, principalmente do canal Hora de Codar, que me ajudaram bastante a entender e aplicar os conceitos na prática. Tenho consciência de que há muito para melhorar, mas também reconheço o quanto aprendi nesse processo.
