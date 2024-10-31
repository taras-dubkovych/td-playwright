# Use the Playwright image as the base image
FROM mcr.microsoft.com/playwright:v1.48.2-jammy
 
# Set the working directory inside the container
WORKDIR /app
 
# Copy your application code into the container
COPY . /app
 
# Install Java and other dependencies
RUN apt-get update && \
    apt-get install -y openjdk-11-jre-headless && \
    npm install &&\
    sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
 
# Set environment variables or additional configuration if needed
ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
 
# Command to run your Playwright tests
CMD ["npm", "test", "sh"]