############################################################
# Setup react
############################################################
FROM node:bullseye-slim as build-react

# set working directory
WORKDIR /usr/app/frontend

# add `/usr/src/app/node_modules/.bin` to $PATH
# see: https://stackoverflow.com/a/65407744
ENV PATH /usr/app/frontend/node_modules/.bin:$PATH

# install and cache app dependencies
COPY ./frontend/package.json .
COPY ./frontend/package-lock.json .
RUN npm install

ENV NODE_ENV production

# add app
COPY ./frontend .

RUN npm run build
# see https://stackoverflow.com/a/71262331
RUN npm prune --production

############################################################
# Setup Express & Nginx
############################################################
# https://medium.com/geekculture/how-to-install-a-specific-node-js-version-in-an-alpine-docker-image-3edc1c2c64be
FROM node:18-alpine3.17 as node
FROM nginx:stable-alpine

# Copy binaries from official Node image
COPY --from=node /usr/lib /usr/lib
COPY --from=node /usr/local/share /usr/local/share
COPY --from=node /usr/local/lib /usr/local/lib
COPY --from=node /usr/local/include /usr/local/include
COPY --from=node /usr/local/bin /usr/local/bin

# set working directory
WORKDIR /usr/app

# add `/usr/src/app/node_modules/.bin` to $PATH
# see: https://stackoverflow.com/a/65407744
ENV PATH /usr/app/node_modules/.bin:$PATH

# Copy React & Nginx files
COPY --from=build-react /usr/app/frontend/dist /usr/share/nginx/html
COPY ./proxy/default.conf /etc/nginx/conf.d/default.conf

# Install PM2, see: https://pm2.keymetrics.io/docs/usage/docker-pm2-nodejs/
# Todo: look into proper PM2 setup later
RUN npm install pm2 -g

# install and cache app dependencies
COPY ./backend/package.json .
COPY ./backend/package-lock.json .
RUN npm ci

COPY ./backend .

ENV NODE_ENV production

CMD pm2 start src/main/index.js && \
      sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && \
      nginx -g 'daemon off;'