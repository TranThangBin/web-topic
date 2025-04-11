FROM node:23-alpine3.20
WORKDIR /server
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
COPY . .
CMD [ "npm", "run", "dev" ]
