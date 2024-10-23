FROM node:14.17.3-alpine3.14

WORKDIR /usr/src/app

COPY package.json ./
RUN ls -l /usr/src/app
RUN npm ci
COPY ./server.js ./

CMD ["npm","start"]