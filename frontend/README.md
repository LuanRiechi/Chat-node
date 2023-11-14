# Chat Frontend

Este é o frontend simples para um aplicativo de chat. Aqui estão os comandos para criar e executar a imagem Docker.

## Comando para criar a imagem Docker

```bash
docker build -t chat-frontend .
```

## Comando para executar a imagem criada

```bash
docker run -p 80:80 -d chat-frontend
```