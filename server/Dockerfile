FROM node:latest

run mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app
COPY . /app

RUN npm install --save argon2

RUN npm install --save cors express mysql

RUN npm install --save  nodemon -g

