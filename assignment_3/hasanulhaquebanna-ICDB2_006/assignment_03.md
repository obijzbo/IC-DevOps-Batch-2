### **Network Architecture Diagram**

[Network Architecture Diagram using Excalidraw](https://excalidraw.com) - Once the design is ready, it will be added as an image in the README file of the project.

### **Summary**

#### a. **Project Details**

The platform is a real estate finder allowing users to search for homes, place bids, and communicate with sellers. The system must handle a global user base and fetch data from various 3rd-party services across different countries and cities. It must be secure, scalable, and highly available, with a reliable chat system, bidding system, and developer environment.

#### b. **Architecture Decisions**

- **Regions & Availability Zones**: Two regions with two AZs each ensure fault tolerance, geographic redundancy, and low latency. AWS is assumed as the cloud provider.
- **Load Balancing**: A global load balancer distributes traffic between regions and AZs.
- **Auto-scaling Groups**: To handle fluctuating loads, auto-scaling groups are deployed for the web and application tiers.
- **Microservices**: The application is divided into microservices (search, bidding, chat, etc.) hosted in containers using ECS or Kubernetes.
- **Data Storage**: Data is stored in a combination of RDS (for structured data) and NoSQL databases (for unstructured data). Data replication is set up between regions for high availability.
- **API Gateway**: An API Gateway handles requests to/from 3rd party services.
- **Developer Environment**: A dedicated VPC or subnets for development and staging environments, isolated from production.
