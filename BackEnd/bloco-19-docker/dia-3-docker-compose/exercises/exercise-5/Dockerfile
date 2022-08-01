FROM node

COPY ./my-app ./

WORKDIR /my-app

RUN ["npm", "install"]

ENTRYPOINT [ "npm", "start" ]