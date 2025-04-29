FROM node:18

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all other frontend code
COPY . .

# Debug: check if react-scripts is present
RUN ls -l node_modules/.bin

# Build the React app
RUN npm run build

# Install 'serve' globally to serve static build
RUN npm install -g serve

# Expose frontend port
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "build", "-l", "3000"]
