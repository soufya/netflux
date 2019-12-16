FROM node:lts-slim
RUN mkdir /app
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run-script build
CMD ["npm", "start"]

