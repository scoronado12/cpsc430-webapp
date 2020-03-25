FROM node:13.10.1-stretch

WORKDIR /opt/earthsci

COPY webapp/package.json .
RUN npm install
RUN npm install --save react react-dom next
