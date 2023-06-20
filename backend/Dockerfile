# src: https://snyk.io/blog/choosing-the-best-node-js-docker-image/
FROM node:bullseye-slim
WORKDIR /usr/app/backend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm", "run", "dev"]