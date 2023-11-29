FROM dejangegic/bun:latest

WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile --production

COPY . .
EXPOSE 3001
CMD ["bun", "run", "websocket.js"]