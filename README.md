# Projeto de Sistemas Distribuidos

Um simples real time chat usando Websocket


## Funcionamento

O projeto consiste em duas partes independentes, o backend e o frontend, funcionando em containers separados. Portanto é necessario ter o docker instalado para executar o sistema.

## Execução

1-Clone o projeto na sua maquina, executando o comando:

```bash
git clone https://github.com/LuanRiechi/Chat-node.git
```

2-Criamos um docker-compose para melhor executar as duas partes, portanto abra um terminal no diretório principal do projeto e execute:

```bash
docker-compose up
```

E no seu navegador, entre em http://localhost:80
