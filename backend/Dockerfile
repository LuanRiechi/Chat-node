FROM oven/bun:latest

WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install

COPY . .
EXPOSE 3001
CMD ["bun", "run", "websocket.js"]