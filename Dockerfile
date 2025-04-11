FROM node:23-alpine3.20
WORKDIR /client
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
COPY . .
