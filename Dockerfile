## STAGE No 1: Build ###
FROM node:alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run-script build
RUN ls
### STAGE No 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/dist/admin-looping-EA /usr/share/nginx/html
