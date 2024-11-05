FROM node:20-alpine as builder

ARG VITE_ROCKET_API_KEY
ARG VITE_ROCKET_AUTH_DOMAIN
ARG VITE_ROCKET_PROJECT_ID
ARG VITE_ROCKET_STORAGE_BUCKET
ARG VITE_ROCKET_MESSAGING_SENDER_ID
ARG VITE_ROCKET_APP_ID
ARG VITE_ACCESS_EMAIL
ARG VITE_AXIOS_LAUNCH_URL

ENV VITE_ROCKET_API_KEY=$VITE_ROCKET_API_KEY
ENV VITE_ROCKET_AUTH_DOMAIN=$VITE_ROCKET_AUTH_DOMAIN
ENV VITE_ROCKET_PROJECT_ID=$VITE_ROCKET_PROJECT_ID
ENV VITE_ROCKET_STORAGE_BUCKET=$VITE_ROCKET_STORAGE_BUCKET
ENV VITE_ROCKET_MESSAGING_SENDER_ID=$VITE_ROCKET_MESSAGING_SENDER_ID
ENV VITE_ROCKET_APP_ID=$VITE_ROCKET_APP_ID
ENV VITE_ACCESS_EMAIL=$VITE_ACCESS_EMAIL
ENV VITE_AXIOS_LAUNCH_URL=$VITE_AXIOS_LAUNCH_URL

WORKDIR /usr/src/app

RUN npm install -g typescript@4.9.3 ts-node

COPY ./package*.json \
     ./tsconfig.json \
     ./tsconfig.*.json \
     ./


## Create directory for local packages
WORKDIR /usr/src/app/01-packages
#
## Copy packages
COPY /01-packages/common/package*.json \
     /01-packages/common/tsconfig.build.json \
     ./common/
COPY /01-packages/component-library/package*.json \
     /01-packages/component-library/tsconfig.json \
     /01-packages/component-library/tsconfig.node.json \
     ./component-library/


WORKDIR /usr/src/app/02-goods
#
## Copy packages
COPY /02-goods/client/package*.json \
     /02-goods/client/tsconfig.json \
     /02-goods/client/tsconfig.build.json \
     ./client/

#
## Create directory for this app
WORKDIR /usr/src/app/04-frontends/reader
#
## Install app dependencies
COPY /04-frontends/reader/package*.json \
     /04-frontends/reader/tsconfig.json \
     /04-frontends/reader/tsconfig.node.json \
     ./

## install deps from root, should install deps of packages
WORKDIR /usr/src/app
#
#RUN npm install
## If you are building your code for production
RUN npm ci
#
COPY /01-packages/common/. \
     ./01-packages/common

COPY /01-packages/component-library/. \
     ./01-packages/component-library

COPY /02-goods/client/. \
     ./02-goods/client

COPY /04-frontends/reader/. \
     ./04-frontends/reader
#
#RUN npm install

## build the app, i hope this builds the deps!
WORKDIR /usr/src/app/01-packages/common

RUN npm run-script build

WORKDIR /usr/src/app/01-packages/component-library

RUN npm run-script build

WORKDIR /usr/src/app/02-goods/client

RUN npm run-script build

WORKDIR /usr/src/app/04-frontends/reader

RUN npm run-script build

# Use Nginx as the production server
FROM public.ecr.aws/awsguru/nginx:1.23.2023.3.11.1 as server

# config files
ADD 00-services/nginx/reader-nginx.conf /opt/nginx/conf/nginx.conf

# code files
COPY --from=builder /usr/src/app/04-frontends/reader/dist /var/task/

EXPOSE 8080
