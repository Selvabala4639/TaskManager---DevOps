# Step 1: Build React app
FROM node:18 AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Step 2: Serve the build using a minimal image
FROM node:18-alpine
RUN npm install -g serve

WORKDIR /app
COPY --from=build /app/build ./build

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
