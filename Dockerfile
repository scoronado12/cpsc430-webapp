FROM node:13.10.1-stretch

RUN mkdir -p /opt/earthsci/src/app
WORKDIR /opt/earthsci/src/app

COPY webapp/package.json .
COPY webapp/package-lock.json .

COPY webapp/pages/ .

RUN npm install

RUN npm install --save react react-dom next mysqljs/mysql bootstrap
