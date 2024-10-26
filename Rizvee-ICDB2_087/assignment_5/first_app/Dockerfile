# Stage 1: Build React App
FROM node:18 AS build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the React app files to the working directory
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve with Apache
FROM httpd:2.4

# Set the ServerName directive globally to suppress the warning
RUN echo "ServerName localhost" >> /usr/local/apache2/conf/httpd.conf

# Copy the build files to Apache's public directory
COPY --from=build /app/build/ /usr/local/apache2/htdocs/

# Expose port 80 for HTTP
EXPOSE 80

# Start Apache in the foreground
CMD ["httpd-foreground"]

