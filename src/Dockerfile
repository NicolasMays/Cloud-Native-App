FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
COPY app.js .
COPY .env .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]