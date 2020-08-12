# 💻 API de Cadastro de Questionários

API para criação e listagem de questionários

## 📦 Instalação e execução

```bash
# Faça o clone do repositório
git clone git@github.com:denilsonrp/quiz-api.git
```

```bash
# Instale as dependências
yarn install
```

```bash
# Variáveis de ambiente
Crie um arquivo .env a partir do arquivo .env.example, e se necessário, atualize a variável PORT.

Exemplo:

PORT=3001
```

```bash
# Executar aplicação
yarn start

# Executar aplicação em modo de desenvolvimento
yarn server

# A API irá iniciar na porta especificada na variável PORT do arquivo .env
```

## 🚀 Endpoints

-  `GET /quizzes`

Retorna um array com todos os questionários cadastrados.

-  `GET /quizzes/:id`

Retorna as informações de um questionário específico.

-  `POST /quizzes`

Cria um novo questionário. O endpoint espera o seguinte payload:

```
{
  "title": "Questionário 1",
  "user": "Denilson",
  "questions": [
    "Pergunta 1?",
    "Pergunta 2?"
  ]
}
```

-  `GET /answers/:id`

Retorna as respostas de um questionário específico.

-  `POST /answers`

Cria uma nova resposta para um questionário. O endpoint espera o seguinte payload:

```
{
  "quizId": "c523d3f3-0360-4f56-9134-f1a79b5b91f2",
  "user": "Denilson",
  "coordinates": {
    "lat": "123456789",
    "lng": "123456789"
  },
  "answers": [
    "Resposta da pergunta 1",
    "Resposta da pergunta 2"
  ]
}
```

## 🛠️ Tecnologias utilizadas

- Node.js
