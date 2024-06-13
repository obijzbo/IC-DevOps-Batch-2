# IC-DevOps-Batch-2

## Name: Syed Kamruzzaman
## Student_id: ICDB2_008 - syed kamruzzaman



<br><br>
Linux Fundamentals
==================
<br>

___

### File System Navigation

| Description | Command |
| ------- | ----------- |
| List the contents of the home directory. |`ls ~`|
| Change the current directory to /var/log and list its contents. |`cd /var/log && ls -al` |
| Find and display the path to the bash executable using the which command. |`echo $SHELL or which $SHELL ` |
<br>

### File and Directory Operations

| Description | Command |
| ------- | ----------- |
| Create a directory named linux_fundamentals in your home directory. |`mkdir ~/linux_fundamentals`|
| Inside linux_fundamentals, create a subdirectory named scripts. |`mkdir ~/linux_fundamentals/scripts` |
| Create an empty file named example.txt inside the linux_fundamentals directory. |`touch ~/linux_fundamentals/example.txt` |
| Copy example.txt to the scripts directory. |`cp ~/linux_fundamentals/example.txt ~/linux_fundamentals/scripts/` |
| Move example.txt from linux_fundamentals to linux_fundamentals/backup. |`mkdir ~/linux_fundamentals/backup && mv ~/linux_fundamentals/example.txt ~/linux_fundamentals/backup/` |
<br>

### Permissions

| Description | Command |
| ------- | ----------- |
| Change the permissions of example.txt to read and write for the owner, and read-only for the group and others. |`chmod 644 ~/linux_fundamentals/backup/example.txt`|
| Verify the permission changes using ls -l. |`ls -al ~/linux_fundamentals/backup/example.txt` |
<br>


### File Modification

| Description | Command |
| ------- | ----------- |
| Create a file named example.txt in your home directory. |`touch ~/example.txt`|
| Change the owner of example.txt to a user named student. |`sudo chown student ~/example.txt` |
| Change the group of example.txt to a group named students. |`sudo chgrp students ~/example.txt` |
| Verify the changes using appropriate commands. |`ls -al ~/example.txt` |
<br>


### Ownership

| Description | Command |
| ------- | ----------- |
| Create a directory named project in your home directory. |`mkdir ~/project`|
| Create a file named report.txt inside the project directory. |`touch ~/project/report.txt` |
| Set the permissions of report.txt to read and write for the owner, and read-only for the group and others. |`chmod 644 ~/project/report.txt` |
| Set the permissions of the project directory to read, write, and execute for the owner, and read and execute for the group and others. |`chmod 755 ~/project` |
| Verify the changes using appropriate commands. |`ls -al ~/project/report.txt` |
<br>


### User add/modify

| Description | Command |
| ------- | ----------- |
| Create a new user named developer. |`sudo useradd -m -d /home/developer_home -s /bin/bash developer`|
| Verify the new user's information. |`cat /etc/passwd` |
| Change the username of the user developer to devuser. |`sudo usermod -l devuser developer` |
| Add devuser to a group named devgroup. |`sudo groupadd devgroup && sudo usermod -aG devgroup devuser` |
| Verify the changes made to the user. |`cat /etc/passwd && cat /etc/passwd OR getend passwd devuser && getent group devgroup` |
|  Verify the shell and other user information. |`grep "^devuser" /etc/passwd` |
<br>



### Hard/Soft Link

| Description | Command |
| ------- | ----------- |
| Create a file named original.txt in your home directory. |`touch ~/original.txt`|
| Create a symbolic link named softlink.txt pointing to original.txt. |`ln -s ~/original.txt ~/softlink.txt` |
| Verify the symbolic link and ensure it points to the correct file. |`ls -l ~/softlink.txt OR ls -ali ~` |
| Delete the original file original.txt and observe the status of the symbolic link. |`rm ~/original.txt && ls -l ~/softlink.txt` |
| Create a file named datafile.txt in your home directory. |`touch ~/datafile.txt` |
| Create a hard link named hardlink.txt pointing to datafile.txt. |`ln ~/datafile.txt ~/hardlink.txt` |
| Verify the hard link and ensure it correctly points to the file. |`ls -l ~/datafile.txt ~/hardlink.txt` |
| Check the inode of both datafile.txt and hardlink.txt. |`ls -i ~/datafile.txt ~/hardlink.txt` |
| Delete the original file datafile.txt and observe the status of the hard link. |`rm ~/datafile.txt && ls -l ~/hardlink.txt` |
| Find all .txt files in your home directory. |`find ~ -name "*.txt"` |
<br>



### Package installation

| Description | Command |
| ------- | ----------- |
| Update repository cache using apt or apt-get. |`udo apt update`|
| Install a package named tree. |`sudo apt install tree` |
| Install gcloud CLI tool using apt ( Follow instructions from here: https://cloud.google.com/sdk/docs/install#deb ). | 

`echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] http://packages.cloud.google.com/apt cloud-sdk main"` 
<br> 
 `sudo apt-get install apt-transport-https ca-certificates gnupg`
 <br> 
 `curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -`
 <br> 
 `sudo apt-get update && sudo apt-get install google-cloud-sdk`
 <br> 
 `tree --version && gcloud --version`
 
 |

<br>


