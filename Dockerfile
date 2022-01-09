FROM node:17.3-alpine

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --no-optional

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["node", "./build"]