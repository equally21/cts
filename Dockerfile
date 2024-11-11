FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json*
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules

FROM alpine:3.18

ARG VERSION
ENV VERSION=${VERSION}

RUN apk add --no-cache nodejs

WORKDIR /app

COPY --from=base /app/node_modules ./node_modules

COPY . .
CMD ["node", "app.js"]