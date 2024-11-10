FROM node

# RUN apk add --no-cache nodejs npm

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
CMD ["node", "app.js"]