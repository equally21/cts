FROM node:18.20.2-alpine
WORKDIR /app
COPY package.json /app
RUN npm install --omit=dev --loglevel verbose --legacy-peer-deps
COPY . /app
CMD ["node","app.js"]