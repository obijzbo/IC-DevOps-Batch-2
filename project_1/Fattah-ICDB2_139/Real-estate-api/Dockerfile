FROM node:20-bullseye-slim

WORKDIR /app

RUN adduser -u 5678 --disabled-password --gecos "" appuser && chown -R appuser /app

COPY package*.json ./

RUN npm install

RUN npm install -g nodemon

COPY . .

RUN npx prisma generate

USER appuser

EXPOSE 8800

CMD [ "nodemon", "app.js" ]