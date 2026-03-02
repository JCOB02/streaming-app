FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN apt-get update -y && apt-get install -y openssl
RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]