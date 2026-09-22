# Base image: lightweight Node.js runtime(if we want to start from scaratch we can say "FROM scratch")
#node means the base image name, 20 means the version, and alpine means the base OS variant
FROM node:20-alpine

# Set working directory "inside the container"
WORKDIR /app

# Copy only package files first (better caching — deps rebuild
# only when package.json actually changes, not on every code edit)

COPY package*.json ./

# Install dependencies inside the container, and happens when building the image
RUN npm install

# Now copy the rest of your app's source code
COPY . .

# Document which port the app listens on (informational)
EXPOSE 5000

# Command that runs when the container starts, and happens every time the container starts
CMD ["npx", "ts-node", "src/server.ts"]