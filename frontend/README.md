# Chat Frontend

Este é o frontend simples para um aplicativo de chat. Aqui estão os comandos para criar e executar a imagem Docker.

## Comando para criar a imagem Docker

```bash
docker build -t chat-frontend .
```

## Comando para executar a imagem criada

```bash
docker run -p 9800:3000 -d chat-frontend
```

Aí é só acessar http://localhost:9800/

A porta pode ser trocada simplesmente mudando o primeiro valor de -p para x:3000, onde x é a porta desejada


Para desenvolvimento do frontend, recomendamos usar um server node, já configurado neste projeto. Simplesmente execute:

```bash
npm install
npm start
```
