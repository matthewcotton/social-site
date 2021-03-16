# Pull node base image
FROM node:15.11.0-alpine3.10

# Set working directory
WORKDIR /dockerized-social-site

# Add env path
ENV PATH /dockerized-social-site/node_modules/.bin:$PATH

# Install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm i chokidar

# Add app
COPY . ./

# Start app
CMD [ "npm", "start" ]