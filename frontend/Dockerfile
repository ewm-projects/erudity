FROM node:bullseye-slim
WORKDIR /usr/app/frontend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]