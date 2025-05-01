FROM node:18

WORKDIR /app

# Copy exact files for dependency install
COPY package.json package-lock.json ./

# Force clean install (and show logs)
RUN npm ci

# Copy rest of the source code
COPY . .

# Show available binaries
RUN ls -l node_modules/.bin

# Print react-scripts version
RUN npx react-scripts --version

# Build the React app
RUN npm run build

# Install serve to serve the app
RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]
