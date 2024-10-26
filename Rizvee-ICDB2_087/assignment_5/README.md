# Ansible Playbook to Setup Dockerfile on Remote Ubuntu Server

This repository contains an Ansible playbook that installs Docker on a remote Ubuntu server and creates a Dockerfile for a Python application. The playbook ensures that Docker is installed, the service is running, and a specific directory with a Dockerfile is created.

## Prerequisites

Before you begin, ensure you have the following:

- Ansible installed on your local machine.
- SSH access to the remote Ubuntu server.
- The remote server should be running Ubuntu 20.04 (or a compatible version).

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/docker-setup-playbook.git
cd docker-setup-playbook


## Pushing the Docker Image to a Registry

If you want to share your Docker image with others or deploy it to a production environment, you can push it to a Docker registry such as Docker Hub or Amazon ECR.

Here's how to push your Docker image to Docker Hub:

1. First, make sure you have a Docker Hub account. If you don't have one, you can sign up for free at [**https://hub.docker.com/signup**](https://hub.docker.com/signup).
2. Log in to Docker Hub using the `docker login` command in your terminal:

   ```bash
   docker login
   ```

3. Enter your Docker Hub username and password when prompted.

   ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1680945241272/0e9b03d5-cdfa-4c22-b598-5d113929acac.png)

4. Tag your Docker image with your Docker Hub username and the name of the repository that you want to push the image to:

   ```bash
   docker tag my-app <your_dockerhub_username>/<repository_name>
   ```

5. Push your Docker image to Docker Hub using the `docker push` command:

   ```bash
   docker push <your_dockerhub_username>/<repository_name>
   ```

   This command uploads your Docker image to Docker Hub, making it available for others to pull and use.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1680945447241/45676d07-832d-4308-9292-2a71c04e5430.png)

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1680945529516/440c4d2b-cc8f-415e-8e75-c31f26944fe6.png)

## Pulling and Running the Docker Image

To pull the Docker image that you pushed to a registry, you can use the `docker pull` command followed by the name of the repository and tag:

```bash
docker pull <your_dockerhub_username>/<repository_name>:<tag>
docker pull shaikahmadnawaz/react-application
```

Once the Docker image is downloaded, you can run it using the `docker run` command as we did earlier.

```bash
docker run -d -p 3000:3000 <your_dockerhub_username>/<repository_name>:<tag>
docker run -d -p 3000:3000 shaikahmadnawaz/react-application:latest
```

This will start a new Docker container based on the image you just pulled from the registry. You can access your React application by navigating to [`http://localhost:3000`](http://localhost:3000) in your web browser.

## Conclusion

In this guide, we have learned how to deploy a React web application with Docker. We started by creating a Dockerfile to package our application code and dependencies into a Docker image. Then, we built and ran the Docker container to verify that our application is running correctly.

We also covered how to bind the container port to the host port to make the application accessible from the outside. We discussed how to run the container in detached mode and how to push the Docker image to a registry like Docker Hub.

By following this guide, you can easily package and deploy your React application with Docker, making it easier to share and deploy to different environments.

By following the steps in this guide, you now have a solid understanding of how to deploy a React web application with Docker. We hope this guide has been helpful to you and that you are now ready to start deploying your own React applications with Docker. If you have any questions or feedback, feel free to leave a comment below. Happy deploying!



