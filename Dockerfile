FROM ubuntu
RUN mkdir app
WORKDIR ./app
COPY package* ./
RUN npm ci
COPY * *
CMD ["node","file.js"]
