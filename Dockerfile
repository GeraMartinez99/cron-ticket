FROM node:current-alpine3.18

WORKDIR /app

COPY .  .

RUN npm install


RUN npm run test

CMD [ "node", "app.js" ]