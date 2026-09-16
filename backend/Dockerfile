# Base image: lightweight Node.js runtime
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy only package files first (better caching — deps rebuild
# only when package.json actually changes, not on every code edit)
COPY package*.json ./

# Install dependencies inside the container
RUN npm install

# Now copy the rest of your app's source code
COPY . .

# Document which port the app listens on (informational)
EXPOSE 3000

# Command that runs when the container starts
CMD ["node", "server.js"]