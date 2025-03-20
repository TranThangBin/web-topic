FROM node:23-alpine
WORKDIR /frontend
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install
COPY . .
