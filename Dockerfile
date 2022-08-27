FROM node
RUN mkdir app
WORKDIR ./app
COPY package* /app/
RUN npm ci
COPY * *
CMD ["node","file.js"]
