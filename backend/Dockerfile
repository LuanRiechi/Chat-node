FROM oven/bun:alpine

WORKDIR /app
COPY . .

RUN bun install --frozen-lockfile --production

EXPOSE 3001
CMD ["bun", "run", "websocket.js"]