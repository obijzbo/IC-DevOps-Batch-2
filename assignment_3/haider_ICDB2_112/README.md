## Diagram
![](diagram/network-assignment%20(1).png)

Real-Estate Website Architecture

### 1. **Assumptions**

- The platform will need to support high availability and fault tolerance across two AWS regions and two availability zones per region.
- The backend application requires a scalable and secure environment to handle a fluctuating number of users.
- Third-party APIs will be used to fetch real estate data and should be accessible securely from a private subnet.
- Developers need access to the network for development, which will be restricted to specific IP addresses and secure connections.
- The platform will handle real-time communications (chat), bidding, and dynamic content generation.
- The platform will use AWS services for networking, compute, and storage.
- Data storage will need to be highly available and scalable, with a data replicated RDS across regions for disaster recovery.

### 2. **Summary**

#### **Project Details**
The platform is a real estate finder that enables users to search for properties, place bids, and communicate with buyers and sellers. The platform must be highly available, scalable, and secure, supporting operations across two AWS regions and multiple availability zones. Developers will use this network for development tasks via a jump-box, requiring secure and controlled access.

#### **Architecture Decisions**
- **Route 53:** At first traffic will come to Route 53 and it will distribute the traffic into two regions considering availability, traffic location.
- **Multi-Region Setup:** To ensure high availability and disaster recovery, the platform will be deployed in two AWS regions, each with two availability zones. This setup ensures that the platform remains operational even if one region or availability zone fails.
- **VPC and Subnets:** Each region will have its own Virtual Private Cloud (VPC) with separate subnets for public, private, and database layers across the two availability zones. The private subnet will host backend services, while the public subnet will handle front-end services and internet-facing APIs.
- **NAT Gateway:** NAT Gateways will be used in each region to allow instances in private subnets to access the internet securely for third-party API requests.
- **Application Load Balancing (ALB):** Application Load Balancers will distribute incoming traffic across multiple instances in different availability zones, ensuring high availability and scaling.
- **Amazon RDS with Multi-AZ:** The database layer will use Amazon RDS with Multi-AZ deployments for high availability and automatic failover. Cross-region replication will be set up for disaster recovery.
- **Security:** Security Groups and Network ACLs will be used to control traffic within the VPC. Developers will access the network through a secure bastion host.

#### **Reasoning**
The architecture is designed for high availability, fault tolerance, and scalability. By deploying across two regions and using multiple availability zones, the platform ensures that it can handle regional outages and continue operating. I am using Route 53 so that the traffic can be distributed to closest region. Then there is Internet Gateway that will connect Public Subnet to the Internet. Then there is Application Load Balancer that will distribute traffic to the application of different Availability Zone.

#### **Networking Components and Use Cases**
- **VPC:** Segregates the network and isolates different environments (development, testing, production).
- **EC2:** Run backend and frontend applications.
- **Subnets:** Separate public and private subnets to host frontend and backend services securely.
- **NAT Gateway:** Enables secure outbound internet traffic from private subnets.
- **Application Load Balancer:** Distributes traffic across multiple instances for high availability.
- **Amazon RDS with Multi-AZ:** Provides a highly available and fault-tolerant database solution.
- **Route 53:** Distributes traffic to multiple regions.
  
### 3. **Cost Estimates**

Below is a high-level cost estimation table for different user scales. These estimates are for illustrative purposes and will vary based on specific usage patterns and AWS pricing at the time.

| Component              | Concurrent 100 Users | Concurrent 10,000 Users | Concurrent 100,000 Users | Monthly 1 Lakh Users | Monthly 10 Lakh Users | Monthly 100 Million Users |
|------------------------|----------------------|-------------------------|--------------------------|----------------------|-----------------------|---------------------------|
| **EC2 Instances**      | $50/month            | $500/month               | $5,000/month              | $500/month           | $5,000/month          | $50,000/month              |
| **NAT Gateway**        | $30/month            | $300/month               | $3,000/month              | $300/month           | $3,000/month          | $30,000/month              |
| **RDS Multi-AZ**       | $100/month           | $1,000/month             | $10,000/month             | $1,000/month         | $10,000/month         | $100,000/month             |
| **Load Balancers**     | $15/month            | $150/month               | $1,500/month              | $150/month           | $1,500/month          | $15,000/month              |
| **Route 53**   | $5/month            | $5/month                | $5/month                 | $10/month            | $10/month             | $40/month                  |
| **Bastion Host**   | $10/month            | $10/month                | $10/month                 | $10/month            | $10/month             | $10/month                  |

### **Total Estimated Costs:**
- **100 Concurrent Users:** Approximately $265/month
- **10,000 Concurrent Users:** Approximately $2,560/month
- **100,000 Concurrent Users:** Approximately $25,510/month
- **1 Lakh Monthly Users:** Approximately $2,560/month
- **10 Lakh Monthly Users:** Approximately $25,510/month
- **100 Million Monthly Users:** Approximately $255,510/month

These estimates include costs for essential AWS services, and additional charges may apply based on data transfer, additional storage, and advanced security configurations. Always refer to the [AWS Pricing Calculator](https://calculator.aws/#/) for more precise calculations based on your specific use case.