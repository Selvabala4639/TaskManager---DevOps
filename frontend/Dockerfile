FROM node:18

WORKDIR /app

# Copy only dependency files first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the React app (no need to check version)
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Expose frontend port
EXPOSE 3000

# Run the production build with serve
CMD ["serve", "-s", "build", "-l", "3000"]
