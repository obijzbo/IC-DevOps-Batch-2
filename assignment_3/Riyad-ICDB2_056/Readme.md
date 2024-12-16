# Design a Network Architecture
## Project Requirements:
Design a network architecture for a platform that will serve as a real estate finder. People will come and search for houses, bid on them, chat with the buyer/seller. The platform will fetch data from many 3rd party services for different countries and cities. The networking architecture must support 2 regions and 2 availability zones. Developers will be using the network to do development work as well.

## Key checkpoints:
1. Design the diagram using any free online tools like draw.io, lucid chart, excalidraw.
2. The diagram must be added as a picture in the readme file in the PR

3. List all assumptions you are making for the design

4. Write a detailed 200–500-word summary with the following 4 sections: project details, architecture decisions, reasoning and networking components used and their use case.

5. Make cost estimates for different number of users (concurrent 100, 10000, 100000 user, monthly 1 lac, 10 lacs and 100 million user) and data component wise. There should be a table.

## Solution:
### **Diagrams:**
![Network architecture drawio](https://github.com/user-attachments/assets/cb1f3dec-f16b-4239-b0ea-0b473cc8967f)

### Assumptions :
1. **Platform Overview:** Users search, bid on properties, and chat with buyers/sellers. The platform integrates with third-party services for property data across countries and cities.

2. **Regions and Availability Zones:** Supports 2 regions with 2 availability zones (AZ) each for high availability and disaster recovery.

3. **DNS and Traffic Routing:** Route 53 will handle DNS with geolocation or latency-based routing to direct users to the nearest region or AZ.

4. **Network Segmentation:**

- **Public Subnets:** For web servers, load balancers, and internet-facing services.
- **Private Subnets:** For application servers and RDS databases, isolated for security.

**Database:** RDS will be used for databases, with potential cross-region replication for redundancy.

**Developer Access:** Secure VPN for developers to connect to private subnets for development and testing.

**Third-Party Integrations:** API gateways will manage secure connections to external real estate data providers.

**Security:** Strict security groups and ACLs will control access. Data encryption will be enforced for both in transit and at rest.

**Traffic Management:** Elastic Load Balancers and auto-scaling will handle incoming traffic and ensure system performance during peak loads.

**Monitoring:** CloudWatch and VPC Flow Logs will provide monitoring and logging for traffic, performance, and security.

This architecture ensures scalability, availability, security, and efficient traffic management.

## summary

1. **Project Details:**
The Real Estate Finder platform enables users to search, bid on properties, and communicate with buyers and sellers. It integrates with third-party services to fetch listings across different countries and cities. The platform is designed to support two geographic regions, each with two availability zones, ensuring high availability, scalability, and disaster recovery. Developers require secure access for development and maintenance, while the architecture must prioritize security, performance, and reliable data management, handling both user traffic and external integrations.

2. **Architecture Decisions:**
Key AWS services include Route 53, VPCs, RDS, S3, NAT Gateway, CloudFront, and Amazon CloudWatch. The architecture is split into two regions with two availability zones each, providing fault tolerance and redundancy. Public subnets host internet-facing services, including a NAT Gateway for secure outbound traffic from private subnets, which developers can use for their work. Private subnets host sensitive components like databases and application servers.

Amazon S3 stores static content such as property images, while CloudFront is used for fast, global content delivery. Route 53 handles DNS and routing, and Amazon CloudWatch provides monitoring and logging of the platform's performance. RDS is the managed database solution, offering cross-region replication to enhance availability and data integrity.

3. **Reasoning:**
Distributing resources across two regions and availability zones ensures high availability and fault tolerance in the event of a regional failure. Public/private subnet segregation enhances security, with public subnets hosting only internet-facing components, while private subnets secure backend services. The NAT Gateway allows resources in private subnets to access the internet securely without being exposed, a key feature for developer operations and application updates.

CloudFront improves content delivery speed by caching static assets (e.g., images, documents) in edge locations, ensuring faster load times for global users. S3 provides reliable, scalable storage for media and backups, and Route 53 optimizes traffic routing for better user experience. Amazon CloudWatch offers comprehensive performance monitoring, security alerts, and troubleshooting data, ensuring continuous system oversight.

4.**Networking Components Used and Their Use Case:**

- **VPC (Virtual Private Cloud):** Segments the network into isolated regions for secure resource management.
- **Route 53:** Routes user traffic efficiently to the nearest region, improving response time and user experience.
- **Public Subnet:** Hosts internet-facing resources like load balancers, NAT gateways, and web servers.
- **Private Subnet:** Contains sensitive components like databases and application servers, shielded from direct internet access.
- **NAT Gateway:** Allows instances in private subnets to securely access the internet for updates or integrations without exposing them.
- **RDS (Relational Database Service):** Managed database for scalability, availability, and cross-region replication.
- **S3 (Amazon Simple Storage Service):** Provides scalable storage for static assets and backups with high availability.
- **CloudFront:** Global content delivery network (CDN) that accelerates the distribution of property images, documents, and other assets.
- **VPN (Virtual Private Network):** Provides developers with secure access to the platform’s private subnets for development tasks.
- **Elastic Load Balancers (ELB):** Distributes user traffic across multiple instances for high availability.
- **Amazon CloudWatch:** Monitors performance metrics, logs, and alerts, providing critical insights into system health and security.

## Cost Estimate Table for Different Numbers of Users and Data Components:

The following table provides estimated monthly costs for different numbers of concurrent and monthly users based on various AWS services used in the platform architecture. This estimate includes key services such as EC2, RDS, S3, CloudFront, NAT Gateway, Route 53, VPN, and Amazon CloudWatch.

| **Component** | **100 Concurrent / 100K**<br>**Monthly Users** | **10,000 Concurrent / 1 Million**<br>**Monthly Users** | **100,000 Concurrent / 100 Million**<br>**Monthly Users** |
|----------------------------|-----------------------------------------------|--------------------------------------------------------|-----------------------------------------------------------|
| **EC2 (Compute)**           | $100 - $300/month<br>(small instances)        | $3,000 - $5,000/month<br>(midsize instances)            | $30,000 - $50,000/month<br>(large instances)               |
| **RDS (Database)**          | $200 - $500/month<br>(small DB instance)      | $1,000 - $3,000/month<br>(midsize DB instance)          | $10,000 - $30,000/month<br>(large DB instance)             |
| **S3 (Storage)**            | $10 - $50/month<br>(100 GB)                   | $200 - $500/month<br>(1 TB)                             | $3,000 - $5,000/month<br>(10 TB)                           |
| **CloudFront (CDN)**        | $20 - $100/month<br>(low data)                | $500 - $1,000/month<br>(moderate data)                  | $10,000 - $20,000/month<br>(high data volume)              |
| **NAT Gateway**             | $50 - $100/month<br>(light traffic)           | $500 - $1,000/month<br>(moderate traffic)               | $5,000 - $10,000/month<br>(heavy traffic)                  |
| **VPN for Developers**      | $30 - $50/month                               | $100 - $300/month                                       | $500 - $1,000/month                                        |
| **Route 53 (DNS)**          | $10 - $20/month                               | $50 - $200/month                                        | $500 - $2,000/month                                        |
| **Amazon CloudWatch**       | $10 - $30/month<br>(basic logs)               | $200 - $500/month<br>(detailed monitoring)              | $1,000 - $3,000/month<br>(extensive monitoring)            |
| **Total Monthly Cost**      | **$430 - $1,150/month**                            | **$5,550 - $11,500/month**                                      | **$60,000 - $121,000/month**                                     |
