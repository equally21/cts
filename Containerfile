FROM node:18.20.2-alpine
WORKDIR /app
COPY . .
RUN npm install --omit=dev --loglevel verbose --legacy-peer-deps
CMD ["node","app.js"]