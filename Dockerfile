## STAGE No 1: Build ###
FROM node:latest AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
RUN npm build
RUN ls
### STAGE No 2: Run ###
FROM nginx:stable-alpine
COPY --from=build /usr/src/app/dist/admin-looping-EA /usr/share/nginx/html
