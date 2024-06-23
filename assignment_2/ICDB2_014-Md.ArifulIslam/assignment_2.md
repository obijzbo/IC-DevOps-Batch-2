# Linux Fundamentals

# 1.File System Navigation

## 1.1.List the contents of the home directory:
`ls ~`
## 1.2.Change the current directory to /var/log and list its contents:
`cd /var/log`
`ls`
## 1.3.Find and display the path to the bash executable using the which command:
`which bash`
## 1.4.Find current shell:
`echo $SHELL`

# 2.File and Directory Operations

## 2.1.Create a directory named linux_fundamentals in your home directory:
`mkdir ~/linux_fundamentals`
## 2.2.Inside linux_fundamentals, create a subdirectory named scripts:
`mkdir ~/linux_fundamentals/scripts`
## 2.3.Create an empty file named example.txt inside the linux_fundamentals directory:
`touch ~/linux_fundamentals/example.txt`
## 2.4.Copy example.txt to the scripts directory:
`cp ~/linux_fundamentals/example.txt ~/linux_fundamentals/scripts/`
## 2.5.Move example.txt from linux_fundamentals to linux_fundamentals/backup:
`mv ~/linux_fundamentals/example.txt ~/linux_fundamentals/backup/`

# 3.Permissions

## 3.1.Change the permissions of example.txt:
`chmod 640 ~/linux_fundamentals/example.txt`
## 3.2.Verify the permission changes using ls -l:`
`ls -l ~/linux_fundamentals/example.txt`

# 4.File Modification

## 4.1.Create a file named example.txt in your home directory:
`touch ~/example.txt`
## 4.2.Change the owner of example.txt to a user named student:
`sudo chown student ~/example.txt`
## 4.3.Change the group of example.txt to a group named students:
`sudo chgrp students ~/example.txt`
## Verify the changes using appropriate commands:
`ls -l ~/example.txt`

# 5.Ownership

## 5.1.Create a directory named project in your home directory:
`mkdir ~/project`
## 5.2.Create a file named report.txt inside the project directory:
`touch ~/project/report.txt`
## 5.3.Set the permissions of report.txt to read and write for the owner, and read-only for the group and others.
`chmod 644 ~/project/report.txt`
## 5.4.Set the permissions of the project director to read, write, and execute for the owner, and read and execute for the group and others
`chmod 755 ~/project`
## 5.5.Verify the changes using appropriate commands:
`ls -l ~/project`

# 6.User add/modify

## 6.1.Create a new user named developer:
`sudo adduser developer`
## 6.2.Set the home directory of the user developer to /home/developer_home
`sudo usermod -d /home/developer_home developer`
## 6.3.Assign the shell /bin/sh to the user developer:
`sudo usermod -s /bin/sh developer`
## 6.4.Verify the new user's information:
`finger developer`
## 6.5.Change the username of the user developer to devuser:
`sudo usermod -l devuser developer`
## 6.6.Add devuser to a group named devgroup:
`sudo usermod -aG devgroup devuser`
## 6.7.Set the password of devuser to devpass:
`sudo passwd devuser`
## 6.8.Verify the changes made to the user:
`id devuser`

# 7.Hard/Soft Link

## 7.1.Create a file named original.txt in your home directory:
`touch ~/original.txt`
## 7.2.Create a symbolic link named softlink.txt pointing to original.txt:
`ln -s ~/original.txt ~/softlink.txt`
## 7.3.Verify the symbolic link and ensure it points to the correct file:
`ls -l ~/softlink.txt`
## 7.4.Delete the original file original.txt and observe the status of the symbolic link:
`rm ~/original.txt`
`ls -l ~/softlink.txt`
## 7.5.Create a file named datafile.txt in your home directory:
`touch ~/datafile.txt`
## 7.6.Create a hard link named hardlink.txt pointing to datafile.txt:
`ln ~/datafile.txt ~/hardlink.txt`
## 7.7.Verify the hard link and ensure it correctly points to the file:
`ls -li ~/datafile.txt ~/hardlink.txt`
## 7.8.Check the inode of both datafile.txt and hardlink.txt:
`ls -li ~/datafile.txt ~/hardlink.txt`
## 7.9.Delete the original file datafile.txt and observe the status of the hard link.
`rm datafile.txt`
`ls -li hardlink.txt`
## 7.10.Find all .txt files in your home directory:
`find ~ -type f -name "*.txt"`

# 8.Package Installation

## 8.1.Update Repository Cache using apt or apt-get
## Before installing any package, it's recommended to update the repository cache to ensure you have the latest package information.

## Using apt:
`sudo apt update`
## Using apt-get:
`sudo apt-get update`
## 8.2.Install a Package Named tree
## The tree package displays directory structures in a tree-like format.

## Using apt:
`sudo apt install tree`
## Using apt-get:
`sudo apt-get install tree`
## 8.3.Install Google Cloud SDK (gcloud CLI tool) using apt
## To install the Google Cloud SDK, which includes the gcloud CLI tool, follow these steps:

## Add the Cloud SDK distribution URI for Debian-based systems:
`export CLOUD_SDK_REPO="cloud-sdk-$(lsb_release -c -s)"`
`echo "deb http://packages.cloud.google.com/apt $CLOUD_SDK_REPO main" | sudo tee -a /etc/apt/sources.list.d/``google-cloud-sdk.list`
## Import the Google Cloud public key:
`curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -`
## Update the package list:
`sudo apt-get update`
## Install the Google Cloud SDK:
`sudo apt-get install google-cloud-sdk`
## Additional Steps after Installation
## After installing Google Cloud SDK, you can initialize it and configure your credentials and project settings using:
`gcloud init`
