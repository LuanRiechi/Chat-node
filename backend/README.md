# Chat Backend

Este é o backend simples para um aplicativo de chat. Aqui estão os comandos para criar e executar a imagem Docker.

## Comando para criar a imagem Docker

```bash
docker build -t chat-backend .
```

## Comando para executar a imagem criada

```bash
docker run -p 3001:3001 -d chat-backend
```