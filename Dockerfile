FROM node:13.10.1-stretch

WORKDIR /opt/earthsci

COPY package.json .
RUN npm install

COPY ./code .


