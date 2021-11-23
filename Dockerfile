FROM node:16-alpine
WORKDIR /docker-app

COPY . ./

# building the app
RUN npm i
RUN npm run build

EXPOSE 4000

# Running the app
CMD [ "npm", "run", "dev" ]