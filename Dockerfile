FROM node:12.16.2
MAINTAINER Alan Eicker
WORKDIR /build
COPY package.json server.js . /build
EXPOSE 3000
CMD ["node", "server"]