<h1 align="center"> Assignment 3 - Networking </h1>

![1707035530376](https://github.com/user-attachments/assets/04432307-363d-48d3-9ffc-bcf3814f5783)

<p align="center">Created <i>by <a href="https://github.com/Jahid1499">Jahid Hassan </a></i></p>

# Table of content
- [Project Description](#project-description)
- [List all assumptions](#list-all-assumptions)
- [Diagram](#diagram)
- [Summary](#summary)
  - [Architecture Decisions](#architecture-decisions)
  - [Components Justification](#components-justification)
  - [Networking Components and Use Case](#networking-components-and-use-case)
- [Cost Estimates](#cost-estimates)

# Project Description

<p align="justify">Design a network architecture for a platform that will serve as a real estate finder. People will come and search for houses, bid on them, chat with the buyer/seller. The platform will fetch data from many 3rd party services for different countries and cities. The networking architecture must support 2 regions and 2 availability zones. Developers will be using the network to do development work as well</p>

# List all assumptions
1. The application has two region - USA & Canada
2. Each region has two AZ 
3. Application host in cloud service
4. Application database should be Amazon RDS
5. Application have two environment - development & production
6. Developer should not direct access in production environment
7. Cost calculation for concurrent user is - 100, 10K, 100K, 1M, 100M
8. When increase concurrent user, application must be auto scaling
9.  Average response time should be under 200ms.
10. The platform will offer services like property search, bidding, and real-time chat between buyers and sellers.
11. Notifications (email/SMS) for bids and chat messages will be supported.
12. User data and transaction data should be encrypted both in transit and at rest.
13. Services should be designed to be fault-tolerant with automatic failover mechanisms.

# Diagram
<a href="https://drive.google.com/file/d/13JOC8EJYKeAdGjgnT_tnbO0CQxLio990/view?usp=sharing">Diagram Link</a>

![Image](./screenshots/networking_assignment.svg)

# Summary
## Architecture Decisions
#### 1. Regions and Availability Zones
For this ensures high availability, disaster recovery, and reduced latency for users in different geographical locations.

#### 2. Virtual Private Cloud (VPC)
Create a VPC in each region to isolate and secure network resources.

#### 3. Subnets the network
We use both public and private subnets within each VPC. 

#### 4. EC2 Instances
Use EC2 instances for deploying application servers, development environments, and other compute resources.

#### 5. Load Balancers
Implement a Global Load Balancer to distribute traffic across regions and regional load balancers within each region to distribute traffic across availability zones.

#### 6. NAT Gateway
Deploy NAT gateways in public subnets to allow instances in private subnets to access the internet securely.

#### 7. Internet Gateway
Use an Internet Gateway to allow resources in the public subnets to access the internet.

#### 8. Application Servers
Deploy application servers in private subnets and use auto-scaling groups to manage their number based on traffic load.

#### 9. Database Layer
Use managed database services like Amazon RDS.

#### 10. Caching Layer
A caching layer using a service like ElastiCache.

#### 11. Content Delivery Network (CDN) - CloudFront
Use a CloudFront as a CDN to deliver static and dynamic content to users globally.

#### 12. Real-Time Messaging Service
Use a real-time messaging service like "AWS AppSync" for chat functionality between buyers and sellers.

#### 13. Monitoring and Logging
Implement comprehensive monitoring and logging using tools like CloudWatch.

#### 14. Use of IAM Roles and Policies
Use IAM roles and policies to manage access to resources.

#### 15. VPN
Implement a VPN to provide secure connectivity between on-premises networks and VPCs.

#### 16. Route 53
Use Amazon Route 53 for DNS management and global traffic routing.

#### 17. Amazon S3
Use Amazon S3 for static asset storage, backup, and content delivery. Regular backups of the platform's databases are required for disaster recovery. 

## Components Justification

#### 1. Regions and Availability Zones
We deploy our infrastructure in two regions (Canada and USA) with two availability zones in each region.

#### 2. Virtual Private Cloud (VPC)
VPCs provide network isolation, which enhances security and control over network traffic. 

#### 3. Subnets the network
Public subnets are needed for internet-facing resources, while private subnets are for internal resources to enhance security.

#### 4. EC2 Instances
Provides scalable, on-demand compute capacity for running applications, handling user requests, and supporting development and staging environments. EC2 instances offer flexibility in terms of instance types, sizes, and pricing models likes on-demand, reserved, spot instances.

#### 5. Load Balancers
Load balancers ensure high availability, fault tolerance, and optimal resource utilization by distributing traffic evenly.

#### 6. NAT Gateway
NAT gateways provide a secure way for instances in private subnets to access external resources without exposing them to inbound internet traffic. Deploy NAT gateways in public subnets to allow instances in private subnets to access the internet securely.

#### 7. Internet Gateway
Provides a pathway for outbound internet traffic from resources in public subnets, such as load balancers and NAT gateways, enabling them to serve web traffic and fetch updates from the internet.

#### 8. Application Servers
This ensures the application can scale dynamically based on demand while keeping backend resources secure.

#### 9. Database Layer
Managed databases simplify administration, ensure high availability, and improve read performance through replicas.

#### 10. Caching Layer
Caching reduces load on the databases and improves response times for frequently accessed data.

#### 11. Content Delivery Network (CDN) - CloudFront
CDNs like CloudFront reduce latency and improve load times by caching content at edge locations close to users.

#### 12. Real-Time Messaging Service
Real-time messaging services ensure low-latency communication and seamless user experience.

#### 13. Monitoring and Logging
Ensures visibility into system performance, health, and user activity, enabling proactive issue resolution. 

#### 14. Use of IAM Roles and Policies
Enhances security by providing fine-grained access control. 

#### 15. VPN
Enables secure and encrypted communication between on-premises infrastructure and cloud resources, facilitating hybrid cloud architectures and secure access for remote developers. 

#### 16. Route 53
Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service. It can reliably route users to endpoints. Also, Built-in health checks and DNS failover ensure that Route 53 can detect unhealthy endpoints and route traffic to healthy ones, maintaining high availability and resilience. 

#### 17. Amazon S3
S3 automatically scales to handle the vast amounts of data and high request rates, making it ideal for storing static assets and backups. S3 provides 99.999999999% (11 nines) durability and 99.99% availability over a given year, ensuring data is safe and accessible. Automate database backup processes to store snapshots in S3.

## Networking Components and Use Case
### 1. Virtual Private Cloud (VPC)
  <p align="justify">VPC provides an isolated virtual network environment within a cloud provider (e.g., AWS, GCP, Azure) where i can deploy my resources. With VPC, i can control inbound and outbound access for my resources in my own virtual private network. Hosting a multi-tier web application requires stricter access control and more restrictions for communication between my servers for layers, such as web servers, app servers, and database servers. VPC is an ideal solution for such web applications as it has all functionalities built in.</p>

### 2. Internet Gateway
   <p align="justify">Allows resources in a VPC to access the internet. An Internet Gateway (IGW) allows an organization to extend its network across multiple locations by connecting them. The IGW provides connectivity between different networks, such as corporate LANs and WANs (wide area networks). It can also be used to connect remote sites or campuses through either a leased line or broadband service provider connection.</p>

### 3. NAT Gateway
   <p align="justify">NAT Gateway can be explained as an exit point and entry point for internal instances and external public users. The NAT gateway provide internet access to components inside private subnets without directly making them publicly available.</p>

### 4. Load Balancer
  <p align="justify">A load balancer, methodically and efficiently distributing network traffic over multiple backend servers in a server pool. It auto-rerouting away from failed components for high availability and minimal downtime. It will regularly monitors and verifies the instance's health, ensuring incoming traffic solely to operational, healthy instances.</p> 

### 5. API Gateway
  <p align="justify">API Gateway is a pattern formed by adding a layer between the client and the server that acts as a single entry point forwarding request from the client to the server. It allows all clients to access the services they want to access with a single API Gateway layer. API gateways can cache responses from backend services, which can improve the performance of your application. API gateways can control the number of requests that a user can send to the backend services within a given time frame. This can help to prevent denial-of-service attacks and ensure that all users have a fair chance of accessing the API. API gateways can validate user credentials and permissions before allowing access to backend services. This can help to protect your application from unauthorized access.</p>

### 6. Content Delivery Network (CDN)
  <p align="justify">It delivers static and dynamic content to users with low latency. CDNs play a crucial role in streaming high-quality video content to users worldwide. They effectively reduce buffering, ensuring smooth playback that significantly improves viewer satisfaction. They are also instrumental in efficiently delivering large files, such as game downloads and software updates.</p>

### 7. Elastic IP Address
  <p align="justify">Provides a static IPv4 address for dynamic cloud computing. Elastic IP address is a public static IPv4 address which is reachable from the Internet. Basically Elastic IP addresses are used by AWS to manage its dynamic cloud computing services. Within the AWS infrastructure, customers have virtual private clouds (VPC), within the VPCs, users have instances. So when you launch an EC2 instance, you receive a Public IP address by which that instance is reachable from internet. Once you stop that instance and restart the instance you get a new Public IP for the same instance. So it's basically a problem to connect your instance from internet for not having a static IP. To overcome this problem, we attach an Elastic IP to an Instance which doesn't change after you stop / start the instance.</p>

### 8. Service Mesh
  <p align="justify">A service mesh is a mechanism for managing communications between the various individual services that make up modern applications in a microservice-based system. In microservices applications, can be modularly developed as a collection of services. But as the number of services grow, you need to ensure connection between services is fast, smooth, and resilient. Then we need service mesh. The service mesh also helps improve system reliability. By offloading fault tolerance concerns to a service mesh, services can focus on differentiating business logic.</p> 

### 9. VPN
<p align="justify">Establish secure connections between corporate data centers and the cloud. Set up a VPN Gateway in the VPC and configure the customer gateway in the on-premises data center. Establish an IPsec VPN connection to secure data transfer. </p> 

# Cost Estimates

| Service              | 100 Concurrent Users | 10,000 Concurrent Users | 100,000 Concurrent Users | 1 Million Monthly Users | 10 Million Monthly Users | 100 Million Monthly Users |
|----------------------|----------------------|-------------------------|--------------------------|-------------------------|--------------------------|---------------------------|
| EC2 Instances        | $50                  | $500                    | $5,000                   | $300                    | $1,500                   | $15,000                   |
| Load Balancer        | $20                  | $100                    | $500                     | $50                     | $100                     | $500                      |
| NAT Gateway          | $45                  | $90                     | $200                     | $60                     | $120                     | $200                      |
| Internet Gateway     | $0                   | $0                      | $0                       | $0                      | $0                       | $0                        |
| Amazon RDS           | $100                 | $500                    | $1,000                   | $200                    | $600                     | $2,000                    |
| ElastiCache          | $50                  | $250                    | $500                     | $100                    | $300                     | $1,000                    |
| CloudFront           | $10                  | $50                     | $200                     | $30                     | $100                     | $500                      |
| AppSync              | $10                  | $100                    | $1,000                   | $30                     | $100                     | $1,000                    |
| CloudWatch           | $10                  | $50                     | $200                     | $30                     | $100                     | $500                      |
| IAM                  | $5                   | $5                      | $5                       | $5                      | $5                       | $5                        |
| VPN                  | $30                  | $30                     | $30                      | $30                     | $30                      | $30                       |
| Route 53             | $5                   | $20                     | $100                     | $10                     | $50                      | $100                      |
| S3 Storage           | $23                  | $2,300                  | $23,000                  | $2,300                  | $23,000                  | $230,000                  |
| S3 Data Transfer     | $9                   | $900                    | $9,000                   | $900                    | $9,000                   | $90,000                   |
| **Total**            | **$377**             | **$6,945**              | **$41,735**              | **$4,045**              | **$34,005**              | **$341,835**              |



