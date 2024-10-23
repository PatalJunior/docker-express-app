FROM node:14.17.3-alpine3.14

WORKDIR /usr/src/app

COPY package.json package-lock.json server.js ./
RUN ls -l /usr/src/app
RUN npm ci

CMD ["npm","start"]