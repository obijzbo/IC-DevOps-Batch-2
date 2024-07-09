# IC-DevOps-Batch-2

## Name: Syed Kamruzzaman
## Student_id: ICDB2_008_syed kamruzzaman


<br /><br /><br /><br />

---
---
## Networking assignment
---
---

### Diagram Design One

![This is a alt text.](/syed_kamruzzaman_ICDB2_008/screenshots/output.png)

## Key Components for the Diagram
1. Cloud: Represents the cloud services.
2. Databases: Represent the databases like Amazon RDS and DynamoDB.
3. Load Balancers: Distribute traffic.
4. EC2 Instances: Application servers.
5. Subnets and Gateways: Public and private subnets, Internet Gateway, and NAT Gateway.
6. Developer Environment: Separate subnet for development.

```
 +-------------+      +-------------+
    |   Region 1  |      |   Region 2  |
    |   VPC 1     |      |   VPC 2     |
    +------+------+      +------ ------+
           |                    |
    +------v------+      +------v------+
    | Public Subnet|      | Public Subnet|
    +------|------+      +------|------+
           |                    |
    +------v------+      +------v------+
    |Internet GW  |      |Internet GW  |
    +-------------+      +-------------+
           |                    |
    +------v------+      +------v------+
    | Load Balancer|      | Load Balancer|
    +------|------+      +------|------+
           |                    |
    +------v------+      +------v------+
    |   EC2       |      |   EC2       |
    +------|------+      +------|------+
           |                    |
    +------v------+      +------v------+
    |Private Subnet|      |Private Subnet|
    +------|------+      +------|------+
           |                    |
    +------v------+      +------v------+
    |  NAT GW     |      |  NAT GW     |
    +-------------+      +-------------+
           |                    |
    +------v------+      +------v------+
    | RDS         |      | RDS         |
    +-------------+      +-------------+
           |                    |
    +------v------+      +------v------+
    | DynamoDB    |      | DynamoDB    |
    +-------------+      +-------------+
           |                    |
    +------v------+      +------v------+
    | ElastiCache |      | ElastiCache |
    +-------------+      +-------------+
           |                    |
    +------v------+      +------v------+
    | SQS & SNS   |      | SQS & SNS   |
    +-------------+      +-------------+
           |                    |
    +------v------+      +------v------+
    | Dev Subnet  |      | Dev Subnet  |
    +-------------+      +-------------+
```

### Diagram Design Two

![This is a alt text.](/syed_kamruzzaman_ICDB2_008/screenshots/images.png)


<br /><br />

## Assumptions

1. Regions and Availability Zones: The platform will be deployed in two AWS regions, each with two availability zones for high availability and fault tolerance.
2. User Access: Users will access the platform via web and mobile applications.
3. Data Sources: The platform will fetch data from multiple third-party services (APIs) for different countries and cities.
4. Scalability: The architecture must support scalability to handle from 100 to 100,000 concurrent users.
5. Security: Network security is ensured using firewalls, security groups, and encryption.
6. Development Environment: Developers will use the same network for development, separated by logical boundaries.
7. Cost Management: Cost estimates will be based on AWS pricing for network components.

<br /><br />

## Project Details

The real estate finder platform will allow users to search for houses, bid on them, and chat with buyers/sellers. The platform will integrate with multiple third-party services to gather real estate data from various countries and cities. It must support high availability, fault tolerance, and scalability across two AWS regions with two availability zones each.

<br /><br />

## Architecture Decisions

1. Regions and Availability Zones: Utilizing multiple regions and availability zones ensures high availability and fault tolerance.
2. Microservices Architecture: Adopting a microservices architecture allows for independent deployment and scaling of services.
3. Load Balancing: Application Load Balancers (ALBs) distribute incoming traffic across multiple instances to ensure reliability and performance.
4. Database: Using Amazon RDS for relational data and Amazon DynamoDB for NoSQL data provides flexibility and scalability for different data needs.
5. Caching: Amazon ElastiCache will be used to cache frequently accessed data to improve performance.
6. Messaging: Amazon SQS and SNS for asynchronous communication between services.
7. Security: Implementing security best practices with VPCs, subnets, security groups, and encryption.

<br /><br />

## Reasoning
1. High Availability: Deploying across multiple regions and availability zones ensures that the platform remains available even if one region or zone fails.
2. Scalability: Microservices and load balancing allow the platform to scale horizontally to handle varying loads.
3. Performance: Caching and efficient database use ensure that the platform can quickly respond to user queries.
4. Security: Using VPCs, subnets, and security groups protects the platform from external threats.

<br /><br />

## Networking Components and Use Case
1. VPC: Isolate resources and provide security.
2. Subnets: Distribute resources across availability zones.
3. Internet Gateway: Enable internet communication.
4. NAT Gateway: Secure internet access for private instances.
5. Load Balancer: Ensure reliable and performant traffic distribution.
6. RDS: Manage relational databases.
7. DynamoDB: Handle large volumes of NoSQL data.
8. ElastiCache: Cache frequently accessed data.
9. SQS & SNS: Handle asynchronous communication.

<br /><br />

## Cost Estimate Table

| Users         | VPC Cost | Subnet Cost | Internet Gateway Cost | NAT Gateway Cost | Load Balancer Cost | EC2 Cost | RDS Cost | DynamoDB Cost | ElastiCache Cost | SQS & SNS Cost | Developer Subnet Cost | Total Cost |
| ------------- | -------- | ----------- | --------------------- | ---------------- | ------------------ | -------- | -------- | ------------- | ---------------- | -------------- | ---------------------- | ---------- |
| 100           | $5       | $2          | $3                    | $4               | $20                | $50      | $100     | $50           | $30              | $10            | $2                     | $276       |
| 10,000        | $10      | $5          | $5                    | $10              | $50                | $200     | $500     | $200          | $100             | $20            | $5                     | $1,105     |
| 100,000       | $15      | $10         | $10                   | $15              | $100               | $500     | $1,000   | $500          | $200             | $50            | $10                    | $2,410     |
| 1,000,000     | $20      | $15         | $15                   | $20              | $200               | $2,000   | $2,000   | $1,000        | $500             | $100           | $20                    | $5,890     |
| 10,000,000    | $25      | $20         | $20                   | $25              | $300               | $5,000   | $5,000   | $2,000        | $1,000           | $200           | $30                    | $13,620    |
| 100,000,000   | $30      | $25         | $25                   | $30              | $500               | $10,000  | $10,000  | $5,000        | $2,000           | $500           | $50                    | $28,160    |

## Explanation

- **VPC Cost**: Cost of creating and maintaining Virtual Private Clouds.
- **Subnet Cost**: Cost of creating public and private subnets.
- **Internet Gateway Cost**: Cost for Internet Gateway to allow communication with the internet.
- **NAT Gateway Cost**: Cost for NAT Gateway to enable instances in private subnets to access the internet.
- **Load Balancer Cost**: Cost for Application Load Balancer to distribute incoming traffic.
- **EC2 Cost**: Cost for EC2 instances, including application servers.
- **RDS Cost**: Cost for relational databases using Amazon RDS.
- **DynamoDB Cost**: Cost for NoSQL database using Amazon DynamoDB.
- **ElastiCache Cost**: Cost for caching service using Amazon ElastiCache.
- **SQS & SNS Cost**: Cost for messaging services using Amazon SQS and SNS.
- **Developer Subnet Cost**: Cost for maintaining a separate subnet for development.

*** These estimates provide a rough idea of the monthly cost associated with different scales of users. The actual costs may vary based on specific configurations, usage patterns, and AWS pricing changes.

