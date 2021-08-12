FROM node

WORKDIR /usr/app

COPY package*.json ./

RUN yarn install

COPY . .

CMD ["yarn", "start"]