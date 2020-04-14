FROM node:latest

run mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app
COPY . /app

RUN npm install --save cors express mysql nodemon
