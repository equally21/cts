FROM alpine:3.18

RUN apk add --no-cache nodejs npm

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
CMD ["node", "app.js"]