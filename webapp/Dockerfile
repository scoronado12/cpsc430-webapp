FROM node:latest

RUN mkdir -p /opt/earthsci/src/app
WORKDIR /opt/earthsci/src/app

COPY package.json /opt/earthsci/src/app
COPY package-lock.json /opt/earthsci/src/app

COPY . /opt/earthsci/src/app

RUN npm install

RUN npm install --save react react-dom next react-bootstrap bootstrap express jquery @popperjs/core

RUN npm install --save isomorphic-fetch js-cookie axios

RUN npm install --save react-helmet

RUN npm install --save @sendgrid/mail
