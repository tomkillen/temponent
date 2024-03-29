FROM node:21.7.1-alpine3.18 as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:21.7.1-alpine3.18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --omit=dev

COPY --from=builder /usr/src/app/dist ./

EXPOSE 3000

ENTRYPOINT ["node","./app.js"]