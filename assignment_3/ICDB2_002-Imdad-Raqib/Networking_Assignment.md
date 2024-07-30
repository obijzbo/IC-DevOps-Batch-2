## Network Diagram

![[Network Diagram for Real Estate Platform]](aws-vpc.drawio.svg)


## Project Details

The diagram outlines a basic network architecture for a real estate platform. The platform aims to provide services such as property search, bidding, and user interactions. It incorporates a multi-region strategy for redundancy and scalability.


## Architecture Decisions
Key design choices include:

* **Multi-Region Deployment:** Distributes critical components across two regions for high availability and disaster recovery.  
* **VPC Segmentation:** Divides the network into isolated VPCs (Virtual Private Cloud) for enhanced security and resource management.  
* **Public and Private Subnets:** Separates internet-facing services from internal components, improving security posture.  
* **Transit Gateway:** Enables communication between VPCs in different regions for seamless interaction.  
* **Load Balancing:** Distributes incoming traffic across multiple instances to optimize performance and scalability.  
* **Database Placement:** Locates the MySQL database within the private subnet for heightened security.

## Reasoning
- The multi-region approach strengthens system resilience by distributing critical components across geographically separate locations. 
- VPC isolation provides superior security and control over network resources.  
- Public and private subnets enhance security posture by segregating resources based on their internet exposure. 
- The Transit Gateway simplifies inter-region communication, reducing network complexity. 
- Load balancing optimizes resource utilization and improves user experience. Placing the MySQL database in the private subnet safeguards sensitive data from external threats.  

## Networking Components and Use Cases
* **VPCs (Virtual Private Cloud):** Provide isolated network environments for resources within each region.  
* **Subnets:** Divide VPCs into smaller networks for organizing resources based on functionality (public or private).  
* **Internet Gateway:** Enables internet connectivity for public-facing services in Region-1.  
* **Transit Gateway:** Connects VPCs in different regions for seamless communication.  
* **Load Balancer:** Distributes incoming traffic across multiple instances to enhance performance and availability.  
* **MySQL Database:** Stores critical platform data, such as property listings, user information, and bidding history.  