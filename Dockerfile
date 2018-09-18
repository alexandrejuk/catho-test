FROM node:alpine
WORKDIR /server/catho
COPY ./package.json ./package.json
RUN npm install
ENV PORT=3000
COPY ./ ./
RUN npm test
EXPOSE $PORT
CMD [ "npm", "start" ]