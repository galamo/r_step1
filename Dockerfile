FROM node
USER root
EXPOSE 3000

# Creating folder inside the docker
RUN mkdir -p /usr/src/app

# Setting the working directory to
WORKDIR /usr/src/app/

# Copy the Content from workSpace to the working directory
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm install create-react-app && npm install

COPY . /usr/src/app

CMD [ "npm", "start"]