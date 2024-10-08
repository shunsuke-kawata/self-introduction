FROM node:22.3.0-alpine
USER root
WORKDIR /app/frontend

# ENV TZ JST-9

RUN rm -rf node_modules

#package.jsonのパスを指定してインストールできる
COPY ./frontend/package.json /app/package.json
COPY ./frontend/package-lock.json /app/package-lock.json
RUN npm install

ENTRYPOINT ["npm", "start"]