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

