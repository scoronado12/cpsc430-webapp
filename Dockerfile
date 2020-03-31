FROM node:latest

RUN mkdir -p /opt/earthsci/src/app
WORKDIR /opt/earthsci/src/app

COPY webapp/package.json .
COPY webapp/package-lock.json .

COPY webapp/pages/ .

RUN npm install

RUN npm install --save react react-dom next mysqljs/mysql react-bootstrap bootstrap express jquery @popperjs/core

RUN npm install --save isomorphic-fetch js-cookie
RUN npm install --global fs
