FROM node:20

RUN mkdir -p /usr/src/app

COPY package*.json ./

RUN npm install

COPY  . .

EXPOSE 2000

CMD ["npm", "start"]