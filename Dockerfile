# Use an existing Node image as a base
FROM node:19.6.0

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container at /app
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

RUN npm install -g @angular/cli

# Copy the rest of the application code into the container at /app
COPY . .

# Expose the port that Angular serves on (default is 4200)
EXPOSE 4200

# Command to start the Angular development server
CMD ["ng", "serve", "--host", "0.0.0.0"]
