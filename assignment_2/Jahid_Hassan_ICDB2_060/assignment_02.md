<h1 align="center"> Assignment 2 - Linux Fundamental </h1>

![image](https://github.com/obijzbo/IC-DevOps-Batch-2/assets/32175937/64524df5-a9b0-4912-9f93-258017c35e00)

<p align="center">Created <i>by <a href="https://github.com/Jahid1499">Jahid Hassan </a></i></p>


# Table of content
1. [File System Navigation](#file-system-navigation)
2. [File and Directory Operations](#file-and-directory-operations)
3. [File Modification](#file-modification)
4. [Ownership](#ownership)
5. [User add or modify](#user-add-or-modify)
6. [Hard Or Soft Link](#hard-or-soft-link)
7. [Package installation](#package-installation)

# File System Navigation

### 1. List the contents of the home directory.
```sh
    ls
```
![image](https://github.com/Jahid1499/chat-application/assets/32175937/7d0e8a64-4f3d-421c-922a-ea161f2d9532)

### 2. Change the current directory to /var/log and list its contents.
   
```sh
    cd var/log
    ls
```
![image](https://github.com/Jahid1499/chat-application/assets/32175937/29d2cc14-574c-45b1-bd78-b92e308ec279)

### 3. Find and display the path to the bash executable using the which command.

```sh
which $SHELL
```
![image](https://github.com/Jahid1499/chat-application/assets/32175937/d26dc826-f05b-494e-b540-f7233f57cc52)

### 4. Find current shell

> There are two way to find the current shell
```sh
echo $SHELL
echo $0
```
![image](https://github.com/Jahid1499/chat-application/assets/32175937/317504e3-e65b-4629-ac1a-8b4294ee7c2c)


# File and Directory Operations

### 1.Create a directory named linux_fundamentals in your home directory.
### 2.Inside linux_fundamentals, create a subdirectory named scripts.
### 3.Create an empty file named example.txt inside the linux_fundamentals directory.
### 4.Copy example.txt to the scripts directory.


![image](https://github.com/Jahid1499/chat-application/assets/32175937/2c255aed-8370-40db-934b-1214276cb776)

### 5. Move example.txt from linux_fundamentals to linux_fundamentals/backup.

![image](https://github.com/Jahid1499/chat-application/assets/32175937/3776ac56-6555-4364-830d-0efebb3c3fc1)

### 6. Change the permissions of example.txt to read and write for the owner, and read-only for the group and others.
### 7. Verify the permission changes using ls -l



![image](https://github.com/Jahid1499/chat-application/assets/32175937/a9e47dbb-84f2-41f2-8109-5bd84b587096)


# File Modification
### 1.Create a file named example.txt in your home directory.
### 2.Change the owner of example.txt to a user named student
### 3.Change the group of example.txt to a group named students.
### 4.Verify the changes using appropriate commands.

![image](https://github.com/Jahid1499/chat-application/assets/32175937/9972d363-e7da-42ec-bdf1-d42887cecbd4)


# Ownership

### 1.Create a file named report.txt inside the project directory.
### 2.Set the permissions of report.txt to read and write for the owner, and read-only for the group and others.
### 3.Set the permissions of the project directory to read, write, and execute for the owner, and read and execute for the group and others
### 4.Verify the changes using appropriate commands.


![image](https://github.com/Jahid1499/chat-application/assets/32175937/39821410-9256-428e-915a-ea43af0a34c0)

![image](https://github.com/Jahid1499/chat-application/assets/32175937/234c2c5c-ed7f-42a4-a560-7812984fe07a)


# User add or modify
### 1. Check user 

```sh
sudo /cat/passwd
```

![image](https://github.com/Jahid1499/chat-application/assets/32175937/d7bc963b-6115-43c3-a5a3-79ec2a22b46b)

![image](https://github.com/Jahid1499/chat-application/assets/32175937/e97a90e4-ac48-4f3c-a9fa-e8dc261b4112)

### 2. Create a new user named developer and check the information.

```sh
sudo useradd developer
sudo /cat/passwd
```

![image](https://github.com/Jahid1499/chat-application/assets/32175937/c0dc3037-4d21-411e-a60c-6329f323de5e)

![image](https://github.com/Jahid1499/chat-application/assets/32175937/77268264-03dd-4dac-86bf-21afc89e1134)

### 3. Set the home directory of the user developer to /home/developer_home.

#### Create developer_home directory
![image](https://github.com/Jahid1499/chat-application/assets/32175937/96a39957-b1f3-4f91-a3a3-5794ac5813be)

#### Check user home directory
![image](https://github.com/Jahid1499/chat-application/assets/32175937/e3e1bfab-be9c-4b81-86de-9ef2c66e6341)

####  Add user home directory to developer_home
![image](https://github.com/Jahid1499/chat-application/assets/32175937/da6af949-6227-4e5b-af9e-ec69645d6e43)

#### Check user home directory

![image](https://github.com/Jahid1499/chat-application/assets/32175937/f1f50cd5-5c08-413c-8046-c069510faa64)


### 4. Assign the shell /bin/sh to the user developer.
#### Check the shell list
![image](https://github.com/Jahid1499/chat-application/assets/32175937/fb9f3832-c6e7-4943-8ddc-a95e948cf5a3)


#### Check my current shell
![image](https://github.com/Jahid1499/chat-application/assets/32175937/b223ceb7-dbf0-40a4-9190-6af0456c8db4)

#### Check the developer current shell
![image](https://github.com/Jahid1499/chat-application/assets/32175937/6462918b-bcea-486c-9740-f9135c4a696a)

#### Assign the shell /bin/bash to the user developer and check the information.
![image](https://github.com/Jahid1499/chat-application/assets/32175937/e65803aa-740d-4366-adc5-dc6c1b928b1c)

#### Assign the shell /bin/sh to the user developer and check the information.
![image](https://github.com/Jahid1499/chat-application/assets/32175937/da9b147b-1e3e-4f55-a0bc-1254080607c1)

### 5. Verify the new user's information.
![image](https://github.com/Jahid1499/chat-application/assets/32175937/c36299cb-9d21-49ba-bf5a-24674900a383)

### 6. Change the username of the user developer to devuser.

#### Check the user list
![image](https://github.com/Jahid1499/chat-application/assets/32175937/de24e653-7827-4aa9-aed8-1587583c7918)

![image](https://github.com/Jahid1499/chat-application/assets/32175937/9f7b5842-b60b-4470-a459-d2ad8cf1a71a)

#### Rename user name
![image](https://github.com/Jahid1499/chat-application/assets/32175937/01ccf459-247b-499c-bcba-9e43084ec457)

#### Check the information
![image](https://github.com/Jahid1499/chat-application/assets/32175937/f76264de-7fdb-4438-b6c8-06ff163b7ab7)


### 7. Add devuser to a group named devgroup.

#### Check the group list
![image](https://github.com/Jahid1499/chat-application/assets/32175937/bcd26b12-d253-49a6-84c7-01ffac6cb2d1)

![image](https://github.com/Jahid1499/chat-application/assets/32175937/c227f547-40f7-4ded-92de-310c305edeaa)

#### Add new group
![image](https://github.com/Jahid1499/chat-application/assets/32175937/d80159e2-cfee-47c0-b0a1-94c486bc8dcd)

#### Check the group list
![image](https://github.com/Jahid1499/chat-application/assets/32175937/bcd26b12-d253-49a6-84c7-01ffac6cb2d1)

![image](https://github.com/Jahid1499/chat-application/assets/32175937/a6f770e0-6826-4730-89fd-fb0eec609b2c)

#### Add devuser to devgroup
![image](https://github.com/Jahid1499/chat-application/assets/32175937/de7f71ef-d08d-4cd4-89db-918ba8a45855)

#### Check the user information
![image](https://github.com/Jahid1499/chat-application/assets/32175937/d46da405-6e38-4ce7-8982-9537334b0426)

### 8. Set the password of devuser to devpass
![image](https://github.com/Jahid1499/chat-application/assets/32175937/51e47b08-751f-4876-98d5-99b2a4c348fa)

### 9. Verify the changes made to the user.
![image](https://github.com/Jahid1499/chat-application/assets/32175937/a659eae5-b860-4dbd-a0af-0d1953c1bb27)

![image](https://github.com/Jahid1499/chat-application/assets/32175937/99b42bdd-0551-4902-9a8b-8f39e2dc1fcd)

# Hard Or Soft Link

### 1.Create a file named original.txt in your home directory.
### 2.Create a symbolic link named softlink.txt pointing to original.txt.
### 3.Verify the symbolic link and ensure it points to the correct file.

![image](https://github.com/Jahid1499/chat-application/assets/32175937/1827adbf-e4bb-44b2-8b38-e0dfbe056487)

### 4. Delete the original file original.txt and observe the status of the symbolic link.

![image](https://github.com/Jahid1499/chat-application/assets/32175937/c9f05bcd-e57e-4dcb-9c6f-fcf0c6d78b52)

> The (broken link) indicator shows that **softlink.txt** is now pointing to a file that doesn't exist.


### 5.Create a file named datafile.txt in your home directory.
### 6.Create a hard link named hardlink.txt pointing to datafile.txt.
### 7.Verify the hard link and ensure it correctly points to the file.

![image](https://github.com/Jahid1499/chat-application/assets/32175937/8887f8a3-0fbe-4689-bfba-38284c0870ff)

> Here, 1314641 is the inode number, and both datafile.txt and hardlink.txt share the same inode, indicating they are hard links

### 8. Check the inode of both datafile.txt and hardlink.txt

![image](https://github.com/Jahid1499/chat-application/assets/32175937/8bf44fc1-82d2-4505-bec3-a5bf6df9a248)

### 9. Delete the original file datafile.txt and observe the status of the hard link.
![image](https://github.com/Jahid1499/chat-application/assets/32175937/2b00f98d-60ee-47bc-9a60-2db0d8f5890d)

### 10. Find all .txt files in your home directory.

![image](https://github.com/Jahid1499/chat-application/assets/32175937/67247986-e144-4d53-88a5-99872f278fb7)

![image](https://github.com/Jahid1499/chat-application/assets/32175937/f89d220b-497e-405c-83e5-c4e79f97516b)


# Package installation

### 1. Update repo cache using apt/apt-get

```sh
sudo apt-get update
```
![image](https://github.com/Jahid1499/chat-application/assets/32175937/d9003b74-437f-4052-91d1-8bd9800b42ab)


### 2. Install a package named tree
```sh
sudo apt-get install tree
```
![image](https://github.com/Jahid1499/chat-application/assets/32175937/e475e614-cda5-4d68-bc7f-1a10574fbc69)

### 3. Install gcloud CLI tool using apt ( Follow instructions from here: https://cloud.google.com/sdk/docs/install#deb )

```sh
sudo apt update
```
![image](https://github.com/Jahid1499/chat-application/assets/32175937/bdbe62cc-f61f-4a98-90cf-6758943131da)

```sh
sudo apt install apt-transport-https ca-certificates gnupg
```
![image](https://github.com/Jahid1499/chat-application/assets/32175937/51762bdf-14a7-4963-8ae2-68db57b10a49)


```sh
echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
```
![image](https://github.com/Jahid1499/chat-application/assets/32175937/17271599-2a43-4af3-8381-2947a4641f75)


```sh
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo tee /usr/share/keyrings/cloud.google.gpg
```
![image](https://github.com/Jahid1499/chat-application/assets/32175937/9a95acca-91af-490f-b2f6-a679431cf991)


```sh
sudo apt update
```
![image](https://github.com/Jahid1499/chat-application/assets/32175937/1e1d4974-9e02-420e-81de-c0b4193629f0)

```sh
sudo apt-get update && sudo apt-get install google-cloud-cli
```
![image](https://github.com/Jahid1499/chat-application/assets/32175937/fce68b83-cc39-498f-9ddf-3cc752169f6c)

```sh
gcloud init
```
![image](https://github.com/Jahid1499/chat-application/assets/32175937/0e346027-ad0d-47f5-b904-efb39f4ee178)

