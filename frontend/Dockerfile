FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# DEBUG: Check if react-scripts is available
RUN ls -l node_modules/.bin && node -v && npm -v && npx react-scripts --version

# Build
RUN npm run build

RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
