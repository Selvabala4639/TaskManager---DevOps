# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the React code
COPY . .

# Build the React app
RUN npm run build

# Serve the React app using a simple server (e.g., serve)
RUN npm install -g serve

# Expose frontend port
EXPOSE 3000

# Start frontend
CMD ["serve", "-s", "build", "-l", "3000"]
