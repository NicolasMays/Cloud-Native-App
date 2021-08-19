FROM node:14

WORKDIR /usr/src/app

COPY app.js ./
COPY package*.json ./
COPY .env .env

RUN mkdir ./routes/
COPY routes ./routes

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]