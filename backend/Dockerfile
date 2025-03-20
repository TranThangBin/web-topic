FROM node:23-alpine
WORKDIR /backend
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install
COPY . .
CMD [ "npm", "run", "dev" ]
