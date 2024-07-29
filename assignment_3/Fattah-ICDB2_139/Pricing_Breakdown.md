# AWS Pricing Breakdown for concurrent and monthly users

## 1. For 100 concurrent users:

- **EC2 (Avg. 3 t3.micro instances):**

  - $0.0104 per hour \* 730 hours = $22.78

- **EBS (20 GB gp3 per instance):**

  - 3 \* 20 GB \* $0.08 = $4.80

- **Data transfer to Internet cost (100 GB/month):**

  - 100 GB \* $0.09 = $9.00

- **NAT:**

  - NAT cost: 730 hrs x $0.056 = $40.88
  - NAT data processing cost: 50 GB per month x $0.056 = $2.80
  - Development Region NAT cost: $84
  - Total NAT cost: 2 x ($40.88 + $2.80) = $87.36 + $84 = $171.36

- **Route53:**

  - Hosted Zone: $0.50 per month
  - Queries: Assuming 100,000 queries per month
    - Standard queries: 100,000 x $0.0000004 = $0.04
  - Total monthly Route53 cost: $0.50 + $0.04 = $0.54

- **RDS:**

  - Primary instance: db.t3.small (2 vCPU, 2 GiB RAM)
    - Cost: $0.034 per hour \* 730 hours = $24.82
  - Read replica: db.t3.small
    - Cost: $0.034 per hour \* 730 hours = $24.82
  - Storage: 100 GB gp2 for each instance
    - Cost: 200 GB \* $0.115 per GB-month = $23.00
  - Total RDS monthly cost: $24.82 + $24.82 + $23.00 = $72.64

- **Elasticsearch:**

  - Instance type: t3.small.elasticsearch (2 vCPU, 2 GiB RAM)
  - Number of instances: 2 (for high availability)
  - Storage: 50 GB per instance
  - Cost: 2 \* ($0.036 per hour \* 730 hours + 50 GB \* $0.10 per GB-month) = $62.56

- **ElastiCache:**

  - Instance type: cache.t3.micro (1 vCPU, 0.5 GiB RAM)
  - Number of nodes: 2 (for high availability)
  - Cost: 2 \* $0.018 per hour \* 730 hours = $26.28

- **ALB (Application Load Balancer):**
  - 1 Application Load Balancer
  - Cost: $0.0225 per hour \* 730 hours = $16.43
  - LCU cost (assuming low usage): $10

**Total estimated monthly cost: $396.39**

## 2. For 10,000 concurrent users:

- **EC2 (Avg. 40 c5.large instances):**

  - $0.085 per hour \* 730 hours \* 40 = $2,482.00

- **EBS (50 GB gp3 per instance):**

  - 40 \* 50 GB \* $0.08 = $160.00

- **Data transfer to Internet cost (10,000 GB/month):**

  - 10,000 GB \* $0.09 = $900.00

- **NAT:**

  - NAT Cost: $40.88
  - NAT data processing cost: 2,500 GB per month x $0.056 = $140.00
  - Development Region NAT cost: $84
  - Total NAT Cost: 2 \*($140 + $40.88) + $84 = $445.76

- **Route53:**

  - Hosted Zone: $0.50 per month
  - Queries: Assuming 10,000,000 queries per month
    - Standard queries: 10,000,000 x $0.0000004 = $4.00
  - Total monthly Route53 cost: $0.50 + $4.00 = $4.50

- **RDS:**

  - Primary instance: db.r5.large (2 vCPU, 16 GiB RAM)
    - Cost: $0.29 per hour \* 730 hours = $211.70
  - Read replica: db.r5.large
    - Cost: $0.29 per hour \* 730 hours = $211.70
  - Storage: 500 GB gp2 for each instance
    - Cost: 1000 GB \* $0.115 per GB-month = $115.00
  - Total RDS monthly cost: $211.70 + $211.70 + $115.00 = $538.40

- **Elasticsearch:**

  - Instance type: r5.large.elasticsearch (2 vCPU, 16 GiB RAM)
  - Number of instances: 3 (for better performance and high availability)
  - Storage: 200 GB per instance
  - Cost: 3 \* ($0.286 per hour \* 730 hours + 200 GB \* $0.10 per GB-month) = $687.14

- **ElastiCache:**

  - Instance type: cache.m5.large (2 vCPU, 8 GiB RAM)
  - Number of nodes: 2 (for high availability)
  - Cost: 2 \* $0.154 per hour \* 730 hours = $224.84

- **ALB (Application Load Balancer):**
  - 1 Application Load Balancer
  - Cost: $0.0225 per hour \* 730 hours = $16.43
  - LCU cost (moderate usage): $100

**Total estimated monthly cost: $5,559.07**

## 3. For 100,000 concurrent users:

- **EC2 (Avg. 100 c5.2xlarge instances):**

  - $0.34 per hour \* 730 hours \* 100 = $24,820.00

- **EBS (100 GB gp3 per instance):**

  - 100 \* 100 GB \* $0.08 = $800.00

- **NAT:**

  - NAT Cost 730 hrs x $0.056 = $40.88
  - NAT data processing cost: 25,000 GB per month x $0.056 = $1,400.00
  - NAT Development Region Cost: $84
  - Total NAT cost: 2 NAT Gateways x $1,440.88 + $84 = $2,965.76

- **Data transfer to Internet cost (100,000 GB/month):**

  - First 10,000 GB: 10,000 GB \* $0.09 = $900.00
  - Next 40,000 GB: 40,000 GB \* $0.085 = $3,400.00
  - Remaining 50,000 GB: 50,000 GB \* $0.07 = $3,500.00
  - Total data transfer: $900.00 + $3,400.00 + $3,500.00 = $7,800.00

- **Route53:**

  - Hosted Zone: $0.50 per month
  - Queries: Assuming 100,000,000 queries per month
    - First 1B queries: 100,000,000 x $0.0000004 = $40.00
  - Total monthly Route53 cost: $0.50 + $40.00 = $40.50

- **RDS:**

  - Primary instance: db.r5.2xlarge (8 vCPU, 64 GiB RAM)
    - Cost: $1.16 per hour \* 730 hours = $846.80
  - Read replicas: 2 \* db.r5.2xlarge
    - Cost: 2 \* $1.16 per hour \* 730 hours = $1,693.60
  - Storage: 2 TB gp2 for each instance
    - Cost: 6000 GB \* $0.115 per GB-month = $690.00
  - Total RDS monthly cost: $846.80 + $1,693.60 + $690.00 = $3,230.40

- **Elasticsearch:**

  - Instance type: r5.2xlarge.elasticsearch (8 vCPU, 64 GiB RAM)
  - Number of instances: 5 (for better performance and high availability)
  - Storage: 500 GB per instance
  - Cost: 5 \* ($1.146 per hour \* 730 hours + 500 GB \* $0.10 per GB-month) = $4,432.90

- **ElastiCache:**

  - Instance type: cache.r5.2xlarge (8 vCPU, 53.2 GiB RAM)
  - Number of nodes: 3 (for better performance and high availability)
  - Cost: 3 \* $1.012 per hour \* 730 hours = $2,216.28

- **ALB (Application Load Balancer):**
  - 2 Application Load Balancers (for better distribution)
  - Cost: 2 \* $0.0225 per hour \* 730 hours = $32.86
  - LCU cost (high usage): $1,000

**Total estimated monthly cost: $47,338.70**

## 4. For 1 lakh (100,000) monthly users:

- **EC2 (Avg. 30 c5.large instances):**

  - $0.085 per hour \* 730 hours \* 30 = $1,861.50

- **EBS (50 GB gp3 per instance):**

  - 30 \* 50 GB \* $0.08 = $120.00

- **Data transfer to Internet cost (5,000 GB/month):**

  - 5,000 GB \* $0.09 = $450.00

- **NAT costs:** $87.36

- **Route53:** $0.54

- **RDS:** $538.40

- **Elasticsearch:** $687.14

- **ElastiCache:**

  - Instance type: cache.m5.large (2 vCPU, 8 GiB RAM)
  - Number of nodes: 2 (for high availability)
  - Cost: 2 \* $0.154 per hour \* 730 hours = $224.84

- **ALB (Application Load Balancer):**
  - 1 Application Load Balancer
  - Cost: $0.0225 per hour \* 730 hours = $16.43
  - LCU cost (moderate usage): $75

**Total estimated monthly cost: $4,061.21**

## 5. For 10 lakh (1 million) monthly users:

- **EC2 (Avg. 70 c5.xlarge instances):**

  - $0.17 per hour \* 730 hours \* 70 = $8,687.00

- **EBS (75 GB gp3 per instance):**

  - 70 \* 75 GB \* $0.08 = $420.00

- **Data transfer to Internet cost (50,000 GB/month):**

  - 50,000 GB \* $0.085 = $4,250.00

- **NAT Gateway costs:** $320.88

- **Route53:**

  - Hosted Zone: $0.50
  - Queries: Assuming 50,000,000 queries per month
    - Standard queries: 50,000,000 x $0.0000004 = $20.00
  - Total: $20.50

- **RDS:**

  - Primary instance: db.r5.xlarge (4 vCPU, 32 GiB RAM)
    - Cost: $0.58 per hour \* 730 hours = $423.40
  - Read replica: db.r5.xlarge
    - Cost: $0.58 per hour \* 730 hours = $423.40
  - Storage: 1 TB gp2 for each instance
    - Cost: 2000 GB \* $0.115 per GB-month = $230.00
  - Total RDS: $1,076.80

- **Elasticsearch:**

  - Instance type: r5.xlarge.elasticsearch (4 vCPU, 32 GiB RAM)
  - Number of instances: 4
  - Storage: 300 GB per instance
  - Total: 4 \* ($0.572 per hour \* 730 hours + 300 GB \* $0.10 per GB-month) = $1,791.44

- **ElastiCache:**

  - Instance type: cache.r5.xlarge (4 vCPU, 26.6 GiB RAM)
  - Number of nodes: 2 (for high availability)
  - Cost: 2 \* $0.506 per hour \* 730 hours = $738.76

- **ALB (Application Load Balancer):**
  - 2 Application Load Balancers
  - Cost: 2 \* $0.0225 per hour \* 730 hours = $32.86
  - LCU cost (high usage): $500

**Total estimated monthly cost: $17,838.24**

## 6. For 100 million monthly users:

- **EC2 (Avg. 200 c5.4xlarge instances):**

  - $0.68 per hour \* 730 hours \* 200 = $99,280.00

- **EBS (200 GB gp3 per instance):**

  - 200 \* 200 GB \* $0.08 = $3,200.00

- **Data transfer to Internet cost (500,000 GB/month):**

  - First 10,000 GB: 10,000 GB \* $0.09 = $900.00
  - Next 40,000 GB: 40,000 GB \* $0.085 = $3,400.00
  - Remaining 450,000 GB: 450,000 GB \* $0.07 = $31,500.00
  - Total data transfer: $35,800.00

- **NAT Gateway costs:** $1,283.52

- **Route53:**

  - Hosted Zone: $0.50
  - Queries: Assuming 500,000,000 queries per month
    - Standard queries: 500,000,000 x $0.0000004 = $200.00
  - Total: $200.50

- **RDS:**

  - Primary instance: db.r5.4xlarge (16 vCPU, 128 GiB RAM)
    - Cost: $2.32 per hour \* 730 hours = $1,693.60
  - Read replicas: 3 \* db.r5.4xlarge
    - Cost: 3 \* $2.32 per hour \* 730 hours = $5,080.80
  - Storage: 4 TB gp2 for each instance
    - Cost: 16000 GB \* $0.115 per GB-month = $1,840.00
  - Total RDS: $8,614.40

- **Elasticsearch:**

  - Instance type: r5.4xlarge.elasticsearch (16 vCPU, 128 GiB RAM)
  - Number of instances: 8
  - Storage: 1 TB per instance
  - Total: 8 \* ($2.292 per hour \* 730 hours + 1000 GB \* $0.10 per GB-month) = $14,159.68

- **ElastiCache:**

  - Instance type: cache.r5.4xlarge (16 vCPU, 106.4 GiB RAM)
  - Number of nodes: 4 (for better performance and high availability)
  - Cost: 4 \* $2.024 per hour \* 730 hours = $5,910.08

- **ALB (Application Load Balancer):**
  - 4 Application Load Balancers (for better distribution)
  - Cost: 4 \* $0.0225 per hour \* 730 hours = $65.72
  - LCU cost (very high usage): $5,000

**Total estimated monthly cost: $173,513.90**
