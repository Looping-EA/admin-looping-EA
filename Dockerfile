### STAGE No 1: Build ###
FROM node:latest AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npx ng serve --prod
