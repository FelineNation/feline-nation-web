# Variables
IMAGE_NAME := feline-nation-web
CONTAINER_NAME := feline-nation-web-container

# Run unit tests
fn.test:
	npm test

# Build the Docker image
fn.build: fn.test
	docker build -t $(IMAGE_NAME) .

# Run the Docker container
fn.run: fn.build
	docker run -d --name $(CONTAINER_NAME) -p 8080:3000 $(IMAGE_NAME)

# Stop and remove the Docker container
fn.stop:
	docker stop $(CONTAINER_NAME)
	docker rm $(CONTAINER_NAME)

# Clean up Docker resources
fn.clean: fn.stop
	docker rmi $(IMAGE_NAME)

# Default target
.DEFAULT_GOAL := build