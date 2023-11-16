FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json .

RUN npm install --production

COPY . .

EXPOSE 3001

CMD ["node", "websocket.js"]